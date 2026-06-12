// let logado = false;
// let admin = true;

// if (logado) {

//     if (admin) {
//         console.log('acesso admin')
//     } else {
//         console.log('acesso usuario')
//     }
// } else {
//     console.log('faça login')
// }


// function login(admin, logado) {

//     if (logado) {
    
//         if (admin) {
//             console.log('acesso admin')
//         } else {
//             console.log('acesso usuario')
//         }
//     } else {
//         console.log('realize login')
//     }
// }

// login()


// function acessarConta(login, senha) {

//     if (!login) {
//         console.log('realize login')
//         return
//     }

//     if (!senha) {
//         console.log('senha incorreta')
//         return
//     }

//     console.log('login realizado')
// }

// acessarConta(login,senha)


// function comprar(produto, saldo, estoque) {

//     if (!produto) {
//         console.log('produto indisponível')
//         return
//     }

//     if (saldo < 100) {
//         console.log('saldo insuficiente')
//         return
//     }

//     if (!estoque) {
//         console.log('sem estoque')
//         return
//     }

//     console.log('compra realizada')
// }

// comprar(produto, saldo, estoque)


// let asssinatura = true;
// let filmeDisponivel = true;
// let idade = 18;
// let classificado = 16

// if (asssinatura) {

//     if (filmeDisponivel) {
    
//         if (idade > classificado) {
//             console.log('filme liberado')
//         } else (
//             console.log('bloqueado por idade')
//         )
//     } else {
//         console.log('filme indisponível')
//     }
// } else {
//     console.log('asssine um plano')
// }


// let contaExiste = true;
// let senhaCorreta = true;
// let saldo = 50;

// if (contaExiste) {

//     if (senhaCorreta) {

//         if (saldo >= 100) {
//             console.log('saque realizado')
//         } else {
//             console.log('saque insuficiente')
//         }
//     } else {
//         console.log('senha incorreta')
//     }
// } else {
//     console.log('conta inexistente')
// }


// let logado = true;
// let admin = true;
// let manutencao = false;

// if (logado) {

//     if (manutencao) {
//         console.log('sistema em manutenção')

//     } else if (admin) {
//         console.log('painel admin')
//     } else {
//         console.log('painel usuario')
//     }

// } else {
//     console.log('realize login')
// }


// function acessarSistema() {
//     let servidor = true;
//     let autenticado = true;
//     let token = false

//     if (!servidor) {
//         console.log('servidor offline')
//         return
//     }

//     if (!autenticado) {
//         console.log('autenticação incorreta')
//         return
//     }

//     if (!token) {
//         console.log('token inválido')
//         return
//     }

//     console.log('acesso liberado')

// }

// acessarSistema()


// function comprarProduto() {
    
//     let produtoExiste = true;
//     let saldo = 200;
//     let estoque = true;

//     if (!produtoExiste) {
//         console.log('produto inexistente')
//         return
//     }

//     if (saldo <= 0 ) {
//         console.log('saldo insuficiente')
//         return
//     }

//     if (!estoque) {
//         console.log('sem estoque')
//         return
//     }

//     console.log('compra realizada')
// }


// comprarProduto()

// let usuarioExiste = true;
// let senhaCorreta1 = true;
// let premium = true;
// let admin1 = true;

// if (usuarioExiste) {

//     if (senhaCorreta1) {

//         if (admin1) {
//             console.log('painel admin')
//         } else if (premium) {
//             console.log('painel premium')
//         } else {
//             console.log('painel comum')
//         }
//     } else {
//         console.log('senha incorreta')
//     }
// } else {
//     console.log('usuario não encontrado')
// }


// function acessoPainel() {



//     if (!usuarioExiste) {
//         console.log('usuario não encontrado')
//         return
//     }

//     if (!senhaCorreta1) {
//         console.log('senha incorreta')
//         return
//     }

//     if (!admin1) {
//         console.log('não é admin')
//         return
//     }

//     if (!premium) {
//         console.log('não premium')
//     }

//     console.log('acesso liberado')

// }

// acessoPainel()


// function acessarServidor() {

//     let servidorOnline = true;
//     let usuarioAutenticado = true;
//     let permissao = false;


//     if (!servidorOnline) {
//         console.log('servidor Offline')
//         return
//     }

//     if (!usuarioAutenticado) {
//         console.log('usuario não autenticado')
//         return
//     }

//     if (!permissao) {
//         console.log('permissao negada')
//         return
//     }

//     console.log('acesso liberado')
// }

// acessarServidor()

// function comprarIngresso() {

//     let ingressoDisponivel = true;
//     let saldo = 80;
//     let vip = true;

//     if (!ingressoDisponivel) {
//         console.log('ingresso indisponível')
//         return
//     }

//     if (saldo < 100) {
//         console.log('saldo insuficiente')
//         return
//     }

//     if (vip) {
//         console.log('ingresso vip comprado')
//         return
//     }

//     console.log('ingresso comum comprado')

// }

// comprarIngresso()

// function matricula() {

