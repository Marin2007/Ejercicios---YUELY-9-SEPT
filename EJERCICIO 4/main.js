// función para calcular el resultado
function calcular (){
    let num1 = parseFloat(document.getElementById("num1").value);//variable
    let num2 = parseFloat(document.getElementById("num2").value);//variable
    let operacion = document.getElementById("operacion").value;
    let resultado;

    switch(operacion){//Evalua los casos Registrados
        case "+"://Primer caso Suma
            resultado = num1 + num2;
            break;

        case "-": //Segundo caso Resta
            resultado = num1 - num2;
            break;
        
        case "*"://Tercer caso Multiplicación
            resultado = num1 * num2;
            break;
        
        case "/"://Cuarto caso Division
            resultado = num1 / num2;
            break;
        
        default://Si el resultado no es el esperado 
            resultado = "Operación no válida";

    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}