let logado = false;
let admin = true;

if (logado) {

    if (admin) {
        console.log('acesso admin')
    } else {
        console.log('acesso usuario')
    }
} else {
    console.log('faça login')
}


function login(admin, logado) {

    if (logado) {
    
        if (admin) {
            console.log('acesso admin')
        } else {
            console.log('acesso usuario')
        }
    } else {
        console.log('realize login')
    }
}

login()


function acessarConta(login, senha) {

    if (!login) {
        console.log('realize login')
        return
    }

    if (!senha) {
        console.log('senha incorreta')
        return
    }

    console.log('login realizado')
}

acessarConta(login,senha)


function comprar(produto, saldo, estoque) {

    if (!produto) {
        console.log('produto indisponível')
        return
    }

    if (saldo < 100) {
        console.log('saldo insuficiente')
        return
    }

    if (!estoque) {
        console.log('sem estoque')
        return
    }

    console.log('compra realizada')
}

comprar(produto, saldo, estoque)


let asssinatura = true;
let filmeDisponivel = true;
let idade = 18;
let classificado = 16

if (asssinatura) {

    if (filmeDisponivel) {
    
        if (idade > classificado) {
            console.log('filme liberado')
        } else (
            console.log('bloqueado por idade')
        )
    } else {
        console.log('filme indisponível')
    }
} else {
    console.log('asssine um plano')
}


let contaExiste = true;
let senhaCorreta = true;
let saldo = 50;

if (contaExiste) {

    if (senhaCorreta) {

        if (saldo >= 100) {
            console.log('saque realizado')
        } else {
            console.log('saque insuficiente')
        }
    } else {
        console.log('senha incorreta')
    }
} else {
    console.log('conta inexistente')
}


let logado = true;
let admin = true;
let manutencao = false;

if (logado) {

    if (manutencao) {
        console.log('sistema em manutenção')

    } else if (admin) {
        console.log('painel admin')
    } else {
        console.log('painel usuario')
    }

} else {
    console.log('realize login')
}


function acessarSistema() {
    let servidor = true;
    let autenticado = true;
    let token = false

    if (!servidor) {
        console.log('servidor offline')
        return
    }

    if (!autenticado) {
        console.log('autenticação incorreta')
        return
    }

    if (!token) {
        console.log('token inválido')
        return
    }

    console.log('acesso liberado')

}

acessarSistema()


function comprarProduto() {
    
    let produtoExiste = true;
    let saldo = 200;
    let estoque = true;

    if (!produtoExiste) {
        console.log('produto inexistente')
        return
    }

    if (saldo <= 0 ) {
        console.log('saldo insuficiente')
        return
    }

    if (!estoque) {
        console.log('sem estoque')
        return
    }

    console.log('compra realizada')
}


comprarProduto()

let usuarioExiste = true;
let senhaCorreta1 = true;
let premium = true;
let admin1 = true;

if (usuarioExiste) {

    if (senhaCorreta1) {

        if (admin1) {
            console.log('painel admin')
        } else if (premium) {
            console.log('painel premium')
        } else {
            console.log('painel comum')
        }
    } else {
        console.log('senha incorreta')
    }
} else {
    console.log('usuario não encontrado')
}


function acessoPainel() {



    if (!usuarioExiste) {
        console.log('usuario não encontrado')
        return
    }

    if (!senhaCorreta1) {
        console.log('senha incorreta')
        return
    }

    if (!admin1) {
        console.log('não é admin')
        return
    }

    if (!premium) {
        console.log('não premium')
    }

    console.log('acesso liberado')

}

acessoPainel()


function acessarServidor() {

    let servidorOnline = true;
    let usuarioAutenticado = true;
    let permissao = false;


    if (!servidorOnline) {
        console.log('servidor Offline')
        return
    }

    if (!usuarioAutenticado) {
        console.log('usuario não autenticado')
        return
    }

    if (!permissao) {
        console.log('permissao negada')
        return
    }

    console.log('acesso liberado')
}

acessarServidor()

function comprarIngresso() {

    let ingressoDisponivel = true;
    let saldo = 80;
    let vip = true;

    if (!ingressoDisponivel) {
        console.log('ingresso indisponível')
        return
    }

    if (saldo < 100) {
        console.log('saldo insuficiente')
        return
    }

    if (vip) {
        console.log('ingresso vip comprado')
        return
    }

    console.log('ingresso comum comprado')

}

comprarIngresso()

function matricula() {

    let matriculado = true;
    let documentos = false;
    let vagaDisponivel = true

    if (!matriculado) {
        console.log('não matriculado')
        return
    }

    if (!documentos) {
        console.log('documentos incorretos')
        return
    }

    if (!vagaDisponivel) {
        console.log('vaga indisponível')
        return
    }

    console.log('matricula realizada com sucesso')
    
    }

    matricula()

    function acessarPainel() {

        let usuarioExiste = true
        let senhaCorreta = true;
        let cargo = 'moderador';

        if (!usuarioExiste) {
            console.log('usuario não encontrado')
            return
        }

        if (!senhaCorreta) {
            console.log('senha incorreta')
            return
        }

        if (cargo === 'moderador') {
            console.log('painel moderador')
        } else if (cargo === 'admin') {
            console.log('painel admin')
        } else {
            console.log('painel usuario')
        }
    }

    acessarPainel()


    function fazerPix() {

    let contaExiste = true;
    let chavePixValida = true;
    let saldo = 500;
    let valorPix = 700;

    if (!contaExiste) {
        console.log('conta não encontrado')
        return
    }

    if (!chavePixValida) {
        console.log('chave inválida')
        return
    }

    if (saldo < valorPix) {
        console.log('saldo insuficiente')
        return
    }

    console.log('pix realizado')

    }

    fazerPix()



