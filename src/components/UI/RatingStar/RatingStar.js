import React,{Fragment,useState} from 'react'
import './RatingStar.scss'


const RatingStar = (props) => {
    const [star1,setStar1]=useState(0);
    const [star2,setStar2]=useState(0);
    const [star3,setStar3]=useState(0);
    const [star4,setStar4]=useState(0);
    const [star5,setStar5]=useState(0);
    const [hstar1,sethStar1]=useState(false);
    const [hstar2,sethStar2]=useState(false);
    const [hstar3,sethStar3]=useState(false);
    const [hstar4,sethStar4]=useState(false);
    const [hstar5,sethStar5]=useState(false);
    

    const colorStars =(rate)=>{

        switch (rate) {
            case 1:
                setStar1(1); setStar2(0); setStar3(0); setStar4(0); setStar5(0);
                break;

            case 2:
                setStar1(1); setStar2(1); setStar3(0); setStar4(0); setStar5(0);
                break;

            case 3:
                setStar1(1); setStar2(1); setStar3(1); setStar4(0); setStar5(0);
                break;

            case 4:
                setStar1(1); setStar2(1); setStar3(1); setStar4(1); setStar5(0);
                break;

            case 5:
                setStar1(1); setStar2(1); setStar3(1); setStar4(1); setStar5(1);
                break;

            default:
                setStar1(0); setStar2(0); setStar3(0); setStar4(0); setStar5(0); 
        } 
    }

    const HoverColorStars =(hrate)=>{
        switch (hrate) {
            case 1:
                sethStar1(true); sethStar2(false); sethStar3(false); sethStar4(false); sethStar5(false);
                break;

            case 2:
                sethStar1(true); sethStar2(true); sethStar3(false); sethStar4(false); sethStar5(false);
                break;

            case 3:
                sethStar1(true); sethStar2(true); sethStar3(true); sethStar4(false); sethStar5(false);
                break;

            case 4:
                sethStar1(true); sethStar2(true); sethStar3(true); sethStar4(true); sethStar5(false);
                break;

            case 5:
                sethStar1(true); sethStar2(true); sethStar3(true); sethStar4(true); sethStar5(true);
                break;

            default:
                sethStar1(false); sethStar2(false); sethStar3(false); sethStar4(false); sethStar5(false); 
        }
    }

    const unHoverColorStars=()=>{
        sethStar1(false); sethStar2(false); sethStar3(false); sethStar4(false); sethStar5(false); 
    }


    
    return (
        <Fragment>
            <span className="star" onMouseEnter={()=>HoverColorStars(1)} onMouseLeave={unHoverColorStars} onClick={()=>colorStars(1)}>{star1===1 || hstar1 ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>} </span>
            <span className="star" onMouseEnter={()=>HoverColorStars(2)} onMouseLeave={unHoverColorStars} onClick={()=>colorStars(2)}>{star2===1 || hstar2 ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>} </span>
            <span className="star" onMouseEnter={()=>HoverColorStars(3)} onMouseLeave={unHoverColorStars} onClick={()=>colorStars(3)}>{star3===1 || hstar3 ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>} </span>
            <span className="star" onMouseEnter={()=>HoverColorStars(4)} onMouseLeave={unHoverColorStars} onClick={()=>colorStars(4)}>{star4===1 || hstar4 ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>} </span>
            <span className="star" onMouseEnter={()=>HoverColorStars(5)} onMouseLeave={unHoverColorStars} onClick={()=>colorStars(5)}>{star5===1 || hstar5 ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>} </span>
        </Fragment>
    )
}

export default RatingStar
