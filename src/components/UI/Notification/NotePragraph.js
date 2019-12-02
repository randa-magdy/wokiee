import React from 'react'
import './NotePragraph.scss'

const NotePragraph = (props) => {
    return (
        <div className="notePragraph text-center">
            <i className="fas fa-exclamation-triangle"></i>
                {props.children}
        </div>
    )
}

export default NotePragraph
