const mongoose = require('mongoose');
const alertSchema = new mongoose.Schema({
    entidades: Array,
    user: Object,
    message: String,
    status: Object
})
const Alert = mongoose.model('Alert', alertSchema);
module.exports = Alert