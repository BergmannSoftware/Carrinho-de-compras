let totalGeral;
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById ('produto').value;

    let nomeProduto = produto.split('-')[0]; 
    let valorProdutoUnitario = produto.split('R$')[1];
    //essa função SPLIT divide o texto com base no caracter passado como delimitador, retornando um array. 
    //Sendo assim, o tamanho do array dependerá de quantas vezes esse caracter aparece. 
    //Nos [] colocamos a posição do array que queremos acessar.
    
    //calcular o preço, subtotal
    let quantidade = document.getElementById ('quantidade').value;
    let preco = quantidade * valorProdutoUnitario;

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
     
    //atializar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    document.getElementById ('quantidade').value = 0
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

