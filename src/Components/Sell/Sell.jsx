import React from 'react'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'
import './Sell.css'

function Sell() {
    return (
        <>
            <section className='back'>
                <BackButton/>

                {/* Post Your Header */}
                <div className="sell_Body">
                    <div className="container">
                        <div className="row">
                            <div className="title">
                                <span>Post Your AD</span>
                            </div>
                        </div>
                    </div>

                    {/* Choose Category */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="category">
                                <div className='title'>
                                    <h3>Choose a Category</h3>
                                </div>
                                <div>
                                    <ul className='categoryList'>
                                        <Link to='/create'>
                                            <li>
                                                <i class="fa-solid fa-car"></i>
                                                <span>OLX Auto (Cars)</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </li>
                                        </Link>
                                        <Link>
                                            <li>
                                                <i class="fa-solid fa-car"></i>
                                                <span>Properties</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </li>
                                        </Link>
                                        <Link>
                                            <li>
                                                <i class="fa-solid fa-car"></i>
                                                <span>Mobiles</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </li>
                                        </Link>
                                        <Link>
                                            <li>
                                                <i class="fa-solid fa-car"></i>
                                                <span>Jobs</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </li>
                                        </Link>
                                        <Link>
                                            <li>
                                                <i class="fa-solid fa-car"></i>
                                                <span>Bikes</span>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sell