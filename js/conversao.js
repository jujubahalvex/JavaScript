function conversao(){
    let celsius = parseFloat(document.getElementById("temperatura").value);
    
    fahrenheit = (celsius * 1.8) + 32

    document.getElementById("resultado").textContent = "Resultado: " + fahrenheit;
    
}