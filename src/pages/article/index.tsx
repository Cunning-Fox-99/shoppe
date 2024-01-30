import React from 'react';
import preview from './preview.jpg'
import image from './image.jpg'
import './article.scss'
import SocialList from "../../components/social-list";

export default function Article() {

    return <div className="article container">

        <h1>Fast Fashion, And Faster Fashion</h1>
        <span className="article__date">by <span>ANNY JOHNSON</span> - October 8,2020</span>

        <div className="article__preview">
            <img src={preview} alt=""/>
        </div>

        <div className="article__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
                sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
                consequat sed eu felis. Nunc sed porta augue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
                sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
                consequat sed eu felis.</p>
            <img src={image} alt=""/>
            <h5>Top trends</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
                sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
                consequat sed eu felis.</p>
            <ul>
                <li>● consectetur adipiscing elit. Aliquam placerat</li>
                <li> ● Lorem ipsum dolor sit amet consectetur</li>
                <li> ● sapien tortor faucibus augue</li>
                <li>● a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis</li>
            </ul>

            <div className="article__bottom">

                <div className="article__column">
                    <div className="article__bottom-title">Tags</div>
                    <span className="article__bottom-text">Fashion, Style, Season</span>
                </div>

                <div className="article__column">
                    <div className="article__bottom-title">Share</div>
                    <SocialList width={20}/>
                </div>

            </div>

        </div>


    </div>
}