// Alternância de tema
const themeToggle = document.getElementById("theme-toggle");

//const que seleciona automaticamente os elementos da página
const dynamicElements = document.querySelectorAll(
    "body, header, .filters, .product-comparison, .suggestions, footer, .comparison-card"
);

// Obtém os elementos do DOM
const alterarTitulo = document.getElementById("alterTitle"); // Elemento que terá o texto alterado
const elementos = document.querySelector("h1"); // Elemento <h1> da página

// Função para alterar o título
alterarTitulo.textContent = elementos.textContent; // Define o texto do elemento como o texto do <h1>

//----------------------------//
//tratamento de erro


//if (alterarTitulo){
 //  console.log("deu certo")

///}else{
//    console.log("nao deu")
//}

//------------------------------//

const savedTheme = localStorage.getItem("darkMode");
if (savedTheme === "enabled") {
    enableDarkTheme();
} else {
    disableDarkTheme();
}

themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
        disableDarkTheme();
        localStorage.setItem("darkMode", "disabled");
    } else {
        enableDarkTheme();
        localStorage.setItem("darkMode", "enabled");
    }
});

//função MODO CLARO
function enableDarkTheme() {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️"; // Modo claro
    dynamicElements.forEach((el) => {
        el.classList.add("dark-theme");
    });

}



//função MODO ESCURO
function disableDarkTheme() {
    document.body.classList.remove("dark-theme");
    themeToggle.textContent = "🌙"; // Modo escuro
    dynamicElements.forEach((el) => {
        el.classList.remove("dark-theme");
    });
}

// Filtros
document.getElementById("apply-filters").addEventListener("click", () => {
    const brand = document.getElementById("brand").value;
    const price = document.getElementById("price").value;
    const type = document.getElementById("type").value;

    fetchFilteredProducts(brand, price, type);
});


// Função para buscar produtos filtrados com a integração das APIs (exemplo Mercado Livre)
function fetchFilteredProducts(brand, price, type) {
    let url = `https://api.mercadolibre.com/sites/MLB/search?q=${brand}`;
    let queryParams = [];

    // Verifica se o filtro de preço foi aplicado
    if (price) {
        queryParams.push(`price:${price}`);
    }

    // Verifica se o tipo de uso foi selecionado
    if (type) {
        queryParams.push(`category:${type}`);
    }

    // Se houver filtros adicionais, eles são adicionados à URL
    if (queryParams.length > 0) {
        url += `&${queryParams.join('&')}`;
    }

    console.log(`URL da API: ${url}`);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Dados recebidos:', data); // Exibe os dados retornados pela API para depuração

            if (data.results && data.results.length > 0) {
                const products = data.results.map(item => ({
                    name: item.title,
                    price: item.price,
                    store: "Mercado Livre",
                    link: item.permalink,
                    image: item.thumbnail // Adiciona a imagem do produto
                }));
                displayComparisonResults(products);
            } else {
                displayNoResultsMessage();
            }
        })
        .catch(error => {
            console.error("Erro na busca de produtos:", error);
            displayNoResultsMessage();
        });
}

// Exibe os resultados da comparação de preços
function displayComparisonResults(products) {
    const resultsContainer = document.getElementById("comparison-results");
    resultsContainer.innerHTML = ''; // Limpa resultados anteriores

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("comparison-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" /> <!-- Exibe a imagem -->
            <h3>${product.name}</h3>
            <p>Preço: R$ ${product.price}</p>
            <p>Melhor Preço: R$ ${product.price} (${product.store})</p>
            <a href="${product.link}" target="_blank">Comprar na ${product.store}</a>
        `;
        resultsContainer.appendChild(productCard);
    });
}

// Exibe uma mensagem caso não haja resultados
function displayNoResultsMessage() {
    const resultsContainer = document.getElementById("comparison-results");
    resultsContainer.innerHTML = '<p>Nenhum produto encontrado com os filtros aplicados.</p>';
}

