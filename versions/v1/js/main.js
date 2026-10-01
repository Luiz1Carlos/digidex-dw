
const lista = document.querySelector("#lista-digimons");
const busca = document.querySelector("#busca");

function renderizarDigimons(listaDigimons) {
    lista.innerHTML = "";

    listaDigimons.forEach(digimon => {
        const card = document.createElement("article");

        card.classList.add("digimon-card");

        card.innerHTML = `
            <img
                src="${digimon.imagem}"
                alt="${digimon.nome}"
            >

            <h2>${digimon.nome}</h2>

            <p>Nível: ${digimon.nivel}</p>
            <p>Atributo: ${digimon.atributo}</p>

            <button data-id="${digimon.id}">
                Ver detalhes
            </button>
        `;

        lista.appendChild(card);
    });
}

renderizarDigimons(digimons.slice(0,8));

busca.addEventListener("input", () => {
    const termo = busca.value.toLowerCase();

    const resultados = digimons.filter(digimon =>
        digimon.nome.toLowerCase().includes(termo)
    );

    renderizarDigimons(resultados);
});
