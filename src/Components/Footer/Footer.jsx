import React from 'react'
import './Footer.css'
import Footer2 from './Footer2'

function Footer() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="footer col-lg-10">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3>Popular Locations</h3>
                            <div className="content">
                                <ul>
                                    <li>Kolkata</li>
                                    <li>Mumbai</li>
                                    <li>Chennai</li>
                                    <li>Pune</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3>Trending Locations</h3>
                            <div className="content">
                                <ul>
                                    <li>Bhubaneshwar</li>
                                    <li>Hyderabad</li>
                                    <li>Chandigarh</li>
                                    <li>Nashik</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3>About Us</h3>
                            <div className="content">
                                <ul>
                                    <li>About OLX Group</li>
                                    <li>Careers</li>
                                    <li>Contact Us</li>
                                    <li>OLX People</li>
                                    <li>Waah Jobs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3>OLX</h3>
                            <div className="content">
                                <ul>
                                    <li>Help</li>
                                    <li>Sitemap</li>
                                    <li>Legal & Privacy Information</li>
                                    <li>Blog</li>
                                    <li>OLX Autos Sell Car</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer col-lg-2">
                    <div className="col-lg-12">
                        <h3>Follow Us</h3>
                        <div className='social_media'>
                            <span><i class="lab la-facebook"></i></span>
                            <span><i class="lab la-instagram"></i></span>
                            <span><i class="lab la-twitter"></i></span>
                            <span><i class="lab la-youtube"></i></span>
                        </div>
                    </div>
                </div>
                <Footer2/>
            </div>
        </div>
    )
}

export default Footer