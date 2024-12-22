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
// Certifique-se de que as variáveis 'sairContaItem', 'botao1', e 'botao2' estejam definidas corretamente
// Certifique-se de que o 'sairConta' está corretamente selecionado
const sairContaItem = document.getElementById('sairConta');  // Substitua pelo id real do item "SAIR"
const botao1 = document.getElementById('botao1'); // Substitua pelo id real do Botão 1
const botao2 = document.getElementById('botao2'); // Substitua pelo id real do Botão 2

// Adiciona um ouvinte de evento para o clique no item "SAIR"
sairContaItem.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de navegação (para fins de teste)

    // Faz a requisição para o arquivo PHP de logout
    fetch('../PHP/logout.php') // Altere o caminho conforme necessário
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao realizar o logout');
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            alert("Logout feito com sucesso!!"); // Alerta após logout bem-sucedido
            window.location.href = '../Html/login.html'; // Redireciona para a página de login
        })
        .catch(error => {
            console.error('Erro:', error); // Exibe erros no console
            alert('Ocorreu um erro ao tentar fazer logout.'); // Alerta em caso de erro
        });
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
