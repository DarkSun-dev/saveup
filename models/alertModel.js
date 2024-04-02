const mongoose = require('mongoose');
const alertSchema = new mongoose.Schema({
    user: Object,
    message: String
})
const Alert = mongoose.model('Alert', alertSchema);
module.exports = Alert