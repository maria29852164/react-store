import React from 'react';
import './products.scss';
import {Product} from "../product/product";
import PropTypes from "prop-types";
import {productPropType} from "../../propTypes/product.type";
export const Products = ({products}) => {
    return (
        <div className='products'>
            {products.length > 0 ? products.map(product=> <Product key={product.id} product={product}/>) :null}

        </div>

    );
};


