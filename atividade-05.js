import input, { questionInt } from 'readline-sync';
//1
let tab = 1;
let cl = input.questionInt("Digite um número: ");

while(tab <= 10) {
    console.log(cl + " x " + tab + " = " + (cl * tab));
    tab++;
   }

//2
let  numAlunos= questionInt("Informe o numero de alunos da turma: ");

let contAlunos= 1;
let somaMedias = 0;

while(contAlunos<=numAlunos){
    console.log(` Aluno ${contAlunos}`);

    let somaNotas = 0;
    let contBi=1;

    while(contBi <= 4 ){
        let nota = questionInt(`Informe a nota do ${contBi}° bimestre do aluno ${contAlunos}: `);
        somaNotas+=nota;
        contBi++;
    }

    let mediaAlunos = somaNotas /4;
    somaMedias += mediaAlunos;
    console.log(`Media do Aluno ${contAlunos}: ${mediaAlunos.toFixed(2)}`);
    contAlunos++;

}
let mediaGeralturma = somaMedias/numAlunos;
console.log(`Média geral da turma: ${mediaGeralturma.toFixed(2)}`);

//3
const numAlea = Math.floor(Math.random()*100)+1;
let chute;

do {
    chute=questionInt("tente adivinhar o número (entre 1 e 100): ")
    if(chute === numAlea) {
        console.log("parabens! voçe acertou o número ")

    } else if(chute<numAlea) {
        console.log("Tente um numero maior")
    } else {
        console.log("Tente um numero menor")
    }

} while (chute !== numAlea);

//4

let imp = 0;
let nome = question(`informe o nome da ${i}° pessoa: `)
let salario= questionInt(`Informe o seu salario de ${nome}`)

if (salario < 2100){
    imp = 0;
}else if (salario <= 2000){
    imp = salario * 0.075;
}else if (salario <= 3750){
    imp = salario * 0.15;
}else if (salario <= 4660){
    imp = salario * 0.225;
}else{
    imp = salario * 0.275;
}

console.log(`\n--- IMposto de renda a ser pago---`);
console.log(`Nome: ${nome} \n Imposto de renda: R$ ${imp.toFixed(2)}\n`);


// 

let ant = 0;
let atu = 1;

console.log("--- Sequencia de Fibonacci");
console.log(ant);
console.log(atu);

for (let i = 1; i <= 20; i++){
    let prox = ant+atu;

    console.log(prox)
}
