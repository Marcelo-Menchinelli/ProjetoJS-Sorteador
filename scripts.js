

const resultP = document.querySelector(".result-p")

const buttonSorteio = document.querySelector(".button-sorteio")


function gerenateNumber() {

   const resultP = document.querySelector(".result-p")

   const min = Math.ceil(document.querySelector(".input-min").value)

   const max = Math.floor(document.querySelector(".input-max").value)

   const result = Math.floor(Math.random() * (max - min + 1)) + min;

   resultP.innerHTML = result

}

buttonSorteio.addEventListener("click", gerenateNumber)