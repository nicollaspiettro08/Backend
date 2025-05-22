import input from 'readline-sync';

//1
let dia = input.question("digite seu numero: ");

switch(dia){
    case "1":
        console.log("Domingo");
        break
    case "2":
        console.log("segunda-feira");
        break
    case "3":
        console.log("terça-feira");
        break
    case "4":
        console.log("quarta-feira");
        break
    case "5":
        console.log("quinta-feira");
        break
    case "6":
        console.log("sexta-feira");
        break
    case "7":
        console.log("sabado");
        break
    default:
        console.log("Numero invalido\ndigite o valor entre 1 á 7");
        

}

//2
let mes = input.question("digite um numero:");
switch(mes){
    case "1":
        console.log("Janeiro");
        break
    case "2":
        console.log("Fevereiro");
        break
    case "3":
        console.log("Março");
        break
    case '4':
        console.log("Abril");
        break
    case '5':
        console.log("Maio");
        break
    case '6':
        console.log("Junho");
        break
    case '7':
        console.log("Julho");
        break
    case '8':
        console.log("Agosto");
        break
    case '9':
        console.log("Setembro");
        break
    case '10':
        console.log("outubro");
        break
    case '11':
        console.log("novembro");
        break
    case '12':
        console.log("dezembro");
        break
}

//3
let cal = input.questionInt("digite um numero:");
let cal2 = input.questionInt("digite outro numero ");
let c = input.question("digite a formula do calculo: ");
switch(c){
    case 'adição':
        console.log(cal+cal2);
        break
    case 'subtração':
        console.log(cal-cal2);
        break
    case 'multiplicação':
        console.log(cal*cal2);
        break
    case 'divisão':
        console.log(cal/cal2);
        break
}

//4
let cat= input.question('Escreva qual a sua classe: A,B,C,D\n');
let salario= input.question('Digite o seu salario: ');
switch(cat){
case 'A':
    console.log(salario+(salario*0.05));
    break

case 'B':
    console.log(((salario/100)*0.10)+salario);
    break

case 'C':
    console.log(((salario/100)*0.15)+salario);
    break

case 'D':
    console.log(((salario/100)*0.20)+salario);
    break

}