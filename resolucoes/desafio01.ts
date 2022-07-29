// Resolução do desafio 01:

const employee: { code: number, name: string } = {
    code: 10,
    name: 'John'
}

// Utilizando interface:

interface Employee {
    code: number,
    name: string
};

const employee2 = {} as Employee;
employee2.code = 10;
employee2.name = 'John'

