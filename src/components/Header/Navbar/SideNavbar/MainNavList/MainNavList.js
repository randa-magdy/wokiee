import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './MainNavList.scss'
import {connect} from 'react-redux'
import * as actionsTypes from '../../../../../redux/actions/actionsTypes'

class  MainNavList extends Component {
    state={
        dropDown1:false,
        dropDown2:false,
        dropDown3:false,
        dropDown4:false,
        dropDown5:false,
        dropDown6:false,
        dropDown7:false,
        dropDown8:false
    }

    toggleDropDown=(id)=>{
        const {dropDown1,dropDown2,dropDown3,dropDown4,dropDown5,dropDown6,dropDown7,dropDown8}=this.state;

        switch (id) {
            case 1:
                this.setState({dropDown1:!dropDown1});
                break;
            case 2:
                this.setState({dropDown2:!dropDown2});
                break;
            case 3:
                this.setState({dropDown3:!dropDown3});
                break;
            case 4:
                this.setState({dropDown4:!dropDown4});
                break;
            
            case 5:
                this.setState({dropDown5:!dropDown5});
                break;
            
            case 6:
                this.setState({dropDown6:!dropDown6});
                break;
            
            case 7:
                this.setState({dropDown7:!dropDown7});
                break;
            
            case 8:
                this.setState({dropDown8:!dropDown8});
                break;
            
            default:
                break ;
        }
    }
  
    render(){
        return (
            <div className="mainNavList">
                <div className="navw-list">
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT US</Link>
                            </li>
                            <li className="women">
                                <div className="flex-item" onClick={()=>this.toggleDropDown(1)}><Link to="/women">WOMEN</Link> <span>{this.state.dropDown1 ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i> }</span></div>
                                <ul className="list-unstyled" style={{height:this.state.dropDown1?'auto':'0'}}>
                                    <li>
                                        <div className="flex-item" onClick={()=>this.toggleDropDown(2)}><Link to="#">TOP</Link> <span>{this.state.dropDown2 ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i> }</span></div>
                                        <ul className="list-unstyled" style={{height:this.state.dropDown2?'auto':'0'}}>
                                            {['Jackets','Blouses','Hoodie','T-shirts','Sweater','Sweatshirt'].map(itemT=>{
                                                    return <li  key={itemT} onClick={()=>this.props.addToProductType(itemT)}><Link to="/women">{itemT}</Link></li>
                                                })}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="flex-item" onClick={()=>this.toggleDropDown(3)}><Link to="#">BOTTOMS</Link> <span>{this.state.dropDown3 ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i> }</span></div>
                                        <ul className="list-unstyled" style={{height:this.state.dropDown3?'auto':'0'}}>
                                         {['Trouser','Jeans','Legging','Short'].map(itemB=>{
                                                    return <li key={itemB} onClick={()=>this.props.addToProductType(itemB)} ><Link to="/women">{itemB}</Link></li>
                                                })}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="flex-item" onClick={()=>this.toggleDropDown(4)}><Link to="#">ACCESSORIES</Link> <span>{this.state.dropDown4 ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i> }</span></div>
                                        <ul className="list-unstyled" style={{height:this.state.dropDown4?'auto':'0'}}>
                                        {['Hats','Scarf','Belt','Bag','Shoes','Sunglasses'].map(itemA=>{
                                                    return <li key={itemA} onClick={()=>this.props.addToProductType(itemA)} ><Link to="/women">{itemA}</Link></li>
                                                })}
                                        </ul>
                                    </li> 
                                </ul>
                            </li>
                            <li className="men">
                                <div className="flex-item" onClick={()=>this.toggleDropDown(5)}><Link to="/men">MEN</Link> <span>{this.state.dropDown5 ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i> }</span></div>
                                <ul className="list-unstyled" style={{height:this.state.dropDown5?'auto':'0'}}>
                                    <li>
                                        <div className="flex-item" onClick={()=>this.toggleDropDown(6)}><Link to="#">TOP</Link> <span>{this.state.dropDown6 ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i> }</span></div>
                                        <ul className="list-unstyled" style={{height:this.state.dropDown6?'auto':'0'}}>
                                            {['Jacket','T-shirts','Hoodie','Sweater','Sweatshirt'].map(itemT=>{
                                                    return <li key={itemT} onClick={()=>this.props.addToProductType(itemT)}><Link to="/men">{itemT}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="flex-item" onClick={()=>this.toggleDropDown(7)}><Link to="#">BOTTOMS</Link> <span>{this.state.dropDown7 ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i> }</span></div>
                                        <ul className="list-unstyled" style={{height:this.state.dropDown7?'auto':'0'}}>
                                             {['Trouser','Jeans','Short'].map(itemB=>{
                                                return <li key={itemB} onClick={()=>this.props.addToProductType(itemB)}><Link to="/men">{itemB}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="flex-item" onClick={()=>this.toggleDropDown(8)}><Link to="#">ACCESSORIES</Link> <span>{this.state.dropDown8 ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i> }</span></div>
                                        <ul className="list-unstyled" style={{height:this.state.dropDown8?'auto':'0'}}>
                                             {['Hats','Scarf','Belt','Bag','Shoes','Sunglasses'].map(itemA=>{
                                                return <li key={itemA} onClick={()=>this.props.addToProductType(itemA)}><Link to="/men">{itemA}</Link></li>
                                            })}
                                        </ul>
                                    </li> 
                                </ul>
                            </li>
                            <li>
                                <Link to="/services">SERVICES</Link>
                            </li>
                            <li>
                                <Link to="#">BLOG</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/contact">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        addToProductType:(name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_TYPE_LIST , name:name})
    }
}

export default connect(null,mapDispatchToProps) (MainNavList)
