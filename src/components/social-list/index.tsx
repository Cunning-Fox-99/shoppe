import React from "react";
import {Link} from "react-router-dom";
import './social-list.scss'

export default function SocialList() {
    return <div className="social-list">
        <div className="social-list__item">
            <Link to="/">
                <img src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt=""/>
            </Link>
        </div>

        <div className="social-list__item">
            <Link to="/">
                <img src="https://img.icons8.com/ios-glyphs/30/facebook.png" alt=""/>
            </Link>
        </div>

        <div className="social-list__item">
            <Link to="/">
                <img src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt=""/>
            </Link>
        </div>

        <div className="social-list__item">
            <Link to="/">
                <img src="https://img.icons8.com/ios-glyphs/30/twitter.png" alt=""/>
            </Link>
        </div>

    </div>
}