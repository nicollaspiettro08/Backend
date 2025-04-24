let apartamento ={
    quartos: 2,
    tipo: " apartamento",
    endereco : " Avenida Principal, 456 - Centro",
    andar: 7
};

let casa = ("Apartamento com "+apartamento.quartos+ " quartos, localizado no " +apartamento.andar+"º andar da " +apartamento.endereco);

console.log(casa);

//atividade 02
let produtoembalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00
};

console.log("O produto " +produtoembalado.nome+ ",da categoria " +produtoembalado.categoria+ ", pesando "+produtoembalado.peso+", está à venda por R$"+produtoembalado.preco);



//atividade 03
class Imóvel{
    quartos;
    tipo;
    endereco;

};

const Casa= {
    Quartos: 4,
    Tipo: "Casa",
    Endereço: "Rua da Amizade, 789 - Bairro Alegre"
};

const Apartamento ={
    Quartos: 2,
    Tipo: "Apartamento",
    Endereço: "Avenida da Paz, 123 - Centro"
};