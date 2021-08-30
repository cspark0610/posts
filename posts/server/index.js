import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import morgan from 'morgan';

const app = express();
const router = express.Router();

app.use(express.json({limit :'30mb', extended: true}));
app.use(express.urlencoded({limit :'30mb', extended: true}));
//el use CORS SIEMPRE VA PRIMERO ANTES DE APP.USE ROUTES!!!
app.use(cors());
app.use(morgan('tiny'));

//USE ROUTES

app.use('/posts',postRoutes);
app.use('/user',userRoutes);



const CONNECTION_URL = ['db connection']
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT , ()=> console.log(`server running on port ${PORT}`))
}).catch((err)=>{
    console.log(err);
})
mongoose.set('useFindAndModify', false)




