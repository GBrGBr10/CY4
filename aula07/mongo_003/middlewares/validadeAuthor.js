const validateAuthor = (req, res, next) => {
    const { title, author, year, genre } = req.body;

     if(!author || typeof author !="string" || author.length < 3)
        return res.status(400).json( {error: ' (Middleware) Autor é obrigatório, contendo no mínimo 3 linhas'} )

    next();
};

module.exports = validateAuthor