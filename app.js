
// pegar o input

// se for sim, mostra as categorias disponíveis e pergunra quais categorias ele escolhe

// se não, mostra todos os livros em ordem crescente pela quantidade de paginas;

const livros = require("./database");
const readline = require ('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro?S/N');

if(entradaInicial.toLocaleUpperCase() === "S") {
    console.log('Essas são as categorias disponíveis:');
    console.log('tecnologia', 'Historia', 'Cultura', 'Aventura', 'Politica');

    const entradaCategoria = readline.question('Qual categoria voce escolhe?');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);

} else {
    const librosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    
    console.log('Esses são todos os livros diponíveis: ');
    console.table(librosOrdenados);   
}

