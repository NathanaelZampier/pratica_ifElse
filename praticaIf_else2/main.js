// let login = true;
// let premium = true;

// if (!login) {
//     console.log('realize login')
//     return
// }

// if (!premium) {
//     console.log('não é premium')
//     return
// }

// console.log('acesso premium')

function entrada(idade, acompanhado) {

    if (idade >=18 ) {
        console.log('entrada liberada')
    } else if (acompanhado) {
        console.log('entrada permitida')
    } else {
        console.log('entrada proibida')
    }
}

entrada()

function acessoPainel() {
    let servidor = true;
    let token = false;
    let admin = true;

    if (!servidor) {
        console.log('serivdor off-line')
        return
    }

    if (!token) {
        console.log('token inválido')
        return
    }

    if (admin) {
        console.log('painel admin')
    }

}

acessoPainel()


function acessarConta() {

    let login = true;
    let senha = true;
    let biometria = false;

    if (!login) {
        console.log('faça login')
        return
    }

    if (!senha) {
        console.log('senha incorreta')
        return
    }

    if (!biometria) {
        console.log('confirme biometria')
        return
    }

    console.log('acesso liberado')
}

acessarConta()

function comprarProduto() {

    let produto = true;
    let saldo = 100;
    let estoque = false;

    if (!produto) {
        console.log('produto inexistente')
        return
    }

    if(saldo < 100) {
        console.log('saldo insuficiente')
        return
    }

    if (estoque === false) {
        console.log('sem estoque')
        return
    }
    
    console.log('compra realizada')
}

comprarProduto()

function acessarSistema() {

    let servidor = true;
    let autenticado = true;
    let token = true;
    let permissao = false;

    if (!servidor) {
        console.log('servidor off')
        return 
    }

    if (!autenticado) {
        console.log('usuário não autenticado')
        return
    }

    if (!token) {
        console.log('token inválido')
        return
    }

    if (permissao === false) {
        console.log('permissão negada')
        return
    }

    console.log('sistema liberado')
}

acessarSistema()