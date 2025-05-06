const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber){
        alert("Ambos os campos devem ser preenchidos")
    }

    console.log(multiplicationNumber, multiplicatorNumber)
})