//     let matriculado = true;
//     let documentos = false;
//     let vagaDisponivel = true

//     if (!matriculado) {
//         console.log('não matriculado')
//         return
//     }

//     if (!documentos) {
//         console.log('documentos incorretos')
//         return
//     }

//     if (!vagaDisponivel) {
//         console.log('vaga indisponível')
//         return
//     }

//     console.log('matricula realizada com sucesso')
    
//     }

//     matricula()

//     function acessarPainel() {

//         let usuarioExiste = true
//         let senhaCorreta = true;
//         let cargo = 'moderador';

//         if (!usuarioExiste) {
//             console.log('usuario não encontrado')
//             return
//         }

//         if (!senhaCorreta) {
//             console.log('senha incorreta')
//             return
//         }

//         if (cargo === 'moderador') {
//             console.log('painel moderador')
//         } else if (cargo === 'admin') {
//             console.log('painel admin')
//         } else {
//             console.log('painel usuario')
//         }
//     }

//     acessarPainel()


//     function fazerPix() {

//     let contaExiste = true;
//     let chavePixValida = true;
//     let saldo = 500;
//     let valorPix = 700;

//     if (!contaExiste) {
//         console.log('conta não encontrado')
//         return
//     }

//     if (!chavePixValida) {
//         console.log('chave inválida')
//         return
//     }

//     if (saldo < valorPix) {
//         console.log('saldo insuficiente')
//         return
//     }

//     console.log('pix realizado')

//     }

//     fazerPix()


// function realizarTransferencia() {

//     let contaExiste = true;
//     let autenticado = true;
//     let saldo = 1500;
//     let valorTransferencia = 1000;
//     let limiteEspecial = false;

//     if (!contaExiste) {
//         console.log('conta inexistente')
//         return
//     }

//     if (!autenticado) {
//         console.log('não autenticado')
//         return
//     }

//     if (saldo > valorTransferencia) {
//         console.log('transferencia realizada')
//     } else if (limiteEspecial === true) {
//         console.log('transferencia realizada com limite especial')
//     } else {
//         console.log('saldo insuficiente')
//     }
// }

// realizarTransferencia()


// let matriculado = true;
// let cursoDisponivel = true;
// let nota = 8;

// if (matriculado) {

//     if (cursoDisponivel)

//         if (nota >= 9) {
//             console.log('certificado com excelencia')
//         } else if (nota >= 7) {
//             console.log('certificado aprovado')
//         } else {
//             console.log('curso concluido sem certificação')
//         } else {
//             console.log('curso indisponivel')
//         }
// } else {
//     console.log('aluno não matriculado')
// }


// function acessoPainel() {

//     let usuarioExiste = true;
//     let senhaCorreta = true;
//     let cargo = 'gerente';

//     if (!usuarioExiste) {
//         console.log('usuario não encontrado')
//         return
//     }

//     if (!senhaCorreta) {
//         console.log('senha incorreta')
//         return
//     }

//     if (cargo === 'admin') {
//         console.log('painel admin')
//     } else if (cargo === 'gerente') {
//         console.log('painel gerente')
//     } else {
//         console.log('painel funcionario')
//     }

// }

// let ingresso = true;
// let idade = 15;
// let acompanhado = true;
// let vip = false;

// if (ingresso) {

//     if (idade >= 18) {
        
//         if (vip) {
//             console.log('acesso vip')
//         } else {
//             console.log('entrada permitida')
//         }
//     } else if (acompanhado) {

//         if (vip) {
//             console.log('acesso vip')
//         } else {
//             console.log('entrada permitida')
//         }
//     } else {
//         console.log('entrada proibida')
//     }
// } else {
//     console.log('compre ingresso')
// }




//     function acessarSistema() {

//         let servidorOnline = true;
//         let usuarioAutenticado = true;
//         let tokenValido = true;
//         let cargo = 'moderador';
//         let manutencao = false;


//         if (!servidorOnline) {
//             console.log('servidor offline')
//             return
//         }

//         if (!usuarioAutenticado) {
//             console.log('usuario não autenticado')
//             return
//         }

//         if (!tokenValido) {
//             console.log('token invalido')
//             return
//         }

//         if (manutencao === true) {
//             console.log('sistema em manutenção')
//         } else if (cargo === 'admin') {
//             console.log('acesso admin')
//         } else if (cargo === 'moderador') {
//             console.log('acesso moderador')
//         } else {
//             console.log('acesso usuario')
//         }
//     }

//     acessarSistema()


function acessarEmpresa() {

    let usuarioExiste = false;
    let senhaCorreta = false;
    let emailVerificado = false;
    let admin = true;

    if (!usuarioExiste) {
        console.log('usuario não encontrado')
        return
    }

    if (!senhaCorreta) {
        console.log('senha incorreta')
        return
    }

    if (!emailVerificado) {
        console.log('email não verificado')
        return
    }

    if (admin) {
        console.log('painel administrativo')
        return
    } else {
        console.log('painel usuario')
    }
}

acessarEmpresa()




