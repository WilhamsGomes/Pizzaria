const valores = []
const pizzas = []

let qtnd_itens = 0

let button = document.querySelectorAll("button");

let valor_total = 0.0

const mostrarPedido = []

button.forEach(button =>{

    button.addEventListener("click", () =>{

        //PEGANDO O VALOR ID DO BOTÃO CLICADO
        const id = button.attributes.id.value
    
        //IDENTIFICANDO O NOME ATRAVÉS DO ID
        const nome_produto = document.getElementById('nome-produto'+id).innerText;

        //IDENTIFICANDO O PREÇO ATRAVÉS DO VALOR ID
        const preco_produto = parseFloat(document.getElementById('preco-item'+id).innerText);

        //ADICIONANDO PIZZA E VALOR NO ARRAY DO CARRINHO
        valores.push(preco_produto)
        pizzas.push(nome_produto)
        qtnd_itens++;       

        mostrarPedido.push((nome_produto + " - " + preco_produto ))

        mostrarPedido.forEach( () =>{
            document.getElementById("nosso-carrinho").innerHTML = (mostrarPedido.join(" \n\ "))
        })

        valor_total = parseFloat((valor_total+preco_produto).toFixed(2))
        document.getElementById("valor-total").innerHTML = "R$" +  valor_total
    });
});


function ativar(){
    const carrinho_estado = document.querySelector('.ativo')        
    carrinho_estado.classList.remove('ativo')
}

function fechar(){
    const carrinho_itens = document.querySelector('.carrinho_itens')
    carrinho_itens.classList.add('ativo')
}

function limpar(){
    document.getElementById("nosso-carrinho").innerHTML = "Carrinho Vazio ;("

    for ( k = 0; k <= mostrarPedido.length; k++){
        mostrarPedido.pop()
        valores.pop()
        valor_total = 0.00
        document.getElementById("valor-total").innerHTML = "R$" + valor_total
    }
}

let number = '5581995570677'


function finalizarCompra(){

    const mensagem = mostrarPedido.toString()
    let link = "https://api.whatsapp.com/send?phone=5581995570677&text= *Bem vindo a Pizzaria Recife* %0A %0A O total do meu pedido foi: *"+ valor_total + "* %0A %0A O Seus itens: %0A %0A" + mensagem;
    window.open(link, "_blank")
}
