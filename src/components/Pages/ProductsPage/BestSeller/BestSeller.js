import React from 'react'
import ProductsPage from '../ProductsPage'
import * as actionsTypes from '../../../../redux/actions/actionsTypes'
import {connect} from 'react-redux' 

const BestSeller = (props) => { 
    const bItems=[{name:'Home',path:'/'}];
    const indexOfBestSeller=Object.keys(props.projectsData).indexOf('BestSeller'); 
    const itemsColors =[<button className="btn pColor" style={{backgroundColor: 'darkgoldenrod'}} onClick={()=>props.addToColors('darkgoldenrod')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'darkorange'}} onClick={()=>props.addToColors('darkorange')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'white'}} onClick={()=>props.addToColors('white')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'black'}} onClick={()=>props.addToColors('black')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'gray'}} onClick={()=>props.addToColors('gray')} ></button>]
    
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
        <div className="bestSeller">
            <ProductsPage bItems={bItems} breadcrumbActive="BestSeller" headTitle="BestSeller"  categoryProduct={indexOfBestSeller} 
            categoryProductsArray={props.projectsData.BestSeller} listItemsColors={itemsColors} listItemsTops={topItems}
            listItemsBottoms={bottomItems} listItemsAccessories={accessoriesItems} sectionName="BestSeller"
            />
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
        addToColors:(name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_COLOR_LIST , name:name}),
        addToProductType:( name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_TYPE_LIST ,  name:name})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BestSeller)
