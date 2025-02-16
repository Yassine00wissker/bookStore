import express from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js";
import cors from 'cors';

const app = express()

//Middleware for parsing request body
app.use(express.json())
app.use(cors());
app.get('/', (req,res) => {
    console.log(req)
    return res.status(234).send('welcom to Mern')
});



app.use('/books',booksRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`app is listening to port ${PORT}`) 
        });
    })
    .catch((error) => {
        console.log(error)
    });
