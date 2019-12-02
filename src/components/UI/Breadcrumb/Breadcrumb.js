import React from 'react'
import './Breadcrumb.scss'
import {Link} from 'react-router-dom'

const Breadcrumb = (props) => {
const {breadcrumbItems,breadcrumbActive}=props;
    return (
        <nav className="breadcrumb-w" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    {breadcrumbItems.map(breadcrumbItem=>{
                        return <li key={Math.random()} className="breadcrumb-item"><Link to={breadcrumbItem.path}>{breadcrumbItem.name}</Link></li>
                    })}
                    <li className="breadcrumb-item active" aria-current="page">{breadcrumbActive}</li>
                </ol>
            </div>
        </nav>
    
    ) 
}

export default Breadcrumb 
