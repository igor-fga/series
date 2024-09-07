function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado. Você não digitou nenhuma série.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada elemento do array "dados"
    for (let dado of dados) {

        if (dado.titulo.toLowerCase().includes(campoPesquisa) ||
            dado.descricao.toLowerCase().includes(campoPesquisa) ||
            dado.tags.toLowerCase().includes(campoPesquisa)
        ) {
            // Constrói o HTML para cada resultado da pesquisa
            resultados += `
                <div class="item-resultado">
                    <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado.</p>";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}