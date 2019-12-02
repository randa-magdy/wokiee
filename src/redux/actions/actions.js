import axios from 'axios'
import * as actionTypes from './actionsTypes'






export const setProducts=()=>{
    return dispatch=>{
        axios.get( 'https://wokiee-e6dec.firebaseio.com/.json' )
        .then( response =>{
            return dispatch({
                type:actionTypes.SET_PRODUCTS,
                productsData:response.data
            });
        })
    }
}
   