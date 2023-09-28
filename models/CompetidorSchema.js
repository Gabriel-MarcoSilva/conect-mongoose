const mongoose = require("mongoose")

const CompetidorSchema = mongoose.model("Competidor", {
    id: Number, 
    nome: String,
    equipe:  String,
    ranking: Number,
    modalidade: String,
    gif: String,
    nome_robo: String,
    foto_robo: String
}) 

module.exports = CompetidorSchema;