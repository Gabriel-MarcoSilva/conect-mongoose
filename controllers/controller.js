const Competidor = require("../models/CompetidorSchema")

module.exports = class controller {
    static async list(req, res) {
        res.send({ menssage: "bem vindo à api" })
    }
}