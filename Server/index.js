import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ProductRoutes from "./Routes/ProductRoutes.js";
import AdminRoutes from './Routes/AdminRoutes.js';

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/toplearn_crud" , {
   useNewUrlParser : true,
   useUnifiedTopology : true,
})

const db = mongoose.connection;
db.on("error", (error)=> console.log(error));
db.once("open", ()=> console.log("database connected"));

app.use(cors());
app.use(express.json());
app.use(ProductRoutes);
app.use(AdminRoutes);

app.listen(5050, ()=> console.log("server is running"));