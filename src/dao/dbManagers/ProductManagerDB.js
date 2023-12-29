import productModel from "../models/products.models.js"

class ProductManagerDB {

    getProducts = async (options)=>{

        const products = await productModel.paginate(
            {
                //filter
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

}

export default ProductManagerDB