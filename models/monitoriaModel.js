const mongoose = require('mongoose');
const monitoriaSchema = new mongoose.Schema({
    estado: {
      type: String
    }
})
const Monitoria = mongoose.model('Monitoria', monitoriaSchema);
module.exports = Monitoria