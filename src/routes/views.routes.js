import { Router } from 'express';
import ProductManager from '../dao/managers/ProductManagerMongo.js';
import { __dirname } from "../utils.js"

const pm = new ProductManager()
const viewsRouter = Router()


viewsRouter.get("/",async(req,res)=>{
    const listadeproductos=await pm.getProductsView()
    res.render("home",{listadeproductos})
})

viewsRouter.get("/realtimeProducts",(req,res)=>{
res.render("realtimeProducts")
})


export default viewsRouter