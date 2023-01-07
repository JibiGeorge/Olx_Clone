import React from 'react'
import adsImage from '../../Assets/ad1.jpg'
import './Ads.css'

function Ads() {
    const adsDelete = ()=>{
        let ad_img = document.querySelector('.ad_img');

        ad_img.style = `display: none`;
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div class="ad_img">
                    <img src={adsImage} />
                    <i class="fa-regular fa-rectangle-xmark" id="ad_icon" onClick={adsDelete}></i>
                </div>
            </div>
        </div>
    )
}

export default Ads