import React from 'react'
import whatsapp from "../../assest/whatsapp.png";
import './whatsapp.css'

const Whatsapp = () => {
    return (
        <>
            <div className='back-to-top'>
                <img src={whatsapp} alt="whatsapp" style={{ width: "60px" }} />
            </div>
        </>
    )
}

export default Whatsapp;