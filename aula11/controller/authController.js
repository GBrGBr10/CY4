const jwt = require('jsonwebtoken');

const users = [
    {email: 'admin@example.com', password: 'admin123', role: "admin"},
    {email: 'mickeymouse@example.com', password:'disney', role:'mascote'},
    {email: 'felca@example.com', password:'chatdoroblox', role:'felca'},
    {email: 'goku@example.com', password: 'dragonballsuper'},
    {email: 'leon@example.com', password: 'kennedy'}
    
]

let refreshTokens = [];

const login = (req, res) => {

    const {email, password} = req.body

    const user = users.find( (u) => {
        return u.email === email && u.password === password
    } )

    if (!user) {
        res.status(401).json( {error: "Credenciais inválidas!"})
    }

    

    //const token = jwt.sign( { email: user.email, role: user.role }, 'secreta', {expiresIn: '1m'} )

    const access = jwt.sign(
        {email: user.email, role: user.role},
        "secreta",
        {expiresIn:"1m"}
    )

    const refresh = jwt.sign(
        {email: user.email, role: user.role},
        "refresh_secreta",
        {expiresIn:"7d"}
    )


    //res.json ( {token, email: user.email } )

    refreshTokens.push(refresh);
    res.json( { access, refresh } );
}

const refresh = (req, res) => {
    const { token } = req.body;
        if (!token) return res.status(401).json({ error: "Acesso negado" });
        if (!refreshTokens.includes(token))
        return res.status(403).json({ error: "Token inválido" });


        refreshTokens = refreshTokens.filter((rt) => rt !== token);


    try {
        const decoded = jwt.verify(token, "refresh_secreta");


        const newRefreshToken = jwt.sign({ email: decoded.email, role: decoded.role }, "refresh_secreta", {
            expiresIn: "7d",
        });
        refreshTokens.push(newRefreshToken);


        const newAccessToken = jwt.sign({ email: decoded.email, role:decoded.role }, "secreta", {
            expiresIn: "1m",
        });


        res.json({ access: newAccessToken, refresh: newRefreshToken });
        } catch (error) {
        return res.status(403).json({ error: "Token inválido" });
        }
};

module.exports = { login, refresh }