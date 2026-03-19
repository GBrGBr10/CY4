const validateTitle = (req, res, next) => {
    const {title, author, year, genre } = req.body;

    if(!title || typeof title !="string" || title.length < 3)
        return res.status(400).json( {error: '(Middleware) Titulo é obrigatório, contendo no mínimo 3 letras'} )

    next();
};

module.exports = validateTitle