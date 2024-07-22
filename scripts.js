

const inputResult = document.querySelector(".input-result")

const buttonSorteio = document.querySelector(".button-sorteio")


function gerenateNumber() {

   const inputResult = document.querySelector(".input-result").value

   const min = Math.ceil(document.querySelector(".input-min").value)

   const max = Math.floor(document.querySelector(".input-max").value)

   const result = Math.floor(Math.random() * (max - min + 1)) + min;

   inputResult.innerHTML = result

   inputResult.value = result

   console.log(result)
   
   alert(result)
}

buttonSorteio.addEventListener("click", gerenateNumber)