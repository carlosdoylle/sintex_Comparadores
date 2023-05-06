/* let condicional1 = true
let condicional2= false

if(condicional1){
    console.log('entramos na condiçao 1')
}

if(condicional2){
    console.log('entramos na condiçao 2')
} */



/* Exercício 1
Crie uma função que:
Recebe 2 números (chamaremos de num1 e num2)
Compara esses números entre si:
Se os números forem iguais, retorna uma mensagem de sucesso
Depois, chame a função com números que foram inseridos pelo usuário através do prompt */
 /* let n1 = Number(prompt('digite o primeiro numero'))
let n2 = Number(prompt('digite o segundo numero'))
 */
/* console.log(CompararNumeros(n1,n2)) */

 /*  let saoIguais=CompararNumeros(n1,n2);
console.log(saoIguais)

function CompararNumeros(num1,num2){
    let resultado= false;
    if (num1===num2){
        resultado= true
    }
    return resultado;
    }    */ 
    

/* Exercício 2
 crie uma função que:
Recebe 2 números (chamaremos de num1 e num2)
Compara esses números entre si:
Retorna mensagens dizendo se os números são iguais ou diferentes
Depois, chame a função com números que foram inseridos pelo usuário através do prompt */
 /* let n1 = Number(prompt('digite o primeiro numero'))
let n2 = Number(prompt('digite o segundo numero'))

let saoIguais=CompararNumeros(n1,n2);
console.log(saoIguais)

function CompararNumeros(num1,num2){
    let resultado= 'numeros diferentes';
    if (num1===num2){
        resultado= 'numeros iguais'
    }
    return resultado;
    }   */


/*   let n1 = Number(prompt('digite o primeiro numero'))
let n2 = Number(prompt('digite o segundo numero'))

let saoIguais=CompararNumeros(n1,n2);
console.log(saoIguais)

function CompararNumeros(num1,num2){
    if (num1>num2){
        resultado= `o ${num1} é maior`
    }else{
        if(num1<num2){
             resultado= `o ${num2} é maior`
        }else{
             resultado= `os numeros sao iguais`
        }
    
    }
    return resultado;
    }  
 */

   /*  function CarcularIdade(anoNasc){
        let anoAtual= 2023;
        let idade = anoAtual- anoNasc;
        let mensagem = "";

        if(idade<16){
            mensagem= "voce nao pode votar"
        }else if(idade>=16 && idade<=17 || idade>=70){
            mensagem="voto facultativo"
        }else if(idade>=18 && idade<70){
            mensagem="bora votar"
        }else{
            mensagem="mlk vc nei nasceu ainda"
        }
        return mensagem

    } */
/*  let ensinoMedio= prompt('voce concluiu o ensino medio?')
 let idade= Number(prompt('qual sua idade?'))
 let outraFacul= prompt('voce esta cursando outra faculdade?')

 

    function verificarFacul(ensinoMedio, idade , outraFacul){

        let mensgem=''
        if(ensinoMedio.toUpperCase() ==="SIM" && idade>=18 && outraFacul.toUpperCase()==='NAO'){
            mensgem='seja bem vindo'

        }else{
            mensgem='cumpra todas as condiçoes para entrar nesta instituiçao'
        }
        return mensgem

    }

 let resultado = verificarFacul(ensinoMedio, idade , outraFacul)

 console.log(resultado) */


 /* let pais ='croacia'

 switch(pais){
    case 'brasil':
        console.log ('brasileiro') 
        break;
    case 'lichtein':
        console.log( 'lichteinense')
        break;
    case 'croacia':
            console.log( 'croata')
            break;
    default:
        console.log( 'nacionalidade nao encontrada')
        break
    

 } */

 let algarismo1 = Number(prompt('Numero 1'))
 let algarismo2 = Number(prompt('Numero 2'))


let opçao = Number(prompt('digite uma opçao:\n1 -soma\n2-subtraçao\n3-multiplicaçao\n4-divisao'))

switch(opçao){
    case 1:
        let soma = algarismo1 + algarismo2
        console.log(soma)
        break;
    case 2:
         let subtraçao = algarismo1 - algarismo2
        console.log(subtraçao)
         break;
    case 3:
         let multiplicaçao = algarismo1 * algarismo2
        console.log(multiplicaçao)
        break;
    case 4:
        let divisao = algarismo1 / algarismo2
        console.log(divisao)
        break;

            
    
    default:
        console.log('opçao nao encontrada')
}