import React from 'react'
import './SideSection.scss'
import {connect} from 'react-redux'


const SideSection = (props) => {

    return (
        <div className="sideSection">
            <div className="head-section">
                <h6>{props.sectionTitle}</h6> 
                <button className="btn" onClick={props.toggleSideSections}> {props.sectionToggle? <span>+</span> : <span>-</span> } </button>  
            </div>
            <hr/>
            <div className="sectionList" style={{maxHeight:props.sectionToggle? 0 : '300px'}}>
                <ul className="list-unstyled">
                    { props.listItems && props.listItems.map((lItem)=>{return <li key={Math.random()} style={{display:props.styleList}}>{lItem}</li>})}
                </ul>
            </div>
            
        </div>
    ) 
}
 

const mapStateToProps=(state)=>{
    return{ 
        openSection:state.openSection
    } 
}



export default connect(mapStateToProps)(SideSection)


