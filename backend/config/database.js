const mongoose = require('mongoose'); /*responsável pela comunicação do mongoDB*/

module.exports = mongoose.connect('mongodb://localhost/db_finance');

mongoose.Error.messages.general.required = "O atributo '{PATH} é obritatório."

mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'."

mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."