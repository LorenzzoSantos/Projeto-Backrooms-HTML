// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const usuariosValidos = {
    "Lorenzzo": "230511",
    "Erly": "Gay",
    "Rodrigo": "MatarAula"
};


var loginForm = document.querySelector('#id01 form');

loginForm.addEventListener('submit', function login (event){
    event.preventDefault();

    var usuario = loginForm.uname.value.trim();
    var senha = loginForm.psw.value;

    if (usuariosValidos.hasOwnProperty(usuario)&&usuariosValidos[usuario]===senha){
        alert("Sucesso!!!");
        modal.style.display = "none";
        secreto.style.display = "block"
        loginForm.reset();

        document.getElementById("secreto").style.display = "block";
        document.getElementById("tela-inicial").style.display = "none"
        document.body.classList.add('fundo-logado');
    }else{alert("usuario incorreto :(");

    }
     
});

const caixa = document.getElementById('secreto');

let arrastando = false;
let offsetX = 0;
let offsetY = 0;

// 1. Quando clica na caixa (Segurar)
caixa.addEventListener('mousedown', (e) => {
  arrastando = true;
  // Calcula a distância do clique em relação ao canto da caixa
  offsetX = e.clientX - caixa.offsetLeft;
  offsetY = e.clientY - caixa.offsetTop;
});

// 2. Quando mexe o mouse pela página (Arrastar)
document.addEventListener('mousemove', (e) => {
  if (!arrastando) return;
  
  // Atualiza a posição da caixa na tela
  caixa.style.left = `${e.clientX - offsetX}px`;
  caixa.style.top = `${e.clientY - offsetY}px`;
});

// 3. Quando solta o botão do mouse (Soltar)
document.addEventListener('mouseup', () => {
  arrastando = false;
});