import * as actionTypes from '../actions/actionsTypes'
import firebase from 'firebase/app'
import {firebaseConfig} from '../../components/Config/fbConfig'


const initialState={
    trendProducts:[],
    bestsellerProducts:[],
    openSidenav:false,
    openModal:false,
    indexP:1,
    projectsData:[],
    category:0,
    sectionProducts:'props.projectsData.Women',
    numberOfColumns:'col-md-4 col-sm-6',
    sortType:'name',
    sortOrder:'ascending',
    viewDetailsCard:false,
    compareProductsList:[],
    includeSkuCompare:[],
    wishProductsList:[],
    includeSkuWish:[],
    cartProductsList:[],
    includeSkuCart:[],
    quantityProduct:1,
    totalPriceProduct:0,
    viewCartCard:false,
    checkdInCard:false,
    calcShipping:0,
    openMyAccountList:false,
    openMyCartSumm:false,
    openSideFilter:false,
    openDropDownRightNav1:false,
    openDropDownRightNav2:false,
    openSideNavB1:false,
    openSideNavB2:false,
    openSideNavB3:false,
    openSideNavB4:false,
    productTypeNameList:[],
    colorsNameList:[],
    pricseList:[],
    openSection:true,
    itemId:0,
    sectionNameId:'',
    itemData:null,
    skuViewC:'',
    imageViewC:null,
    titleViewC:''
    
}
 
 
const reducer =(state=initialState,action)=>{

    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return{
                ...state,
                projectsData:action.productsData
            }
        
        case actionTypes.CLOSE_SIDENAVBAR:
            return{
                ...state,
                openSideNavB1:false,
                openSideNavB2:false,
                openSideNavB3:false,
                openSideNavB4:false,
                openModal:false 
            }
        case actionTypes.OPEN_SIDENAVBAR:
            return{
                ...state,
                openSidenav:true,
                openModal:true,
                openSideNavB1:true,
                openSideNavB2:false,
                openSideNavB3:false,
                openMyAccountList:false,
                openSideFilter:false,
                openSideNavB4:false,
                openMyCartSumm:false
            }

        case actionTypes.OPEN_CART_SUMMERY_SIDENAV:
            return{
                ...state,
                openMyAccountList:false,
                openDropDownRightNav1:!state.openDropDownRightNav1,
                openDropDownRightNav2:false,
                openSidenav:false,
                openSideNavB1:false,
                openSideNavB3:false,
                openSideFilter:false,
                openSideNavB4:false,
                openMyCartSumm:true,
                openSideNavB2:true,
                openModal:true
            }

        case actionTypes.OPEN_MYACCOUNT_SIDENAV:
            return{
                ...state,  
                openMyCartSumm:false,
                openDropDownRightNav2:!state.openDropDownRightNav2,
                openDropDownRightNav1:false,
                openSidenav:false,
                openSideNavB1:false,
                openSideNavB2:false,
                openSideFilter:false,
                openSideNavB4:false,
                openMyAccountList:true,
                openSideNavB3:true,
                openModal:true
            }

        case actionTypes.OPEN_FILTERITEMS_SIDENAV:
            return{
                ...state,  
                openMyCartSumm:false,
                openSidenav:false,
                openSideNavB1:false,
                openSideNavB2:false,
                openSideNavB3:false,
                openSideFilter:true,
                openSideNavB4:true,
                openModal:true
            }

        case actionTypes.OPEN_CART_SUMMERY:
            return{
                ...state,
                openMyAccountList:false,
                openDropDownRightNav1:!state.openDropDownRightNav1,
                openDropDownRightNav2:false,
                openMyCartSumm:true
            }

        case actionTypes.OPEN_MYACCOUNT_DROPDOWN:
            return{
                ...state,  
                openMyCartSumm:false,
                openDropDownRightNav2:!state.openDropDownRightNav2,
                openDropDownRightNav1:false,
                openMyAccountList:true
            }

        case actionTypes.CLOSE_DROPDOWN_NAV:
            return{
                ...state,
                openDropDownRightNav1:false,
                openDropDownRightNav2:false,
            }

        case actionTypes.SEND_DETAILS_DATA:
            return{
                ...state,
                indexP:action.index,
                category:action.category,
                sectionProducts:action.section,
                quantityProduct:action.quantity,
                totalPriceProduct:action.totalPrice
            }
        case actionTypes.VIEW_PDETAILS_CARD:
            return{
                ...state, 
                viewDetailsCard:true,
                openModal:true 
            }
        case actionTypes.CLOSE:
                return{
                    ...state,
                    viewDetailsCard:false,
                    viewCartCard:false,
                    openModal:false 
                }

        case actionTypes.SEND_ITEM_DATA:
            return{
                ...state,
                itemData:action.itemDataP,
                itemId:action.itemId,
                sectionNameId:action.sectionName,
                quantityProduct:action.itemDataP.quantity,
                totalPriceProduct:action.itemDataP.price,
                imageViewC:action.itemDataP.image1,
                titleViewC:action.itemDataP.title,
                skuViewC:action.itemDataP.sku
            }

        case actionTypes.INCREASE_QUANTITY_ITEM:
                let increaseItem=state.quantityProduct+1 ;
                let icreaseTotalPrice= increaseItem * state.itemData.price ;
               /* let userRef =firebase.database().ref();
                let quantityPI=  userRef.child(state.sectionNameId).child(state.itemId).update({quantity:state.itemData.quantity}).then().catch();
                let totalPricePI = userRef.child(state.sectionNameId).child(state.itemId).update({totalPrice:icreaseTotalPrice}).then().catch();
                */
                return{
                ...state, 
                quantityProduct:increaseItem,
                totalPriceProduct:icreaseTotalPrice
            }
        case actionTypes.DECREASE_QUANTITY_ITEM:
                
                let decreaseItem=state.quantityProduct-1 ;
                let priceD = decreaseItem * state.itemData.price;

               /* let quantityPD=firebase.database().ref().child(Object.keys(state.projectsData)[state.category]).child(state.indexP).update({quantity:quantityD<1 ? quantityD=1 :quantityD}).then().catch();
                let totalPricePD = firebase.database().ref().child(Object.keys(state.projectsData)[state.category]).child(state.indexP).update({totalPrice:quantityD<1 ? priceD:quantityD * priceD}).then().catch();
                */
                if(decreaseItem<1){decreaseItem=1}
            return{
                ...state,
                quantityProduct:decreaseItem,
                totalPriceProduct:priceD
            }
        
        case actionTypes.UPDATE_INPUT:
            let inputValueQuantity =action.event.target.value;
            let totalPrice = inputValueQuantity*action.price;
            if(inputValueQuantity<1 || inputValueQuantity==="NaN"){
                inputValueQuantity=1
            }
            return{
                ...state,
                quantityProduct:Number(inputValueQuantity),
                totalPriceProduct:totalPrice
            }

        case actionTypes.SET_GRID_SYSTEM:
        return{
            ...state,
            numberOfColumns:action.data
        }

        case actionTypes.SORT_PRODUCTS_ASCENDING:
            return{
                ...state,
                sortOrder:'ascending'
            }

        case actionTypes.SORT_PRODUCTS_DESCENDING:
            return{
                ...state,
                sortOrder:'descending'
            }

        case actionTypes.SORT_BY_NAME:
            return{
                ...state,
                sortType:'name'
            }

        case actionTypes.SORT_BY_PRICE:
            return{  
                ...state,
                sortType:'price' 
            }

        case actionTypes.ADD_TO_COMPARE:
            const compareList=state.compareProductsList.concat({image:action.image, price:action.price , title:action.title , sku:action.sku , content:action.content,quantity:action.quantity,totalPrice:action.totalPrice});
            const containSkuCompare=state.includeSkuCompare.concat(action.sku);
            
            return{ 
                ...state,
                compareProductsList:compareList,
                includeSkuCompare:containSkuCompare
            }

        case actionTypes.REMOVE_ITEM:
            const removeItemfromCompareList=state.compareProductsList.filter((_,id)=>{return id !== action.index})
            const removeSku=state.includeSkuCompare.filter((_,id)=>{return id !== action.index})
            return{ 
                ...state,
                compareProductsList:removeItemfromCompareList,
                includeSkuCompare:removeSku
            }

        case actionTypes.ADD_TO_WISHLIST:
            const wishList=state.wishProductsList.concat({image:action.image, price:action.price , title:action.title , sku:action.sku , sizes:action.sizes,colors:action.colors});
            const containSkuWish=state.includeSkuWish.concat(action.sku)
            return{ 
                ...state,
                wishProductsList:wishList,
                includeSkuWish:containSkuWish
            }

        case actionTypes.REMOVE_ITEM_FROM_WISHLIST:
            const removeItemfromWishList=state.wishProductsList.filter((_,id)=>{return id !== action.index})
            const removeSkuWish=state.includeSkuWish.filter((_,id)=>{return id !== action.index})
            return{ 
                ...state,
                wishProductsList:removeItemfromWishList,
                includeSkuWish:removeSkuWish
            }
        
            
        case actionTypes.ADD_TO_CART:
           /* const cartList= state.cartProductsList.concat({image:action.image, price:action.price,totalPrice:action.totalPrice , quantity:action.quantity, title:action.title , sku:action.sku});
            const containSkuCart=state.includeSkuCart.concat(action.sku);
            */
           let cartList,containSkuCart;
           
            if(state.includeSkuCart.includes(action.sku)){
                cartList=state.cartProductsList.filter((cp)=>{ return cp.sku!==action.sku}).concat({image:action.image, price:action.price,totalPrice:action.totalPrice , quantity:action.quantity, title:action.title , sku:action.sku});
                containSkuCart=state.includeSkuCart.filter((sk)=>{ return sk!==action.sku}).concat(action.sku);
            }else{
                cartList= state.cartProductsList.concat({image:action.image, price:action.price,totalPrice:action.totalPrice , quantity:action.quantity, title:action.title , sku:action.sku});
                containSkuCart=state.includeSkuCart.concat(action.sku); 
            }

            return{ 
                ...state,
                cartProductsList:cartList,
                includeSkuCart:containSkuCart,
                openModal:true ,
                viewCartCard:true,
                viewDetailsCard:false,
                skuViewC:action.sku,
                imageViewC:action.image,
                titleViewC:action.title
            }

        case actionTypes.REMOVE_ITEM_FROM_CART:
            const removeFromCartList = state.cartProductsList.filter((cp)=>{ return cp.sku!==action.sku});
            const removeSkuInCart = state.includeSkuCart.filter((sk)=>{ return sk!==action.sku});
            
            return {
                ...state,
                cartProductsList:removeFromCartList,
                includeSkuCart:removeSkuInCart,
               
            }

        case actionTypes.REMOVE_ALL_ITEMS_CART:
            const clearCartList = state.cartProductsList.splice();
            const clearSkuInCart = state.includeSkuCart.splice();
            
            return {
                ...state,
                cartProductsList:clearCartList,
                includeSkuCart:clearSkuInCart
               
            }

        case actionTypes.CLICK_CHECK_CARD:
            return{
                ...state,
                checkdInCard:!state.checkdInCard
            }

        case actionTypes.CALCULATE_SHIPPING:
            return{
                ...state,
                calcShipping:20
            }

        case actionTypes.ADD_TO_PRODUCT_TYPE_LIST:
                let productTypeNameArray;
                if(state.productTypeNameList.includes(action.name)===false){
                    productTypeNameArray=state.productTypeNameList.concat(action.name);
                }else{
                    productTypeNameArray=state.productTypeNameList;
                }
                
            return{
                ...state,
                productTypeNameList:productTypeNameArray
            }

        case actionTypes.ADD_TO_PRODUCT_COLOR_LIST:
                let colorsNameArray;
                if(state.colorsNameList.includes(action.name)===false){
                    colorsNameArray=state.colorsNameList.concat(action.name);
                }else{
                    colorsNameArray=state.colorsNameList;
                }
            return{
                ...state,
                colorsNameList:colorsNameArray
            }
        
        case actionTypes.ADD_TO_PRODUCT_PRICE_LIST:
                let pricesArray;
                if(state.pricseList.some(minVal=>minVal.min===action.min)===false){
                    pricesArray=state.pricseList.concat({min:action.min,max:action.max});
                }else{
                    pricesArray=state.pricseList;
                }
            return{
                ...state,
                pricseList:pricesArray
            }
        
        case actionTypes.REMOVE_SHOPPING_ITEM_TYPE:
            const productTypeShopping = state.productTypeNameList.filter((_,index)=>{return index !== action.index});

            return{
                ...state,
                productTypeNameList:productTypeShopping,
            }
        
        case actionTypes.REMOVE_SHOPPING_ITEM_COLOR:
            const productColorShopping = state.colorsNameList.filter((_,index)=>{return index !== action.index});

            return{
                ...state,
                colorsNameList:productColorShopping
            }

        case actionTypes.REMOVE_SHOPPING_ITEM_PRICE:
            const productPriceShopping = state.pricseList.filter((_,index)=>{return index !== action.index});

            return{
                ...state,
                pricseList:productPriceShopping
            }

        case actionTypes.CLEAR_SHOPPING_ITEMS:
            const pTypeShopping = state.productTypeNameList.splice();
            const pColorShopping = state.colorsNameList.splice();
            const pPriceShopping = state.pricseList.splice();

            return{
                ...state,
                productTypeNameList:pTypeShopping,
                colorsNameList:pColorShopping,
                pricseList:pPriceShopping
            }
        
        default:
            return state;
    }
    
}
 
export default reducer;  