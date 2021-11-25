const nome = document.querySelector(".nome");
const profissao = document.querySelector(".profissao")
typing(nome)
typing(profissao)

function typing(elemento){

  const text = elemento.innerHTML.split('')
  elemento.innerHTML = '';
  text.forEach((letra, i) => {
    setTimeout(function(){
      elemento.innerHTML += letra;
    }, 75 * i)
  });
}
