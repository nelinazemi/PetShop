import React, { Component } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { storeProducts } from './ProductsData';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ListItems = []
const Items = storeProducts.forEach((item) => { ListItems.push(
        
        <SwiperSlide>
          <div className='row'>
            <div class="card" style={{width: "400px", height: "400px"}}>
              <div class="card-banner">
                <img src={item.img} className='mt-5' style={{width: "200px", height: "250px"}}/>
              </div>
              <div class="card_body my-3">
                <Link to="/productlist">
                  <div class="btn btn-outline-danger mt-3">مشاهده لیست کامل</div>
                </Link>
              </div> 
            </div>
          </div>
        </SwiperSlide>
        
        );
    }
);

export default class Customers extends Component {
  render () {
    return (
      <section id='Customers' className='mt-5'>
        <div className='my-3 d-flex'>
          <h2 className='ms-auto mx-5'>عکس های رضایت مشتریان</h2>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {ListItems}
        </Swiper>
      </section>
    );
  };
}
