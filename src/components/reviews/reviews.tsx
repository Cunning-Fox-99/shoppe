import React from 'react';
import star from './star.svg'
import './reviews.scss'
import ReviewForm from "./review-form";

export default function Reviews() {

    return <div className="review">

        <div className="review__column">
            <h5 className="review__title">1 Reviews for lira earings</h5>

            <div className="review__wrapper">

                <div className="review__item">
                    <div className="review__item-top">
                        <div className="review__item-name">Scarlet withch</div>
                        <div className="review__item-date">6 May, 2020</div>
                    </div>

                    <div className="review__item-star">
                        <svg className="review__icon active">
                            <use xlinkHref={star + '#star'}></use>
                        </svg>

                        <svg className="review__icon active">
                            <use xlinkHref={star + '#star'}></use>
                        </svg>

                        <svg className="review__icon active">
                            <use xlinkHref={star + '#star'}></use>
                        </svg>

                        <svg className="review__icon">
                            <use xlinkHref={star + '#star'}></use>
                        </svg>

                        <svg className="review__icon">
                            <use xlinkHref={star + '#star'}></use>
                        </svg>
                    </div>

                    <div className="review__item-content">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </div>

                </div>

            </div>
        </div>

        <div className="review__column">
            <h5 className="review__title">Add a Review</h5>
            <span className="review__subtitle">Your email address will not be published. Required fields are marked *</span>

            <ReviewForm />
        </div>

    </div>
}