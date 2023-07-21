import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/Card.css';

const Bunnies =() => {

    const [bunnies, setBunnies] = useState([]);
  
    useEffect(() => {
        handleProduct()
    }, [])
  
    const handleProduct = async() => {
        await axios.get("http://localhost:5050/products", {params: {category: "1"}})
        .then(res => {
            setBunnies(res.data);
            console.log(bunnies);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <section>
            <div className="container" id='bunnies'>
                <div className="row">
                    {
                        bunnies.map((bunny, index) => {
                            return (
                                <div class="p-card col-lg-3">
                                    <img src={"media/" + bunny.image} style={{width: "100%"}} />
                                    <h6 className='m-2 text-bold'>{bunny.name}</h6>
                                    <p><button className='c-btn'>سفارش</button></p>
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>

    )
}

export default Bunnies;