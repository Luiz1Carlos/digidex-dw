
import re
import time
import unicodedata
from pathlib import Path

import requests


# ==================================================
# CONFIGURAÇÕES E CAMINHOS
# ==================================================

BASE_DIR = Path(__file__).resolve().parent

ARQUIVO_DADOS = (
    BASE_DIR / "versions" / "v1" / "js" / "data" / "digimons.js"
)

PASTA_IMAGENS = (
    BASE_DIR / "versions" / "v1" / "assets" / "images"
)

API_URL = "https://digi-api.com/api/v1/digimon"

PASTA_IMAGENS.mkdir(parents=True, exist_ok=True)


# ==================================================
# LEITURA DOS NOMES NO ARQUIVO JAVASCRIPT
# ==================================================

if not ARQUIVO_DADOS.exists():
    raise FileNotFoundError(
        f"Arquivo não encontrado: {ARQUIVO_DADOS}"
    )

conteudo = ARQUIVO_DADOS.read_text(encoding="utf-8")

nomes = re.findall(
    r"""nome\s*:\s*["']([^"']+)["']""",
    conteudo
)

# Remove duplicados sem alterar a ordem
nomes = list(dict.fromkeys(nomes))

if not nomes:
    raise ValueError(
        "Nenhum nome encontrado no arquivo digimons.js."
    )


# ==================================================
# FUNÇÕES AUXILIARES
# ==================================================

def normalizar_nome(nome):
    """Normaliza nomes para facilitar a comparação."""
    nome = unicodedata.normalize("NFKD", nome)
    nome = "".join(
        caractere
        for caractere in nome
        if not unicodedata.combining(caractere)
    )

    return re.sub(r"[^a-zA-Z0-9]", "", nome).lower()


def criar_nome_arquivo(nome):
    """Converte o nome do Digimon em um nome de arquivo."""
    return normalizar_nome(nome) + ".png"


def buscar_url_imagem(nome, sessao):
    """Busca o Digimon pelo nome e retorna a URL da imagem."""

    for exato in ("true", "false"):
        resposta = sessao.get(
            API_URL,
            params={
                "name": nome,
                "exact": exato,
                "pageSize": 100
            },
            timeout=20
        )

        resposta.raise_for_status()
        dados = resposta.json()

        resultados = dados.get("content", [])

        digimon = next(
            (
                item
                for item in resultados
                if normalizar_nome(item.get("name", ""))
                == normalizar_nome(nome)
            ),
            None
        )

        if digimon is None:
            continue

        # Algumas respostas já incluem a URL da imagem
        url_imagem = digimon.get("image")

        if url_imagem:
            return url_imagem

        # Caso necessário, consulta os detalhes do Digimon
        url_detalhes = digimon.get("href")

        if url_detalhes:
            resposta_detalhes = sessao.get(
                url_detalhes,
                timeout=20
            )
            resposta_detalhes.raise_for_status()

            detalhes = resposta_detalhes.json()
            imagens = detalhes.get("images", [])

            if imagens:
                imagem = next(
                    (
                        item
                        for item in imagens
                        if item.get("transparent") is True
                    ),
                    imagens[0]
                )

                url_imagem = imagem.get("href")

                if url_imagem:
                    return url_imagem

    return None


# ==================================================
# DOWNLOAD DAS IMAGENS
# ==================================================

def baixar_imagem(nome, sessao):
    """Encontra, baixa e salva a imagem de um Digimon."""

    arquivo_base = PASTA_IMAGENS / criar_nome_arquivo(nome)

    # Evita baixar novamente uma imagem já existente
    if arquivo_base.exists() and arquivo_base.stat().st_size > 0:
        print(f"[JÁ EXISTE] {nome}")
        return True

    try:
        url_imagem = buscar_url_imagem(nome, sessao)

        if not url_imagem:
            print(f"[NÃO ENCONTRADO] {nome}")
            return False

        resposta_img = sessao.get(
            url_imagem,
            timeout=30
        )
        resposta_img.raise_for_status()

        tipo = (
            resposta_img.headers
            .get("Content-Type", "")
            .lower()
            .split(";")[0]
            .strip()
        )

        extensoes = {
            "image/png": ".png",
            "image/jpeg": ".jpg",
            "image/webp": ".webp",
            "image/gif": ".gif"
        }

        extensao = extensoes.get(tipo)

        if extensao is None:
            print(
                f"[FORMATO NÃO SUPORTADO] "
                f"{nome}: {tipo or 'desconhecido'}"
            )
            return False

        # Mantém o nome compatível com o projeto,
        # mesmo que a imagem tenha outra extensão.
        nome_sem_extensao = criar_nome_arquivo(nome).removesuffix(".png")

        arquivo = PASTA_IMAGENS / (
            nome_sem_extensao + extensao
        )

        arquivo.write_bytes(resposta_img.content)

        print(f"[OK] {nome} -> {arquivo.name}")
        return True

    except requests.HTTPError as erro:
        print(f"[ERRO HTTP] {nome}: {erro}")

    except requests.RequestException as erro:
        print(f"[ERRO DE REDE] {nome}: {erro}")

    except (ValueError, KeyError) as erro:
        print(f"[ERRO NOS DADOS] {nome}: {erro}")

    return False


# ==================================================
# EXECUÇÃO PRINCIPAL
# ==================================================

def main():
    sucessos = 0
    falhas = []

    print(f"Digimons encontrados no arquivo: {len(nomes)}")
    print(f"Pasta de destino: {PASTA_IMAGENS}")

    with requests.Session() as sessao:
        sessao.headers.update({
            "User-Agent": "DigiDex-ImageDownloader/1.0"
        })

        for indice, nome in enumerate(nomes, start=1):
            print(f"\n[{indice}/{len(nomes)}] {nome}")

            if baixar_imagem(nome, sessao):
                sucessos += 1
            else:
                falhas.append(nome)

            # Evita enviar requisições muito rapidamente
            time.sleep(0.3)

    print("\n" + "=" * 40)
    print("RESUMO DO DOWNLOAD")
    print("=" * 40)
    print(f"Total de Digimon: {len(nomes)}")
    print(f"Sucessos: {sucessos}")
    print(f"Falhas: {len(falhas)}")

    if falhas:
        print("\nDigimon que precisam ser verificados:")

        for nome in falhas:
            print(f"- {nome}")

    print("\nProcesso finalizado!")


if __name__ == "__main__":
    main()
