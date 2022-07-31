import React, {useContext} from 'react';
import './products.scss';
import {Product} from "../product/product";
import PropTypes from "prop-types";
import {productPropType} from "../../propTypes/product.type";
import {AppContext} from "../../context/app.context";
export const Products = () => {
    const {state,addToCard} = useContext(AppContext);
    const {products} = state;
    const handleAddProduct = product => {
        addToCard(product)
    }
    return (
        <div className='products'>
            {products.length > 0 ? products.map(product=> <Product key={product.id} handleAddProduct={handleAddProduct} product={product}/>) :null}

        </div>

    );
};


