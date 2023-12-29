import {Router} from "express"
import ProductManagerDB from "../dao/dbManagers/ProductManagerDB.js"

const router = Router() 
const productManagerDB = new ProductManagerDB()

router.get("/", async(req,res)=>{

    try {
        const{limit,page,sort,category,price} = req.query
        const options =  {
            limit: limit ?? 10,
            page: page ?? 1,
            sort: {price: sort == "asc"? 1: -1},
            lean: true   
        }
        const productos = await productManagerDB.getProducts(options)

        if(productos.hasPrevPage){
            productos.prevLink = "---LINK---"}
        if(productos.hasNextPage){
                productos.nextLink = "---LINK---"
            }
        res.send({
            status:"succes",
            productos: productos    
        })
        
    } catch (error) {
        console.log(error)
    }   

})

router.get("/:pid", async (req, res) => {
    const productos = await productManagerFile.getProducts()
    const pid = req.params.pid;
    const produ = productos.find(pro =>{return pro.id == pid})

    if (!produ) {
        return res.json({
            error: "Producto no encontrado"
        });
    } else {
        res.json({
            producto: produ
        });
    }
});

router.post("/", async(req,res)=>{
    const producto = req.body
    const productos = await productManagerFile.crearProducto(producto)
    if(!producto.title||!producto.description||!producto.code||!producto.price||!producto.stock||!producto.category){
        res.send({
            status:"error",
            msg: "Faltan campos"
        })
    }else{
    res.send({
        status:"succes",
        msg: "Producto creado",
        productos: producto
    })}
})

router.put("/:pid", async(req,res)=>{
    const productos = await productManagerFile.getProducts()   
    const pid = req.params.pid
    
    const { campo, nuevoValor } = req.body;
    if(campo === "id"){
        res.send({
            status:"error",
            msg: "No se puede modificar el id",
    })}else{
    const index = productos.findIndex(producto => producto.id == pid);
    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    productos[index][campo] = nuevoValor;

    await productManagerFile.updateProduct(pid, { [campo]: nuevoValor });
    res.send({
        status:"succes",
        msg: "Producto actualizado correctamente",
        producto: productos[index]
    })
}})

router.delete("/:pid", async (req, res) => {
    
        const productos = await productManagerFile.getProducts();
        const pid = req.params.pid;
        
        const index = productos.findIndex(producto => producto.id == pid);

        if (index === -1) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        const productoEliminado = productos.splice(index, 1)[0];

        await productManagerFile.updateProductList(productos);

        res.send({
            status: "Correcto",
            eliminada: `Producto eliminado`,
            producto: productoEliminado,
            productos: productos
        });
    
})

export {router as productsRouter}