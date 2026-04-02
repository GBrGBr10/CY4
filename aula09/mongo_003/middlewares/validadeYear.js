const validateYear = (req, res, next) => {
    const { title, author, year, genre } = req.body;

    const anoAtual = new Date().getFullYear();

    if(!year || typeof year !== "number" || year < 999 || year > anoAtual) {

        return res.status(400).json( {error: '(Middleware) Ano é obrigatório, contendo no mínimo 4 digitos'} )
    }
    next();
};

module.exports = validateYear