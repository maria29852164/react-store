import {productPropType} from '../../propTypes/product.type'
import React, {Fragment} from 'react';
import './product.scss'
export const Product= ({product})=> {

    return (
        <Fragment>
            <div className='card'>
                <div className="card-title">
                    <img className='card-image' src={product.image} alt=""/>
                    <h3>{product.title}</h3>
                </div>
                <div className="card-body">
                    <p>$ {product.price}</p>
                    <p>{product.description}</p>
                    <button className='btn-product'>Comprar</button>

                </div>



            </div>

        </Fragment>

    );

}

Product.propTypes= {
    product: productPropType

}