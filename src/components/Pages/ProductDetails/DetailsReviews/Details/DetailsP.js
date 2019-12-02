import React from 'react'

const DetailsP = (props) => {
    return (
        <div className="detailsP">
            <p>{props.detailsContent}</p>
             <br/>
            <ul>
                {props.detailsNotes && props.detailsNotes.map(dNote=>{
                    return <li key={Math.random()}>{dNote}</li>
                })}
            </ul>
        </div>
    )
} 

export default DetailsP 
  