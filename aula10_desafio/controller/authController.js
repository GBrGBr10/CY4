const jwt = require('jsonwebtoken');

const users = [
    {email: 'user@example.com', password: 'banana'},
    {email: 'fan@example.com', password: 'apple'},
    {email: 'admin@gmail.com', password: 'admin123'}
    
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