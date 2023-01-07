import React from 'react'
import './HeaderMenu.css'

function HeaderMenu() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="menuBar">
                    <div className="menu-content d-flex">
                        <div className="all_Category d-flex">
                            <span>All Categories</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className='d-flex menus-lists'>
                            <div className="menus">
                                <a>Cars</a>
                            </div>
                            <div className="menus">
                                <a>Motorcycles</a>
                            </div>
                            <div className="menus">
                                <a>Mobile Phones</a>
                            </div>
                            <div className="menus">
                                <a>For Sale: Houses & Apartments</a>
                            </div>
                            <div className="menus">
                                <a>OLX Renew (Mobile)</a>
                            </div>
                            <div className="menus">
                                <a>Scooters</a>
                            </div>
                            <div className="menus">
                                <a>Commercial & Other Vehicles</a>
                            </div>
                            <div className="menus">
                                <a>For Rent: Houses & Apartments</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderMenu