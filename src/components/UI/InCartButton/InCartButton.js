import React from 'react'
import './InCartButton.scss'

const InCartButton = (props) => {
    return (
        <div className="inCartButton">
            <button className="btn btn-primary"><i className="fas fa-shopping-bag"></i> In Cart</button>
        </div>
    )
}

export default InCartButton
