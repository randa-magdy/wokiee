import * as actionTypes from '../actions/actionsTypes'


const initialState={
    products:''
}


const reducer =(state=initialState,action)=>{

    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return{
                ...state,
                products:action.productsData
            }
            
        default:
            return state;
    }
    
}
 
console.log(initialState)
export default reducer;