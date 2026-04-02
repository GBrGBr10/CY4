const Produto = require("../models/produto");

const createProduto = async (req, res) => {
        try {
            /*
            const title = req.body.title;
            const author = req.body.author
            const year = req.body.year
            const genre = req.body.genre
            */
            const {nome, categoria, preco} = req.body
            
            const newProduto = new Produto( {nome, categoria, preco} );
            await newProduto.save();
            res.status(201).json(newProduto);

        } catch(err) {

            //res.status(500).json({error: 'Erro ao criar o livro!'})}

            res.status(500).json({error: err.name});
        }
    };

    const listProduto = async (req, res) => {
        try {
            let query = {};
            /*
            if (req.query.nome) {
                query.title = { $regex: req.query.title, $options: "i" };
            }
            if (req.query.categoria) {
                query.author = { $regex: req.query.author, $options: "i" };
            }
                */


            //const books = await Book.find(query); //Filtro
            //const books = await Book.find(query).skip(skip).limit(pageSize); //Paginação
            const produtos = await Produto.find()

            res.json(produtos);
        } catch (err) {
            res.status(500).json({ error: "Erro ao buscar produtos" });
}
};



 module.exports = { createProduto, listProduto }