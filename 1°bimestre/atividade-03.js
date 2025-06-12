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
    constructor(quartos,tipo,endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco;
    }
    
    exibirInformacoes(){
    return ` Tipo = ${this.tipo}\n Quartos: ${this.quartos}\n Endereço: ${this.endereco}`
    };
    }
    
    
    
    const Casa = new Imóvel( 4,"Casa","Rua da amizade,729 - Bairro Alegre");
    
    
    const Apartamento = new Imóvel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
    
    console.log(Casa.exibirInformacoes());
    
    console.log(Apartamento.exibirInformacoes());
    
// aividade 04

class Veiculo{
    constructor(marca,modelo,ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    }
    exibirDetalhes(){
    return` Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano}`
    };
    }
    
    const Carro = new Veiculo("Toyota", "Corolla",2022 );
    
    const Motocicleta = new Veiculo("Honda","CBR 600RR", 2021);
    
    console.log(Carro.exibirDetalhes());
    
    console.log(Motocicleta.exibirDetalhes());