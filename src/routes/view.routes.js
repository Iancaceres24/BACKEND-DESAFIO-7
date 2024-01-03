import {Router} from "express"
import ProductManagerDB from "../dao/dbManagers/ProductManagerDB.js"
import productModel from "../dao/models/products.models.js"

const router = Router()
const productManagerDB = new ProductManagerDB()


    router.get("/products", async(req,res)=>{
    const products = await productModel.find().lean()
    res.render("products",{products})
})

router.get("/carts",async(req,res)=>{
    req
    res.render("carts")
})

export {router as viewRouter}