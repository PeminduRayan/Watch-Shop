import dotenv  from 'dotenv';
import express from 'express';
import mongoose from 'mongoose'
dotenv.config();
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'

const app = express();
app.use(express.json());

const port = 4000;
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to DB");

})
.catch((err) => {
    console.log(err)
})

app.listen(port, () => console.log(`Example app listening on port ${port}! `));


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);


