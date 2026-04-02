const Book = require("../models/book");

const createBook = async (req, res) => {
        try {
            /*
            const title = req.body.title;
            const author = req.body.author
            const year = req.body.year
            const genre = req.body.genre
            */
            const {title, author, year, genre} = req.body
            
            const newBook = new Book( {title, author, year, genre} );
            await newBook.save();
            res.status(201).json(newBook);

        } catch(err) {

            if(err.name ==="ValidationError") {
                return res.status(400).json( {error1: err.errors.title?.message, error2: err.errors.author?.message, error3: err.errors.year?.message})
            }
            //res.status(500).json({error: 'Erro ao criar o livro!'})}

            res.status(500).json({error: err.name});
        }
    };

//listBook
  /*
 const listBook = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(201).json(books);

    } catch(err) {res.status(500).json({error: 'Erro ao buscar o livro!'})}
    };
    */

    const listBook = async (req, res) => {
        try {
            let query = {};

            if (req.query.title) {
                query.title = { $regex: req.query.title, $options: "i" };
            }
            if (req.query.author) {
                query.author = { $regex: req.query.author, $options: "i" };
            }
            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            if (req.query.year) {
                query.year = req.query.year;
            }

            //Ordenação
            let sort = {};
                if (req.query.sortBy) {
                    const sortField = req.query.sortBy;
                    const sortOrder = req.query.order === 'desc' ? -1 : 1;
                    sort[sortField] = sortOrder;
                }

            //Paginação
            const pageNumber = parseInt(req.query.pageNumber) || 1;
            const pageSize = parseInt(req.query.pageSize) || 5;
            const skip = (pageNumber - 1) * pageSize;

            //const books = await Book.find(query); //Filtro
            //const books = await Book.find(query).skip(skip).limit(pageSize); //Paginação
            const books = await Book.find(query).sort(sort).skip(skip).limit(pageSize); //Ordenação

            res.json(books);
        } catch (err) {
            res.status(500).json({ error: "Erro ao buscar livros" });
}
};

//listBookById
 const listBookById = async (req, res) => {
    try {
        const {id} = req.params 
        const bookById = await Book.findById(id)
        res.status(201).json(bookById);

        if (!bookById) {
            return res.status(404).json({ error: "Livro não encontrado"})
        }

    } catch(err) {
        next(err)
        //res.status(500).json({error: 'Erro ao buscar o livro pelo Id!'})}
    
} };

//update
 const updateBook = async (req, res) => {
    try {
        const { id } = req.params; 
        const updates = req.body;
        const options = {new: true, runValidators: true} //Novo Objeto

        const updateBook = await Book.findByIdAndUpdate(id, updates, options)

        res.status(201).json(updateBook);

        if (!updateBook) {
            return res.status(404).json({ error: "Livro não encontrado"})
        }

    } catch(err) {res.status(500).json({error: 'Erro ao atualizar o livro!'})}
 }; 

//delete
 const deleteBook = async (req, res) => {
    try {
        const { id } = req.params; 

        const deleteBook = await Book.findByIdAndDelete(id)

        res.status(201).json(deleteBook);

        if (!deleteBook) {
            return res.status(404).json({ error: "Livro não encontrado"})
        }

        res.json( {message: "Livro excluido com sucesso!"})

    } catch(err) {res.status(500).json({error: 'Erro ao excluir o livro!'})}
 };

 module.exports = { createBook, listBook, listBookById, updateBook, deleteBook }