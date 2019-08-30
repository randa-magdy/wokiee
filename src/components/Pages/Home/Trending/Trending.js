import React,{Component} from 'react'
import './Trending.scss'
import ItemCard from '../../../UI/ItemCard/ItemCard'
import {connect} from 'react-redux'
import * as actionsCreator from '../../../../redux/actions/actions'
import axios from 'axios'

class Trending extends Component {

    state={
        name:''
    }

    componentDidMount(){
        this.props.getProductData();
       axios.get( 'https://wokiee-e6dec.firebaseio.com/products.json' )
        .then( response => {
            console.log(response.data)
           this.setState({
               name:response.data
           })
        } )  
    }
    render(){
        return (
            <div className="trending padding text-center">
                <div className="container"> 
                    <h2>TRENDING</h2>
                    <span>TOP VIEW IN THIS WEEK</span>
                    <div className="trendingItems">
                        <ItemCard />
                        
                        <p>name :{this.props.products}</p>
                        <span>my state: {this.state.name}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getProductData:()=>dispatch(actionsCreator.setProducts())
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Trending)
