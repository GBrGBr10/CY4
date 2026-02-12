//Catálogos de filmes

let movies = [
    { id:1, title: "Django Livre", genre: "Faroeste", year: "2012" },
    { id:2, title: "Madagascar", genre: "Comédia", year: "2005" },
    { id:3, title: "Como Treinar Seu Dragão", genre: "Aventura", year: "2010" },
    { id:4, title: "Deadpool & Wolverine", genre: "Ação", year: "2024" }
    
]

//Puxar os filmes
movies.push(
    { id:5, title: "Invincible", genre: "Animação", year: "2021" }, 
    { id:6, title: "Homem Aranha: Através do Aranhaverso", genre: "Ficção Científica", year: "2023"}
);

// Spread
let newMovies = [
    { id:7, title: "Apenas um Show : Filme", genre: "Comédia", year: "2015" },
    { id:8, title: "DragonBallZ:O Renascimento de Freeza", genre: "Fantasia", year: "2015"}
]

movies.push(...newMovies);

//READ com método forEach
movies.forEach(movie => console.log(`${movie.id} | Título: ${movie.title} | Gênero: ${movie.genre} | Ano de Lançamento: ${movie.year}`))

//Update com método Find
let movieToUpdate = movies.find ( movie => movie.id === 10 );
if(movieToUpdate) {
    movieToUpdate.genre = "Aventura";
    console.log(`Filme Atualizado: Título: ${movieToUpdate.title}, Gênero: ${movieToUpdate.genre}`)
}

//DELETE com métodos findIndex e splice
let index = movies.findIndex(movie => movie.id === 82);
if (index !== -1) {
    console.log(`index: ${index}`);
    movies.splice(index,1 );
}
else {
    console.log("Filme não executado na praça pública")
}

//Ex1 : Listar os itens usando forEach
movies.forEach(movie => console.log(`${movie.title}`))

//Ex2 : Atualizar o ano de um filme

console.log(movies);

let movieToUpdate2 = movies.find ( movie => movie.id === 2 );
if(movieToUpdate2) {
    movieToUpdate2.year = "1998";
    console.log(`Filme Atualizado: Título: ${movieToUpdate2.title}, Ano: ${movieToUpdate2.year}`)
}

//Ex3 : listMoviesByGenre

function listMoviesByGenre(genero){
    let movieByGenero = movies.filter(movie => movie.genre === genero);
    console.log(movieByGenero);
}

listMoviesByGenre("Animação");

console.log(movies);

//Adicionar Filme
function adicionarFilme(novoFilme) {
    const idExistente = movies.find( movie => movie.id == novoFilme.id );

    if(idExistente) {
        console.log(`Erro: Já existe um filme com o id ${novoFilme.id}`);
        return;
    }

    movies.push(novoFilme);
    console.log(`Filme ${novoFilme.title} adiocionado com sucesso!`)
}

adicionarFilme( {id: 9, title:"Interestelar", genre:"Ficção Científica", year: 2014});


//Aula 03

adicionarFilme( {id: 10, title:"Rambo", genre:"Ação", year:"1982"})

const express = require('express'); // importa a biblioteca express
const app = express(); //Cria uma aplicação com Express
app.use(express.json()); //Permite trabalhar com objetos JSON {propriedade : valor}


app.get('/read', (req, res) => {

    let html = `
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>

                        <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: rgb(174, 204, 194);
        }
        
        ul {
            margin-bottom: 15px;
            padding: 15px;
            list-style: none;
            border-radius: 10px;
            background-color: rgb(209, 111, 111);
        }
        
                </style>
                
            </head>
        <body>
            <h1>Filmes Cadastrados</h1>
            <ul>
                `
            
            //Fazer a Listagem
            
            movies.forEach( (movie) => {
                html+= `<li>Título: ${movie.title}, Gênero: ${movie.genre}, Ano: ${movie.year} </li>`
            })


            html +=` 
                    </ul>
            </body>
            </html>`

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
})

//Iniciando o servidor
app.listen(3000, () => {console.log("Servidor rodando na porta 3000")})