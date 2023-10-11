import dotenv  from 'dotenv';
import express from 'express';
import mongoose from 'mongoose'
dotenv.config();
import userRouter from './routes/user.route.js';

const app = express();
const port = 4000;

app.listen(port, () => console.log(`Example app listening on port ${port}! `));


app.use('/api/user',userRouter);

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to DB");

})
.catch((err) => {
    console.log(err)
})

