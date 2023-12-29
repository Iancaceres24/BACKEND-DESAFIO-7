import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const productSchema = new mongoose.Schema({

    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    code:{
        type: Number,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    stock:{
        type: Number,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    status: Boolean,

    thumbnails:{
        type: Array,
        require: true
    },
    
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model("products",productSchema)

export default productModel