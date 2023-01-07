import React from 'react'
import './Sell.css'

function BackButton() {
    return (
        <>
            {/* Back Button Header */}
            <div className="container-fluid">
                <div className="row">
                    <div className="backbtn">
                        <div className='btn'>
                            <i class="fa-solid fa-arrow-left"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackButton