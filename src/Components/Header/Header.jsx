import React, { useState, useContext } from 'react'
import Logo from '../../Assets/olx_logo.png'
import './Header.css'
import { Modal, Button, Carousel } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../store/FirebaseContext';
import { getAuth, signOut} from "firebase/auth";

function Header() {
    let handleCountry = () => {
        let list = document.getElementById('countrylist');
        list.classList.toggle('hidden');
        // moving.classList.toggle('roted')
    }
    const [isShow, invokeModal] = useState(false);
    const initModal = () => {
        return invokeModal(!isShow);
    }

    const {user} = useContext(AuthContext);
    const auth = getAuth();
    const navigate = useNavigate();

    const sell = () =>{
            navigate("/post");
    }

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className='d-flex justify-content-center header-content'>
                        <div className="logo">
                            <img className='image_fluid' src={Logo} alt="" />
                        </div>
                        <div className="country" onClick={handleCountry}>
                            <div className="selected">
                                <span>India</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <ul className='countries' id="countrylist">
                                <li className='options'>
                                    <p>India</p>
                                </li>
                                <li className='options'>
                                    <p>Kerala</p>
                                </li>
                                <li className='options'>
                                    <p>Maharastra</p>
                                </li>
                            </ul>
                        </div>
                        <div className="search_box">
                            <input type="text" className='search_input' placeholder='Find Cars, mobile phone and More....' />
                            <p> <i class="fa-solid fa-magnifying-glass"></i> </p>

                        </div>


                        <div className="language">
                            <div className='d-flex' style={{ alignItems: "center" }}>
                                <p className='selected'>English</p>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <ul className='lan'>
                                <li>English</li>
                                <li>हिन्दी</li>
                            </ul>
                        </div>
                        <div className='login'>
                            <span>{user ? <a onClick={()=>{
                            signOut(auth);
                            navigate('/login')
                            }}>Logout</a>: <a onClick={initModal}>Login</a>}</span>
                        </div>
                        <div className="sell">
                            <button onClick={sell}>
                                <i className='fa-solid fa-plus'></i>
                                <span>SELL</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal show={isShow}>
                <div>
                    <Modal.Body>
                        <div className='carousel-content'>
                        <button className="closeBtn" onClick={initModal}>
                        X
                    </button>
                            <Carousel>
                                <Carousel.Item>
                                    <div className='carouselImg'>
                                        <img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png" alt="" />
                                    </div>
                                    <p>Help us become one of the safest places to buy and sell</p>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className='carouselImg'>
                                    <img src="https://statics.olx.in/external/base/img/loginEntryPointFavorite.png" alt="" />
                                    </div>
                                    <p>Help us become one of the safest places to buy and sell</p>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className='carouselImg'>
                                    <img src="https://statics.olx.in/external/base/img/loginEntryPointChat.png" alt="" />
                                    </div>
                                    <p>Keep all your favourites in one place.</p>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='userLogin'>
                            <button className='d-flex login-button'>
                            <i class="fa-thin fa-phone"></i>
                            <p>Continue with Phone</p>
                            </button>
                        </div>
                        <div className='userLogin'>
                            <button className='d-flex login-button'>
                            <i class="fa-thin fa-phone"></i>
                            <p>Continue with Phone</p>
                            </button>
                        </div>
                        <div className="userLogin1">
                            <p>OR</p>
                            <p><Link to='/login' className='linktoEmailPage'>Login with Email</Link></p>
                        </div>
                    </Modal.Body>
                </div>                
            </Modal>
        </div>
    )
}

export default Header