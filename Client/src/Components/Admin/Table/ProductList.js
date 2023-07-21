import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../Style/Card.css';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        handleProduct()
    }, [])

    const handleProduct = async() => {
        //category inja moshakhas mishe
        //az samte front bayad moshakhas beshe
        await axios.get("http://localhost:5050/products")
        .then(res => {
            setProducts(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const deleteProduct = async(id) => {
        try {
            await axios.delete(`http://localhost:5050/products/${id}`);
            console.log(id);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                {
                    products.map((product, index) => {
                        return (
                            <div class="d-card ">
                                <img src={"media/" + product.image} style={{width: "100%"}} />
                                <h6 className='m-2 text-bold'>{product.name}</h6>
                                <a href= {`#editcard/${product._id}`} className='btn btn-warning'>ویرایش</a>
                                <p><button onClick={() => deleteProduct()} className='btn btn-danger'>حذف</button></p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default ProductList;