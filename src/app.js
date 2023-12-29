import express  from "express"
import { cartRouter } from "./routes/carts.routes.js"
import { productsRouter } from "./routes/products.routes.js"
import mongoose from "mongoose"
import {engine} from "express-handlebars"
import __dirname from "./utils.js"
import {viewRouter} from "./routes/view.routes.js"

const MONGO = "mongodb+srv://iancaceres:familia123@backend.atwvpnx.mongodb.net/SEGUNDA-PRENTREGA"
const connection = mongoose.connect(MONGO)

const PORT = 8080

const app = express()

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(express.static(`${__dirname}/public`))

app.listen(PORT,()=>{
    console.log(`El servidor funciona en el puerto ${PORT}`)
})

app.engine("handlebars",engine())
app.set("view engine", "handlebars")
app.set("views",__dirname + "/views")




app.use("/api/products",productsRouter)
app.use("/api/carts",cartRouter)
app.use("/",viewRouter)

