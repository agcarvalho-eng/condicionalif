const numero = prompt("Digite um número inteiro e tecle entrer.");
    if(numero > 0){
        if(numero % 2 == 0){
            alert("O número "+numero+" é positivo e par.");
        }
        else{
            alert("O número "+numero+" é positivo e ímpar.");
        }
    }
    else{
        if(numero == 0){
            alert("O número "+numero+" possui valor zero.");
        }
        else{
            alert("O número "+numero+" é negativo.");
        }
    }