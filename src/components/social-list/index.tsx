import React from "react";
import {Link} from "react-router-dom";
import './social-list.scss'

interface Interface {
    width?: number
}

export default function SocialList({width}:Interface) {

    const widthIcon = width || 30

    return <div className="social-list">
        <div className="social-list__item">
            <Link to="/">
                <img src={`https://img.icons8.com/ios-glyphs/${widthIcon}/linkedin.png`} alt=""/>
            </Link>
        </div>

        <div className="social-list__item">
            <Link to="/">
                <img src={`https://img.icons8.com/ios-glyphs/${widthIcon}/facebook.png`} alt=""/>
            </Link>
        </div>

        <div className="social-list__item">
            <Link to="/">
                <img src={`https://img.icons8.com/ios-glyphs/${widthIcon}/instagram-new.png`} alt=""/>
            </Link>
        </div>

        <div className="social-list__item">
            <Link to="/">
                <img src={`https://img.icons8.com/ios-glyphs/${widthIcon}/twitter.png`} alt=""/>
            </Link>
        </div>

    </div>
}