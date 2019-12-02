import React from 'react'
import Reviews from './Reviews/Reviews'
import DetailsP from './Details/DetailsP'
import MoreInformation from './MoreInformation/MoreInformation'
import CustomTab from './CustomTab/CustomTab'
import './DetailsReviews.scss'

const DetailsReviews = (props) => {
    return (
        <div className="details_reviews">
            <div className="buttons text-center">
                <button className="btn" style={{color:props.contentDiv===1?'#007bff':'#5b5959'}} onClick={()=>props.chooseContentDiv(1)}>DETAILS</button>
                <button className="btn" style={{color:props.contentDiv===2?'#007bff':'#5b5959'}} onClick={()=>props.chooseContentDiv(2)}>MORE INFORMATION</button>
                <button className="btn" style={{color:props.contentDiv===3?'#007bff':'#5b5959'}} onClick={()=>props.chooseContentDiv(3)}>REVIEWS</button>
                <button className="btn" style={{color:props.contentDiv===4?'#007bff':'#5b5959'}} onClick={()=>props.chooseContentDiv(4)}>CUSTOM TAB</button>
            </div>
            <hr/>
            <div className="contents">
                {props.contentDiv===1 && <DetailsP detailsContent={props.detailsContent}  detailsNotes={props.detailsNotes}/>}
                {props.contentDiv===2 && <MoreInformation featuredProduct={props.featuredProduct}  material={props.material}  pattern={props.pattern}  climate={props.climate} />}
                {props.contentDiv===3 && <Reviews/>}
                {props.contentDiv===4 && <CustomTab customTab={props.customTab}/>}
            </div>
        </div>
    )
} 
    
export default DetailsReviews
