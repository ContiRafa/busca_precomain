document.addEventListener("DOMContentLoaded", function () {
    const button01 = document.getElementById("check01"); // Botão para abrir o slide
    const slide1 = document.querySelector(".slide"); // Div do slide
    const toggle01 = document.querySelector(".toggle"); // Elemento .toggle
    const closeButton = document.getElementById("control-Close"); // Botão verde para fechar o slide
  
    let isSlideOpen = false; // Controle do estado do slide
  
    // Evento para abrir o slide
    button01.addEventListener("click", function () {
      if (!isSlideOpen) {
        slide1.style.transform = "translateX(0)"; // Mostra o slide
        toggle01.style.display = "none"; // Esconde o .toggle
        button01.style.display = "none"; // Esconde o botão
        isSlideOpen = true; // Atualiza o estado do slide
        console.log("Slide aberto!");
      }
    });
  
    // Função para fechar o slide
    function fecharDiv() {
      if (isSlideOpen) {
        slide1.style.transform = "translateX(-112%)"; // Fecha o slide
        console.log("Slide fechado!");
  
        // Volta a exibir a .toggle e o botão inicial
        toggle01.style.zIndex = "1";
        toggle01.style.top = "20px";
        toggle01.style.left = "20px";
        toggle01.style.display = "block"; // Mostra a .toggle novamente
        button01.style.display = "block"; // Mostra o botão novamente
        isSlideOpen = false; // Atualiza o estado do slide
      } else {
        console.error("O slide já está fechado.");
      }
    }
  
    // Evento para o botão verde (fechar slide)
    if (closeButton) {
      closeButton.addEventListener("click", fecharDiv);
    } else {
      console.error("Botão de fechar não encontrado!");
    }
  });
  