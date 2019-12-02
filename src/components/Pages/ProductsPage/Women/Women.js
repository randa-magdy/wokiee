import React from 'react'
import ProductsPage from '../ProductsPage'
import * as actionsTypes from '../../../../redux/actions/actionsTypes'
import {connect} from 'react-redux' 

const Women = (props) => {
    const bItems=[{name:'Home',path:'/'}];
    const indexOfWomen=Object.keys(props.projectsData).indexOf('Women');
    const itemsColors =[<button className="btn pColor" style={{backgroundColor: 'red'}} onClick={()=>props.addToColors('red')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'green'}} onClick={()=>props.addToColors('green')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'white'}} onClick={()=>props.addToColors('white')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'black'}} onClick={()=>props.addToColors('black')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'blue'}} onClick={()=>props.addToColors('blue')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'gray'}} onClick={()=>props.addToColors('gray')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'orange'}} onClick={()=>props.addToColors('orange')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'purple'}} onClick={()=>props.addToColors('purple')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'burlywood'}} onClick={()=>props.addToColors('burlywood')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'darkgoldenrod'}} onClick={()=>props.addToColors('darkgoldenrod')} ></button>
                    ]

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
        <div className="women">
            <ProductsPage bItems={bItems} breadcrumbActive="Women" headTitle="Women" categoryProduct={indexOfWomen} 
            categoryProductsArray={props.projectsData.Women} listItemsColors={itemsColors} listItemsTops={topItems}
            listItemsBottoms={bottomItems} listItemsAccessories={accessoriesItems} sectionName='Women'
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
        addToColors:( name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_COLOR_LIST , name:name}),
        addToProductType:(name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_TYPE_LIST , name:name})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Women)
