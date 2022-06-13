
const funcionario = {
    codigo: 1,
    nome: 'Maria'
};


const funcionario2: {codigo: number, nome: string} = {
    codigo: 2,
    nome: 'Joaquim'
}


interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 1;
funcionarioObj.nome = 'Maria';

const funcionarioObj2: Funcionario = {
    codigo: 2,
    nome: 'Joaquim'
}