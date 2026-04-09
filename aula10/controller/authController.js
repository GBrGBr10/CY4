const jwt = require('jsonwebtoken');

const users = [
    {email: 'user@example.com', password: '123456'},
    {email: 'goku@gmail.com', password: '094231'},
    {email: 'leon@gmail.com', password: '2469'}
    
]

const login = (req, res) => {

    const {email, password} = req.body

    const user = users.find( (u) => {
        return u.email === email && u.password === password
    } )

    if (!user) {
        res.status(401).json( {error: "Credenciais inválidas!"})
    }

    const token = jwt.sign( { email: user.email }, 'secreta', {expiresIn: '1h'} )

    res.json ( {token, email: user.email } )
}

module.exports = { login }