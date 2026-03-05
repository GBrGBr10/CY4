const mongoose = require('mongoose'); //Importação de Mongoose

const connectDB = async () => { //Conexão com BD ( mais importante na apostila )
    try { //Try e Catch para verificar se está tudo bem
        await mongoose.connect('mongodb://localhost:27017/LivrariaDB');
        console.log('Zzzzzz... Zzzzzz...');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB; //exportação do módulo para ser usado em outros arquivos