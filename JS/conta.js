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

function excluirDadosNavegacao() {
    // Faz a requisição para o arquivo PHP de logout
    fetch('../PHP/logout.php', {
        method: 'GET', // 'GET' porque o logout geralmente não requer um corpo de requisição
        headers: {
            'Content-Type': 'application/json' // Especifica que você está esperando uma resposta JSON
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao realizar o logout');
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        // Verifica a resposta JSON do PHP
        if (data.message) {
            // Limpar o localStorage
            localStorage.removeItem('nome');
            localStorage.removeItem('email');
            localStorage.removeItem('senha');

            // Redireciona para a página de login
            alert(data.message); // Exibe a mensagem de sucesso do logout
            window.location.replace('../HTML/login.html'); // Redireciona para o login
        } else {
            alert('Ocorreu um erro no servidor ao tentar realizar o logout.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao tentar fazer logout.'); // Alerta em caso de erro
    });
}


/*----------------------------------------------------------------------------------------------------------*/

