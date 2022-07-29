enum Profissao {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao?: Profissao
}

let pessoa1: Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: Pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: Pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
}

let pessoa4: Pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}
