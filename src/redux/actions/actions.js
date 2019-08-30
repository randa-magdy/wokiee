import axios from 'axios'
import * as actionTypes from './actionsTypes'




export const setProducts=(products)=>{
    return{
        type:actionTypes.SET_PRODUCTS,
        productsData:products
    }
}

export const productsData=()=>{
    return dispatch => {
        axios.get( 'https://wokiee-e6dec.firebaseio.com/products.json' )
            .then( response => {
               dispatch(setProducts(response.data));
            } )
    };
}