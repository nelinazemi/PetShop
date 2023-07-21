import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/Card.css';

const Stuff =() => {

    const [stuff, setStuff] = useState([]);
  
    useEffect(() => {
        handleProduct()
    }, [])
  
    const handleProduct = async() => {
        await axios.get("http://localhost:5050/products", {params: {category: "2"}})
        .then(res => {
            setStuff(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <section>
            <div className="container" id='stuff'>
                <div className="row">
                    {
                        stuff.map((item, index) => {
                            return (
                                <div class="p-card col-lg-3">
                                    <img src={"media/" + item.image} style={{width: "100%"}} />
                                    <h6 className='m-2 text-bold'>{item.name}</h6>
                                    <p><button className='c-btn'>سفارش</button></p>
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>

    )
}

export default Stuff;