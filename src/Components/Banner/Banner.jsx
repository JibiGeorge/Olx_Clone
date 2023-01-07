import React from 'react'
import BannerImage from '../../Assets/banner.png'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className="container-fluid">
                <div className="row">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner