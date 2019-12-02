import React from 'react'
import './MoreInformation.scss'

const MoreInformation = (props) => {
    return (
        <div className="more-Information">
            <div className="featuredProduct">
                <p>Featured Product	</p> <span>{props.featuredProduct}</span>
            </div>
            <hr/>
 
            <div className="material">
                <p>Material	</p> <span>{props.material}</span>
            </div>
            <hr/>

            <div className="pattern">
                <p>Pattern	</p> <span>{props.pattern}</span>
            </div>
            <hr/>

            <div className="climate">
                <p>Climate	</p> <span>{props.climate}</span>
            </div>
            <hr/>
        </div>
    )
}

export default MoreInformation
  