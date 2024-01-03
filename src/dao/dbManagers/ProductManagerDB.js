import productModel from "../models/products.models.js"

class ProductManagerDB {
    

    getProducts = async (options)=>{

        const products = await productModel.paginate(
            {
                
            },
            {
                options
            }
        )
            return products 
    }

    getProductByID = async (pid) =>{
        const product = await productModel.findOne({_pid:pid})
        return {
            status: "succes",
            msg: product
        }
    }
    createProduct = async (product) =>{
        
        const producto = await productModel.create(product)
        return {
            status: "succes",
            msg: producto
        }
    }


}

export default ProductManagerDB