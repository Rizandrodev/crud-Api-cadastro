import express from 'express'
import { PrismaClient } from '@prisma/client'
const Prisma=new PrismaClient()
import cors from 'cors'
const app=express()


app.use(express.json())
app.use(cors())

app.post('/user',async(req,res)=>{
    await Prisma.user.create({
        data:{
            email:req.body.email,
            age:req.body.age,
            name:req.body.name
        }
    })
    res.status(201).send(req.body)

})
app.get('/user',async(req,res)=>{
    let users=[]

    // try{
    if(req.query){
        users= await Prisma.user.findMany({
        where:{
            name:req.params.name,
            age:req.params.age,
            email:req.params.email
        }
    })  
}else{
        users= await Prisma.user.findMany()
 }
    res.status(200).send(users)
// }
// catch{
//     res.status(500).send({message:'error'})
//     console.log('DEU ERRO')
// }
})



app.delete('/user/:id',async(req,res)=>{
     await Prisma.user.delete({
        where:{
            id:req.params.id
        }
    })
    res.status(200).send({message:'user deletado com sucesso'})
})
app.listen(3000,()=>{
    console.log('Servidor a rodar')
})







