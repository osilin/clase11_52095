function sumar() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var res = num1 + num2;
    mostrarResultado(res);
}

function restar() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var res = num1 - num2;
    mostrarResultado(res);
}

function multiplicar() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var res = num1 * num2;
    mostrarResultado(res);
}

function dividir() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var res;
    if (num2 == 0) {
        res = "No se puede dividir por cero";
    } else {
        res = num1 / num2;
    }
    mostrarResultado(res);
}

function mostrarResultado(res) {
    document.querySelector("#resultado").textContent = res;
}