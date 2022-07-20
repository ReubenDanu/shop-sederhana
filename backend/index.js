import express from "express";
import fileUpload from "express-fileupload";
import cors from 'cors';
import productRoute from './routes/productRoute.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(function (req, res, next) {
    console.log(req.url, req.method)
    next()
});
app.use(productRoute);
app.listen(3000, () => console.log(`Server running at port 3000`));