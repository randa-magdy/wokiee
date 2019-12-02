import React from 'react'
import {Formik,Field} from 'formik'
import RatingStar from '../../../../UI/RatingStar/RatingStar'
import './Reviews.scss'


const Reviews = (props) => {
    const onSubmit=(values)=>{console.log(values)}

    const form=(props)=>{
        return <form onSubmit={props.handleSubmit}>
            <fieldset disabled>
                <label><h6>NICKNAME*</h6></label>
                <Field name="nickname" className="form-control"/>

                <label><h6>SUMMARY*</h6></label> 
                <Field name="summary" className="form-control" />

                <label><h6>REVIEW*</h6></label>
                <Field name="review" className="form-control" component="textarea"/>

                <button class="btn btn-primary">SUBMIT REVIEW</button>
            </fieldset>
        </form>
    }
    return (
        <div className="reviews" id="reviews-p">
            <h6>WRITE YOUR OWN REVIEW</h6>
            <p>You're reviewing : <span className="sp-title">Linen-Blend Cardigan </span></p>
            <div className="rating">
                <h6>YOUR RATING</h6>
                <div className="rateStars">
                    <p>Rating: <RatingStar/></p>
                    <p>Price: <RatingStar/></p>
                    <p>Quality: <RatingStar/></p>
                </div>
            </div>
            <div className="formReview">
                <Formik initialValues={{nickname:'', summary:'',review:''}} onSubmit={onSubmit} render={form}/>
            </div>
            
            
        </div>
    )
}

export default Reviews
