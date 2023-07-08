import React, { Component } from 'react'
import {ProductConsumer} from './context';

export default class Product extends Component {
    render() {
        const {id, title, img} = this.props.product;
        return (
            <div className="col-md-3 col-sm-5 col-8 mx-auto my-3">
               <div className="card">
                    <ProductConsumer>
                        {value => (
                                    <div className="img-container" onClick={() => value.handleDetail(id)}>
                                        <img src={img} alt="product" className="card-img-top" />
                                    </div>
                                    )}
                    </ProductConsumer>
                    <div className="card-footer d-flex flex-column">
                        <p className="align-self-center mb-2">
                            {title}
                        </p>
                    </div>
                    <div className='btn btn-outline-danger mx-5 mb-2'>سفارش</div>
               </div>
            </div>
        );
    }
}


