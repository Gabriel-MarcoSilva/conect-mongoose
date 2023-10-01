const mongoose = require("mongoose")

const User = process.env.DB_USER
const Password = process.env.DB_PASS

const Connect = () =>{

    mongoose.connect(`mongodb+srv://${User}:${Password}@cluster0.bgcyiri.mongodb.net/teste?retryWrites=true&w=majority`)
    
    const connection = mongoose.connection  

    connection.on("error", () =>{
        console.log("erro ao conectar com o banco de dados")
    })

    connection.on("open", () =>{
        console.log("sucesso ao conectar com o banco de dados")
    })
}

Connect()

module.exports = mongoose