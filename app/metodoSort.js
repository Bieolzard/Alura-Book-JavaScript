let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco)

let btnOrdenarFront = document.getElementById('btnFiltrarLivrosFront')
btnOrdenarFront.addEventListener('click', ordenarLivrosPorPreco)


function ordenarLivrosPorPreco () {
      let livrosOrdenados  = livros.sort((a, b) => a.preco - b.preco)
      exibirOsLivrosNaTela(livrosOrdenados)
}