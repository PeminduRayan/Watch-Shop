import dotenv  from 'dotenv';
import express from 'express';
import mongoose from 'mongoose'
dotenv.config();

const app = express();
const port = 4000;
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to DB");

})
.catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}! `));