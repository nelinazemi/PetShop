import express from "express";
import { deleteProduct, getProductById, getProducts, saveProduct, updateProduct } from "../Controllers/ProductController.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "../Client/public/media/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById); 
router.post('/products', upload.single("image"), saveProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);


export default router;