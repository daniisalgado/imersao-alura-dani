// 1. Função que desenha os cards na tela (Reutilizável)
function mostrarDados(listaDeDados) {
    let section = document.getElementById("resultados-pesquisa");
    let html = "";

    // Se não achou nada
    if (listaDeDados.length === 0) {
        section.innerHTML = `
            <div class="item-erro">
                <h2>Nenhum produto encontrado 😔</h2>
                <p>Tente buscar por termos como "skincare", "led" ou "acne".</p>
            </div>
        `;
        return;
    }

    // Desenha os cards
    for (let dado of listaDeDados) {
        // TRUQUE: Pega só a primeira palavra das tags para usar como "Categoria" visual
        let categoria = dado.tags.split(" ")[0].toUpperCase();

        html += `
            <article class="card">
                <h2>${dado.titulo}</h2>
                <p class="meta-info">${categoria}</p>
                <p>${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </article>
        `;
    }

    section.innerHTML = html;
}

// 2. Função de Pesquisa (Barra de Texto)
function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    // Se o campo estiver vazio, mostra TUDO
    if (campoPesquisa === "") {
        mostrarDados(dados);
        return;
    }

    // Filtra os dados
    let dadosFiltrados = dados.filter(dado => 
        dado.titulo.toLowerCase().includes(campoPesquisa) || 
        dado.descricao.toLowerCase().includes(campoPesquisa) ||
        dado.tags.toLowerCase().includes(campoPesquisa)
    );

    mostrarDados(dadosFiltrados);
}

// 3. Função para os Botões de Filtro Rápido (Skincare, Tech, etc)
function filtrarPorTag(tag) {
    let dadosFiltrados = dados.filter(dado => 
        dado.tags.toLowerCase().includes(tag.toLowerCase())
    );
    mostrarDados(dadosFiltrados);
}

// 4. Função Limpar (Recarrega a página para voltar a vitrine original)
function limparBusca() {
    document.getElementById("campo-pesquisa").value = "";
    window.location.reload(); // Truque para voltar à vitrine inicial
}