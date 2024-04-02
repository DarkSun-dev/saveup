const mongoose = require('mongoose');
const entidadeSchema = new mongoose.Schema({
    nome: {
      type: String
    },
    telefone: {
      type: String
    },
    email: {
      type: String
    }
})
const Entidade = mongoose.model('Entidade', entidadeSchema);
module.exports = Entidade