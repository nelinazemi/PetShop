import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SwiperCore, {EffectCoverflow} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../Style/ProductSwiper.css';

const ProductSwiper =() => {

  const [bunnies, setBunnies] = useState([]);
  const [stuff, setStuff] = useState([]);

  useEffect(() => {
      handleProduct()
  }, [])

  const handleProduct = async() => {
      await axios.get("http://localhost:5050/products", {params: {category: "1"}})
      .then(res => {
          setBunnies(res.data);
      })
      await axios.get("http://localhost:5050/products", {params: {category: "2"}})
      .then(res => {
        setStuff(res.data);
      })
      .catch(error => {
          console.log(error);
      })
  }


  SwiperCore.use([EffectCoverflow]);


        return (
          <section className='my-5'>
          <h3 className='text-right m-3'>موجودی های خرگوش</h3>
           <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"4"}
            coverflowEffect={{
              rotate: 10,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            className="mySwiper"
          >
            <div className="container">
              <div className="row">
                      {
                      bunnies.map((bunny, index) => {
                        return (
                          <SwiperSlide>
                            <div className='row'>
                              <div class="card" style={{width: "400px", height: "450px"}}>
                                <div class="card-banner">
                                  <img src={"media/" + bunny.image} className='mt-5'  style={{height: "300px"}}/>
                                </div>
                                <div class="card_body my-3">
                                  <Link to="/productdisplay">
                                    <div class="btn btn-outline-danger mt-3">مشاهده لیست کامل</div>
                                  </Link>
                                </div> 
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      }
                      )
                    }
                </div>
              </div>
            </Swiper>


            <h3 className='text-right m-3'>وسایل نگهداری</h3>
           <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"4"}
            coverflowEffect={{
              rotate: 10,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            className="mySwiper"
          >
            <div className="container">
              <div className="row">
                      {
                      stuff.map((stuff, index) => {
                        return (
                          <SwiperSlide>
                            <div className='row'>
                              <div class="card" style={{width: "400px", height: "450px"}}>
                                <div class="card-banner">
                                  <img src={"media/" + stuff.image} className='mt-5'  style={{height: "300px"}}/>
                                </div>
                                <div class="card_body my-3">
                                  <Link to="/productdisplay">
                                    <div class="btn btn-outline-danger mt-3">مشاهده لیست کامل</div>
                                  </Link>
                                </div> 
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      }
                      )
                    }
                </div>
              </div>
            </Swiper>
          </section>

        )    
      }

export default ProductSwiper;

