

const express = require("express");
const Cors = require("cors");
const Cards = require('./dbCards')
const mongoose = require("mongoose");






//App Config
const app = express()
const port = process.env.PORT || 8000
const connection_url = 'mongodb+srv://admin:admin@cluster0.xxyqvhf.mongodb.net/?retryWrites=true&w=majority';
//Middleware
app.use(express.json())
app.use (Cors())
//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
})



//API Endpoints
app.get("/", (req, res) => res.status (200) .send ("Tai Dep Trai vo doi"))
app.post('/dating/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
        if(err) {
        res.status (500) - send (err)
    } 
    else {
        res.status (201) .send (data)
    }
})
})
app.get ('/dating/cards', (req, res) => {
    Cards.find ((err, data) =>
{
    if (err) {
    res.status (500) .send (err)
    }   
    else {
    res.status (200) .send (data)
    }
})
})
//Listener
app.listen(port, () => console.log (`Listening on localhost: ${port}` ));
