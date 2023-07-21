import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const EditCard = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const {id} = useParams();
    
    useEffect(() => {
        const getProduct = async() => {
            try {
                const res = await axios.get("http://localhost:5050/products/" + id);
                setName(res.data.name);
                setImage(res.data.image);
                setCategory(res.data.category);
                console.log(res);
            }
            catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [])

    const updateCard = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5050/products/${id}`, {
                name,
                image,
                category
            })
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="card container" id="editcard">
            <form onSubmit={updateCard}>
                <div className="row m-5">
                    <label>نام محصول</label>
                    <input type="text" name="name" placeholder="نام محصول" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <select className="row m-5" onChange={e => setCategory(e.target.value)}>
                    <option value={category} >خرگوش</option>
                    <option value={category}>وسایل نگهداری</option>
                    <option value={category}>سگ</option>
                    <option value={category}>پرنده زینتی </option>
                    <option value={category}>حلزون</option>
                </select>
                <div className="row m-5">
                    <label>عکس محصول</label>
                    <input type="file" name="name" placeholder="عکس محصول" value={image} onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} />
                </div>
                <div className="row m-5">
                    <button type="submit" className="btn btn-warning m-3">ثبت تغییرات</button>
                </div>
            </form>
        </div>
    )
}

export default EditCard;