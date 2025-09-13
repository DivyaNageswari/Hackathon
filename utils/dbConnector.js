const {PrismaClient} = require('@prisma/client')
const prisma=new PrismaClient()
const ConnectDB=async()=>{
    try{
     await prisma.$connect();
    
        console.log("DB connected")
    //connect is a attibuted function
    }
    catch(err)
    {
        console.log(err);
    }

}
module.exports={prisma,ConnectDB}