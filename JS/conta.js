const containerNav = document.getElementById("nav-controls");
const pushArrow = document.getElementById("actionButton");
const lista = document.getElementById("listaOrdenada");

// Esconde a lista inicialmente
lista.style.display = "none";

// Função para exibir a lista com animação
pushArrow.addEventListener("click", () => {
    if (lista.style.display === "none") {
        // Exibe a lista com animação
        lista.style.display = "block";
        lista.classList.remove("hidden");
        lista.classList.add("show"); // Adiciona a classe para animação de entrada
        lista.classList.remove("hide"); // Remove a classe de animação de saída
    } else {
        // Oculta a lista com animação
        lista.classList.add("hide"); // Adiciona a classe para animação de saída
        lista.classList.remove("show"); // Remove a classe de animação de entrada
        setTimeout(() => {
            lista.style.display = "none"; // Esconde a lista após a animação
            lista.classList.add("hidden");
        }, 300); // Aguarda o término da animação
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    const isClickInside = containerNav.contains(event.target);
    if (!isClickInside && lista.style.display === "block") {
        lista.classList.add("hide");
        lista.classList.remove("show");
        setTimeout(() => {
            lista.style.display = "none"; // Esconde a lista após a animação
            lista.classList.add("hidden");
        }, 300); // Aguarda o término da animação
    }
});

// Espera a página carregar completamente
window.onload = function() {
    // Seleciona os elementos existentes
    const sairContaItem = document.getElementById('sairConta');
    const botao1 = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');

    // Adiciona um ouvinte de evento para o clique no item "SAIR"
    sairContaItem.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação (para fins de teste)
        alert("Você clicou em SAIR!");
    });

    // Adiciona um ouvinte de evento para o clique no Botão 1
    botao1.addEventListener('click', function() {
        alert("Você clicou no Botão 1!");
    });

    // Adiciona um ouvinte de evento para o clique no Botão 2
    botao2.addEventListener('click', function() {
        alert("Você clicou no Botão 2!");
    });

    // Criando o novo botão
    const novoBotao = document.createElement('button');
    novoBotao.innerHTML = "Novo Botão"; // Defina o texto do novo botão

    // Adicionando um ouvinte de evento para o clique no novo botão
    novoBotao.addEventListener('click', function() {
        alert("Você clicou no Novo Botão!");
    });

    // Inserindo o novo botão no corpo da página
    document.body.appendChild(novoBotao);
};





