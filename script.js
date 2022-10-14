const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

btnCalcular.addEventListener('click', btnOnclick);

function btnOnclick() {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    result.innerText = "El resultado es: " + sumaInputs;
}

