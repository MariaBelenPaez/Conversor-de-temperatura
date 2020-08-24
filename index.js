function ConversorDeTemperatura(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("EnFahrenheit").innerHTML = (valNum - 32) / 1.8;
}