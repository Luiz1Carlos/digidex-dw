
const lista = document.querySelector("#lista-digimons");
const busca = document.querySelector("#busca");

function renderizarDigimons(listaDigimons) {
    lista.innerHTML = "";

    listaDigimons.forEach(digimon => {
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

renderizarDigimons(digimons);

busca.addEventListener("input", () => {
    const termo = busca.value.toLowerCase();

    const resultados = digimons.filter(digimon =>
        digimon.name.toLowerCase().includes(termo)
    );

    renderizarDigimons(resultados);
});
