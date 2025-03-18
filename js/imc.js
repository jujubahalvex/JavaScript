function imc(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    document.getElementById("resultado").textContent = `Resultado:  ${imc.toFixed(2)}`;
   
}