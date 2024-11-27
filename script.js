document.getElementById("sim").addEventListener("click", function() {
    alert("Valeu! Faz o pix aí!");
});

const botaoNao = document.getElementById("nao");

botaoNao.addEventListener("click", function() {
    const randomX = Math.random() * 80; 
    const randomY = Math.random() * 80; 
   
    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${randomX}vw`;
    botaoNao.style.top = `${randomY}vh`;
});
