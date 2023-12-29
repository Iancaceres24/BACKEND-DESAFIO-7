import {Router} from "express"
import ProductManagerDB from "../dao/dbManagers/ProductManagerDB"
const router = Router()

router.get("/products",(req,res)=>{
    res.render("products")
})

router.get("/carts",async(req,res)=>{
    req
    res.render("carts")
})

export {router as viewRouter}