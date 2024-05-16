
document.addEventListener('DOMContentLoaded', () => {
    const num1 = prompt("Ingresa el primer número:");
    const num2 = prompt("Ingresa el segundo número:");

    dividir(num1, num2, (error, result) => {
        const resultDiv = document.getElementById('result');
        if (error) {
            resultDiv.textContent = `Error: ${error}`;
        } else {
            resultDiv.textContent = `El resultado de la división es: ${result}`;
        }
    });
});



function dividir(a, b, callback) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Uno o ambos parámetros no son números.");
        callback("Uno o ambos parámetros no son números.");
    } else if (num2 === 0) {
        alert("Error: No se puede dividir por cero.");
        callback("No se puede dividir por cero.");
    } else {
        const result = num1 / num2;
        callback(null, result);
    }
}
