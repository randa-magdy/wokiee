import React from 'react'
import ProductsPage from '../ProductsPage'
import * as actionsTypes from '../../../../redux/actions/actionsTypes'
import {connect} from 'react-redux' 

const Men = (props) => {
    const bItems=[{name:'Home',path:'/'}];
    const indexOfMen=Object.keys(props.projectsData).indexOf('Men'); 
    const itemsColors =[<button className="btn pColor" style={{backgroundColor: 'red'}} onClick={()=>props.addToColors('red')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'green'}} onClick={()=>props.addToColors('green')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'beige'}} onClick={()=>props.addToColors('beige')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'black'}} onClick={()=>props.addToColors('black')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'blue'}} onClick={()=>props.addToColors('blue')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'gray'}} onClick={()=>props.addToColors('gray')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'cornflowerblue'}} onClick={()=>props.addToColors('cornflowerblue')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'purple'}} onClick={()=>props.addToColors('purple')} ></button>,
                        <button className="btn pColor" style={{backgroundColor: 'skyblue'}} onClick={()=>props.addToColors('skyblue')} ></button>
                    ]
     const topItems=[<button className="btn" onClick={()=>props.addToProductType('T-shirt')}>T-shirt</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Hoodie')}>Hoodie</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Jacket')}>Jacket</button>,
                    <button className="btn" onClick={()=>props.addToProductType( 'Sweater')}>Sweater</button>,
                    <button className="btn" onClick={()=>props.addToProductType('Sweatshirt')}>Sweatshirt</button>]

    const bottomItems=[<button className="btn" onClick={()=>props.addToProductType('Trouser')}>Trouser</button>,
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
        <div className="men">
            <ProductsPage bItems={bItems} breadcrumbActive="Men" headTitle="Men"  categoryProduct={indexOfMen} sectionName='Men'
            categoryProductsArray={props.projectsData.Men} listItemsColors={itemsColors} listItemsTops={topItems}
            listItemsBottoms={bottomItems} listItemsAccessories={accessoriesItems} 
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
        addToProductType:(name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_TYPE_LIST  , name:name})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Men)
