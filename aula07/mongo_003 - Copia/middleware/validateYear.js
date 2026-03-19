const validateYear = (req, res, next) => {
    const { title, author, year, genre } = req.body;

    const currentYear = new Date().getFullYear();

    if(!year || typeof year !== "number" || year < 1000 || year > currentYear );
        return res.status(400).json({error: "Ano é obrigatório e não pode estar no futuro e nem antes de 1000"} );

    next();

};

module.exports = validateYear;