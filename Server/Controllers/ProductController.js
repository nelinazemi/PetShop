import Product from "../Models/ProductModel.js";

export const getProducts = async(req, res) => {
    try {
        let products;
        if (req.query.category) {
            products = await Product.find({category: req.query.category});
        } else {
            products = await Product.find();
        }
        res.json(products);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const saveProduct = async(req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.file.filename,
        category: req.body.category
    });
    try {
        const insertedproduct = await product.save();
        res.json(insertedproduct);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const updateProduct = async(req, res) => {
    try {
        const updateproduct = await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json("آیتم موردنظر ویرایش شد");
    }
    catch (error) {
        res.status(200).json({message: error.message});
    }
}


export const deleteProduct = async(req, res) => {
    try {
        const deleteproduct = await Product.deleteOne({_id: req.params.id});
        res.status(200).json("آیتم موردنظر حذف شد");
    }
    catch {
        res.status(200).json({message: error.message});
    }
}

