const lista = document.querySelector("#lista-digimons");
const busca = document.querySelector("#busca");
let fonteDigimons = digimons;

let paginaAtual = 0;
const tamanhoPagina = 20;
let totalPaginas = 1;
let termoBusca = "";

const botaoAnterior = document.querySelector("#pagina-anterior");
const botaoProxima = document.querySelector("#pagina-proxima");
const textoPagina = document.querySelector("#pagina-atual");

function renderizarDigimons(listaDigimons) {
    lista.innerHTML = "";

    listaDigimons.forEach((digimon) => {
        const card = document.createElement("a");

        card.classList.add("digimon-card");
        card.href = `detalhe.html?nome=${encodeURIComponent(digimon.name)}`;

        card.innerHTML = `
            <img
                src="${digimon.image}"
                alt="${digimon.name}"
            >

            <h2>${digimon.name}</h2>
        `;

        lista.appendChild(card);
    });
}

carregarDigimonsAPI();

busca.addEventListener("input", () => {
    termoBusca = busca.value.trim();
    paginaAtual = 0;

    if (termoBusca === "") {
        carregarDigimonsAPI();
        return;
    }

    buscarDigimonsAPI(termoBusca);
});

async function carregarDigimonsAPI() {
    try {
        const resposta = await fetch(
            `https://digi-api.com/api/v1/digimon?pageSize=${tamanhoPagina}&page=${paginaAtual}`,
        );

        if (!resposta.ok) {
            throw new Error("Erro ao consultar a Digi-API");
        }

        const dados = await resposta.json();

        fonteDigimons = dados.content;
        totalPaginas = dados.pageable.totalPages;

        renderizarDigimons(fonteDigimons);

        textoPagina.textContent = `Página ${paginaAtual + 1}`;

        botaoAnterior.disabled = paginaAtual === 0;
        botaoProxima.disabled = paginaAtual >= totalPaginas - 1;
    } catch (erro) {
        console.error("Não foi possível carregar a API:", erro);

        renderizarDigimons(fonteDigimons);
    }
}

async function buscarDigimonsAPI(termo) {
    try {
        const resposta = await fetch(
            `https://digi-api.com/api/v1/digimon?name=${encodeURIComponent(termo)}&pageSize=${tamanhoPagina}&page=${paginaAtual}`,
        );

        if (!resposta.ok) {
            throw new Error("Erro ao buscar Digimon na API");
        }

        const dados = await resposta.json();

        fonteDigimons = dados.content || [];
        totalPaginas = dados.pageable.totalPages;

        renderizarDigimons(fonteDigimons);

        textoPagina.textContent = `Página ${paginaAtual + 1}`;

        botaoAnterior.disabled = paginaAtual === 0;
        botaoProxima.disabled = paginaAtual >= totalPaginas - 1;
    } catch (erro) {
        console.error("Não foi possível buscar Digimons:", erro);
    }
}

botaoAnterior.addEventListener("click", () => {
    if (paginaAtual > 0) {
        paginaAtual--;

        if (termoBusca !== "") {
            buscarDigimonsAPI(termoBusca);
        } else {
            carregarDigimonsAPI();
        }
    }
});

botaoProxima.addEventListener("click", () => {
    if (paginaAtual < totalPaginas - 1) {
        paginaAtual++;
        if (termoBusca !== "") {
            buscarDigimonsAPI(termoBusca);
        } else {
            carregarDigimonsAPI();
        }
    }
});
