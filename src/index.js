const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
dotenv.config()


const app = express();
const port = process.env.PORT || 3001



app.get('/',(req,res)=> {
    res.send('Hello World!!!')

})

mongoose.connect(`mongodb+srv://phambaoky:${process.env.MONGO_DB}@db.phbe0jv.mongodb.net/?retryWrites=true&w=majority&appName=db`)
.then(() =>{
    console.log('Connect Db success!')
})
    .catch((err) => {
        console.log(err)
    })
app.listen(port,()=> {
    console.log('server is running in port: ', + port)


})