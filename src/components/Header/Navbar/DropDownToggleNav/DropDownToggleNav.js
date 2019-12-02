import React from 'react'
import './DropDownToggleNav.scss'

const DropDownToggleNav = (props) => {
    return (
        <div className="dropDownToggleNav" style={{visibility:props.openDropDownRightNav1 || props.openDropDownRightNav2? 'visible' :'hidden' }}>
            {props.children}
        </div>
    )
}
 
export default DropDownToggleNav
