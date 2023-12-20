import express from 'express'
import cors from 'cors';
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from 'express-fileupload';

const PORT = 5001;

const app = express()

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router);

async function startApp() {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
