
function listarCategorias(){
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias')
    .then (res => res.json())
    .then(lista =>{
        qtdCategoria.innerHTML = lista.length
    })
} listarCategorias()


function listarProdutos(){
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/produtos')
    .then (res => res.json())
    .then(lista =>{
        qtdProduto.innerHTML = lista.length

        
    })
} listarProdutos()
