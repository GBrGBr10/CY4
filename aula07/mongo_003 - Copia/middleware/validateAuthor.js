const validateAuthor = (req, res, next) => {
    const { title, author, year, genre } = req.body;

    if(!author || author != "string" || author.length < 3 )
        return res.status(400).json({error: "Autor é obrigatório e deve conter pelo menos 3 letras"} );

    next();

};

module.exports = validateAuthor;