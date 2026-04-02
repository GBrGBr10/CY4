const validateTitle = (req, res, next) => {
    const { title, author, year, genre } = req.body;

    if(!title || title != "string" || title.length < 3 )
        return res.status(400).json({error: "Título é obrigatório e deve conter pelo menos 3 letras"} );

    next();

};

module.exports = validateTitle;