function solicitarEmprestimo() {

    let contaAtiva = true;
    let score = 620;
    let renda = 3000;

    if (contaAtiva === false ) {
        console.log('conta inativa')
        return
    }

    if (score >= 800) {
        console.log('emprestimo premium')
    } else if (score >= 700) {
        console.log('emprestimo aprovado')
    } else if (score >= 600) {
        console.log('analise manual') 
    } else {
        console.log('empréstimo negado')
    }

}

solicitarEmprestimo()

let assinatura = true;
let filmeDisponivel = true;
let idade = 15;
let classificacao = 16;
let premium = false;

if (assinatura) {

    if (filmeDisponivel) {

        if (idade >= classificacao) {
            
            if (premium) {
                console.log('area premium')
            } else {
                console.log('area comum')
            }
        } else {
            console.log('bloqueado por idade')
        }
    } else {
        console.log('filme indisponível')
    }
} else {
    console.log('realize uma assinatura')
}

function atenderPaciente() {

    let cadastro = true;
    let convenio = true;
    let emergencia = false;

    if (cadastro === false) {
        console.log('realize cadastro')
        return
    }

    if (emergencia === true) {
        console.log('atendimento imeditado')
    } else if (convenio === true) {
        console.log('atendimento pelo convenio')
    } else {
        console.log('atendimento particular')
    }
}

atenderPaciente()

let servidorOnline = true;
let tokenValido = true;
let cargo = 'gerente'


function acessarServidor(servidorOnline, tokenValido, cargo) {

    if (servidorOnline === false) {
        console.log('servidor offline')
        return
    }

    if (tokenValido === false) {
        console.log('token inválido')
        return
    }

    if (cargo === 'admin') {
        console.log('acesso admin') 
    } else if (cargo === 'gerente') {
        console.log('acesso gerente')
    } else if (cargo === 'suporte') {
        console.log('acesso suporte')
    } else {
        console.log('acesso usuario')
    }

}

acessarServidor(true, true, 'admin')


function transferenciaInternacional() {

    let contaExiste = true;
    let autenticado = true;
    let saldo = 4000;
    let valor = 7000;
    let limiteInternacional = true;

    if (contaExiste === false) {
        console.log('conta inexistente')
        return
    }

    if (autenticado === false) {
        console.log('não autenticado')
        return
    }

    if (saldo >= valor) {
        console.log('transferencia realizada')
    } else if (limiteInternacional === true) {
        console.log('transferencia realizda usando limite')
    } else {
        console.log('saldo insuficiente')
    }
}

transferenciaInternacional()

let ingresso = true;
let idade1 = 18;
let acompanhado = false;
let vip = false;
let salaVipDisponivel = true;

if (ingresso === true) {

    if (idade1 >= 18 || acompanhado === true) {

            if (vip === true && salaVipDisponivel  === true) {
                console.log('acesso a sala vip')
            } else {
                console.log('acesso comum')
            }
    } else {
        console.log('precisar estar acompanhado, ou 18+')
    }
} else {
    console.log('comprar ingresso')
}


function acessarBase() {

    let credencial = true;
    let biometria = true;
    let nivel = 3;

    if (credencial === false) {
        console.log('credencial invalida')
        return
    }

    if (biometria === false) {
        console.log('biometria não confirmada') 
        return
    }

    if (nivel === 5) {
        console.log('acesso total')
    } else if (nivel === 4) {
        console.log('acesso avançado')
    } else if (nivel === 3) {
        console.log('acesso intermediario')
    } else if (nivel === 2) {
        console.log('acesso básico')
    } else {
        console.log('acesso restrito')
    }
}

acessarBase()

let matriculado = true;
let documentos = true;
let nota = 8;
let frequencia = 80;

if (matriculado === true) {

    if (documentos === true) {
        
        if (nota >= 7) {

            if (frequencia >= 75) {
                console.log('aprovado')
            } else {
                console.log('reprovado por falta')
            }
        } else {
            console.log('reprovado por nota')
        }
    } else {
        console.log('documentação pendente')
    }
} else {
    console.log('aluno não matriculado')
}

function acessarSistemaCentral() {

    let servidorOnline = true;
    let usuarioExiste = true;
    let senhaCorreta = true;
    let tokenValido = true;
    let manutencao = false;
    let cargo = '';

    if (cargo === '') {
        console.log('insira um cargo')
        return
    }

    if (servidorOnline === false) {
        console.log('servidor offline')
        return
    }

    if (usuarioExiste === false) {
        console.log('usuario não encontrado')
        return
    }

    if (senhaCorreta === false) {
        console.log('senha incorreta')
        return
    }

    if (tokenValido === false) {
        console.log('token inválido')
        return
    }

    if (manutencao === true) {
        console.log('sistema em manutenção')
        return
    }

    if (cargo === 'admin') {
        console.log('acesso admin')
    } else if (cargo === 'moderador') {
        console.log('acesso moderador')
    } else if (cargo === 'gerente') {
        console.log('acesso gerente')
    } else {
        console.log('acesso usuario')
    }
}

acessarSistemaCentral()
