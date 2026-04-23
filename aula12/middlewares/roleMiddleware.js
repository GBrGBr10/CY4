const jwt = require('jsonwebtoken');

    const authorize = (roles) => {
        return (req, res, next) => {
            //Aula 12

            //const token = req.header("Authorization");
            const token = req.cookies.access;

            if(!token) {
                return res.status(401).json("Acesso negado!");
            }

            try{
                //Aula 12

                //const verified = jwt.verify(token.split(' ')[1], 'secreta');
                const verified = jwt.verify(token, "secreta");

                if (!roles.includes(verified.role))
                    return res.status(403).json({error: "Acesso proibido"})

                req.user = verified;

                next();

            } catch (error) {
                res.status(401).json( {error: "Token inválido "})
            }
        }
}

module.exports = { authorize }