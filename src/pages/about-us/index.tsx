import React from "react";
import image1 from './image-1.jpg'
import image2 from './image-2.jpg'
import './about-us.scss'

export default function AboutUs() {

    return <div className="about-us container">
        <h1>About</h1>
        <h4>Who we are and why we do what we do!</h4>
        <p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
        <h5>Top trends</h5>
        <img src={image1} alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
        <ul>
            <li>● consectetur adipiscing elit. Aliquam placerat</li>
            <li>● Lorem ipsum dolor sit amet consectetur</li>
        </ul>
        <h5>Produced with care</h5>
        <img src={image2} alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.</p>
    </div>
}