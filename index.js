const express=require("express")
const app = express()//top level middleware
require('dotenv').config()

app.use(express.json());//middleware
const adminRouter = require('./Router/adminRoutes');
const userRouter = require('./Router/userRoutes');

const {ConnectDB}=require('./utils/dbConnector');
ConnectDB();
app.use('/api/admin',adminRouter);
app.use('/api/user',userRouter);//middleware
app.listen(process.env.PORT,()=>{
    console.log(`App is running 
        ${process.env.DEV_URL}:${process.env.PORT}`)
})