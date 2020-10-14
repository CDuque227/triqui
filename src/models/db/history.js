/*=============================================
=            Dependencies                     =
=============================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let historySchema = new Schema({
    positions: Array,
    winner: String

});

let history = mongoose.model('history', historySchema);

module.exports = history;
