const detalhe = document.querySelector("#detalhe");
const btnAnterior = document.querySelector("#btn-anterior");
const btnProximo = document.querySelector("#btn-proximo");

const nome = new URLSearchParams(window.location.search).get("nome");

let indice = digimons.findIndex(digimon => digimon.name === nome);
if (indice === -1) indice = 0;

function renderizarDetalhe(digimon) {
    const nivel = digimon.levels[0]?.level ?? "-";
    const tipo = digimon.types[0]?.type ?? "-";

    const areas = digimon.fields.map(f => `
        <span class="area">
            <img src="${f.image}" alt="${f.field}">
            ${f.field}
    </span>
    `).join("") || "-";

    const descricao = digimon.descriptions.reference_book?.en_us ?? "Sem descrição.";

    const habilidades = digimon.skills.map(s => `
        <li>
            <strong>${s.skill}</strong>
            <p>${s.description}</p>
        </li>
    `).join("");

    detalhe.innerHTML = `
        <img src="${digimon.image}" alt="${digimon.name}">
        <h2>${digimon.name}</h2>
        <p>ID: ${digimon.id ?? "-"}</p>
        <p>Nível: ${nivel}</p>
        <p>Tipo: ${tipo}</p>
        <div class="areas">Áreas: ${areas}</div>
        <p>${descricao}</p>

        <h3>Habilidades</h3>
        <ul>${habilidades || "<li>Sem habilidades.</li>"}</ul>
    `;
}

function mostrar(novoIndice) {
    indice = (novoIndice + digimons.length) % digimons.length;
    renderizarDetalhe(digimons[indice]);
}

btnProximo.addEventListener("click", () => mostrar(indice + 1));
btnAnterior.addEventListener("click", () => mostrar(indice - 1));

mostrar(indice);