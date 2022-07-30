import React from "react";
import {Products} from "../products/products";
import initialState from "../../initialState";
export const Home = ()=> {
    return (
        <Products products={initialState.products}></Products>
    );
}