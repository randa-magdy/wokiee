import React from 'react'
import ProductsPage from '../ProductsPage'
import * as actionsTypes from '../../../../redux/actions/actionsTypes'
import {connect} from 'react-redux' 

const Trending = (props) => {
    const bItems=[{name:'Home',path:'/'}];
    const indexOfTrending=Object.keys(props.projectsData).indexOf('Trending'); 
    const itemsColors =[<button className="btn pColor" style={{backgroundColor: 'darkgoldenrod'}} onClick={()=>props.addToColors('darkgoldenrod')}></button>,
                        <button className="btn pColor" style={{backgroundColor: 'white'}} onClick={()=>props.addToColors('white')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'burlywood'}} onClick={()=>props.addToColors('burlywood')}></button>,
                        <button className="btn pColor" style={{backgroundColor: 'black'}} onClick={()=>props.addToColors('black')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'cornflowerblue'}} onClick={()=>props.addToColors('cornflowerblue')} ></button>];
    
    const topItems=[<button className="btn" onClick={()=>props.addToProductType('T-shirt')}>T-shirt</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Blouse')}>Blouse</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Hoodie')}>Hoodie</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Jacket')}>Jacket</button>,
                    <button className="btn" onClick={()=>props.addToProductType( 'Sweater')}>Sweater</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Sweatshirt')}>Sweatshirt</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Vest')}>Vest</button>]

    const bottomItems=[<button className="btn" onClick={()=>props.addToProductType('Trouser')}>Trouser</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Legging')}>Legging</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Jeans')}>Jeans</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Short')}>Short</button>]

    const accessoriesItems=[<button className="btn" onClick={()=>props.addToProductType( 'Scarf')}>Scarf</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Bag')}>Bag</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Hats')}>Hats</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Belt')}>Belt</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Shoes')}>Shoes</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Sunglasses')}>Sunglasses</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Jewellery')}>Jewellery</button>]
                    

    return (
        <div className="trending">
            <ProductsPage bItems={bItems} breadcrumbActive="Trending" headTitle="Trending"  categoryProduct={indexOfTrending} 
            categoryProductsArray={props.projectsData.Trending} listItemsColors={itemsColors} listItemsTops={topItems} 
            listItemsBottoms={bottomItems} listItemsAccessories={accessoriesItems} sectionName="Trending" />
        </div>
    )
} 

const mapStateToProps=(state)=>{
    return{ 
        projectsData:state.projectsData
    } 
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToColors:( name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_COLOR_LIST ,  name:name}),
        addToProductType:(name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_TYPE_LIST , name:name})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Trending)
