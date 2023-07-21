import { useState } from "react";
import axios from "axios";
import React from "react";

const AddCard = () => {

    const [name, setName] = useState("");
    const [imageFile, setImage2] = useState("");
    const [category, setCategory] = useState("");

    const saveProduct = async(e) => {
        e.preventDefault();
        console.log(imageFile);
        if (!imageFile) {
            alert("لطفا عکس محصول را انتخاب کنید");
            return false;
        } else if (!category) {
            alert("لطفا دسته بندی محصول را انتخاب کنید");
            return false;
        }
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("image", imageFile);
            formData.append("category", category);
            const res = await axios.post("http://localhost:5050/products", formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            });
            alert("اطلاعات با موفقیت اضافه شد");
        }
        catch (error) {
            console.log(error);
        }    
    }
    

    return (
        <div className="card container">
            <form onSubmit={saveProduct}>
                <div className="row m-5">
                    <label>نام محصول</label>
                    <input type="text" name="name" placeholder="نام محصول" onChange={e => setName(e.target.value)}/>
                </div>
                <select className="row m-5" onChange={e => setCategory(e.target.value)}>
                    <option value="1" >خرگوش</option>
                    <option value="2">وسایل نگهداری</option>
                    <option value="3">سگ</option>
                    <option value="4">پرنده زینتی </option>
                    <option value="5">حلزون</option>
                </select>
                <div className="row m-5">
                    <label>عکس محصول</label>
                    <input type="file" name="image" placeholder="عکس محصول" onChange= {e => setImage2(e.target.files[0])} />
                </div>
                <div className="row m-5">
                    <button type="submit" className="btn btn-success m-3">اضافه کردن محصول</button>
                </div>
            </form>
        </div>
    )
}

export default AddCard;