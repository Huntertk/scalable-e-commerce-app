import express from "express";
import productRouter from './routes/products/index'


const app = express();
const port = 3000;

//Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})


//Product Endpoints


app.use('/product', productRouter)


app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
    
})