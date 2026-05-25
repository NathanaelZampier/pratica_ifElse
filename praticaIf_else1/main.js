// let numero = 10;

// if(numero > 0) {
//     console.log('numero positivo')
// }

// // let idade = 16;

// // if(idade >= 18) {
// //     console.log('maior de idade')
// // } else {
// //     console.log('menor de idade')
// // }

// let nota = 5;

// if(nota >=9) {
//     console.log('excelente')
// } else if (nota >=6) {
//     console.log('aprovado')
// } else {
//     console.log('reprovado')
// }

// let usuario = 'Nathan';
// let senha = '1234'

// if(usuario === 'Nathan' && senha === '1234') {
//     console.log('login feito')
// } else {
//     console.log('usuario ou senha incorretos')
// }

// let idade = 20;
// let dinheiro = 15;

// if(idade < 18) {
//     console.log('Entrada proibida')
// } else if (dinheiro < 30) {
//     console.log('Dinheiro insuficiente')
// } else {
//     console.log('Entrada liberada')
// }

// let numero = 8

// if(numero % 2 === 0) {
//     console.log('par')
// } else {
//     console.log('impar')
// }

// let usuario = 'nathan';
// let senha = '1234'

// if(usuario === '') {
//     console.log('digite o usuário')
// } else if (senha === '') {
//     console.log('digite a senha')
// } else if (senha === senha && usuario === usuario) {
//     console.log('login realizado')
// } else {
//     console.log('dados inválidos')
// }

// let idade = 70

// if(idade < 12) {
//     console.log('criança')
// } else if (idade > 12 && idade < 17) {
//     console.log('adolescente')
// } else if (idade > 18 && idade < 59) {
//     console.log('adulto')
// } else {
//     console.log('idoso')
// }

// let temperatura = 35;
// let estaChovendo = false

// if(!estaChovendo) {
//     console.log('leve guarda chuva')
// } else if (temperatura > 30) {
//     console.log('muito calor')
// } else {
//     console.log('clima agradável')
// }

// let saldo = 500;
// let valorCompra = 700;
// let diferença = valorCompra - saldo

// if(saldo > valorCompra) {
//     console.log('compra realizada')
// } else {
//     console.log('saldo insuficiente, faltou: ' + diferença + ' reais')
// }


let usuario = 'nathan';
let senha = '1234';
let admin = true;

if(usuario === 'nathan' && senha === '1234' && admin === true) {
    console.log('bem vindo administrador')
} else if (usuario === 'nathan' && senha === '1234' && admin === false) {
    console.log('bem vindo usuario')
} else {
    console.log('login inválido')
}

let saldo = 1000;
let saque = 300;

if(saque <= saldo) {
    console.log('saque realizado')
    console.log(saldo)
} else {
    console.log('saldo insuficiente')
}

let nota = 8;

if(nota === 10) {
    console.log('perfeito')
} else if (nota >=8) {
    console.log('otimo')
} else if(nota >=6) {
    console.log('aprovado')
} else {
    console.log('reprovado')
}

let idade = 20
let temIngresso = true;
let nomeNaLista = false;

if(temIngresso || nomeNaLista && idade >= 18) {
    console.log('pode entrar')
}

let numero = -5;

if(numero > 0) {
    console.log('positivo')
} else if (numero < 0) {
    console.log('negativo')
} else {
    console.log(zero)
}
