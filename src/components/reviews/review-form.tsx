import React, {useState} from "react";
import CustomCheckbox from "../custom-checkbox";
import star from "./star.svg";

export default function ReviewForm() {

    const [stars, setStarts] = useState<any>(0)

    return <div className="review__form">

        <div className="review__form-wrapper">

            <textarea placeholder='Your Review*' name="" id="" cols={10} rows={3} className="review__form-item input"/>

            <label className="review__form-item">
                <input placeholder='Enter your name*' type="text" className="input"/>
            </label>

            <label className="review__form-item">
                <input placeholder='Enter your Email*' type="text" className="input"/>
            </label>

        </div>

        <CustomCheckbox label={'Save my name, email, and website in this browser for the next time I comment'} onChange={(value) => console.log(value)} />

        <div className="review__form-stars-wrapper">
            <span>Your Rating*</span>

            <div className="review__form-stars">
                <svg onClick={() => setStarts(1)} className={stars >= 1 ? "review__icon active" : "review__icon"}>
                    <use xlinkHref={star + '#star'}></use>
                </svg>
                <svg onClick={() => setStarts(2)} className={stars >= 2 ? "review__icon active" : "review__icon"}>
                    <use xlinkHref={star + '#star'}></use>
                </svg>
                <svg onClick={() => setStarts(3)} className={stars >= 3 ? "review__icon active" : "review__icon"}>
                    <use xlinkHref={star + '#star'}></use>
                </svg>
                <svg onClick={() => setStarts(4)} className={stars >= 4 ? "review__icon active" : "review__icon"}>
                    <use xlinkHref={star + '#star'}></use>
                </svg>
                <svg onClick={() => setStarts(5)} className={stars >= 5 ? "review__icon active" : "review__icon"}>
                    <use xlinkHref={star + '#star'}></use>
                </svg>
            </div>
        </div>

        <button className="review__form-button">Submit</button>
    </div>
}