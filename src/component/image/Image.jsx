import React from 'react'
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './image.css';
const Image = () => {
    return (
        <>
            <Carousel fade  >
                <Carousel.Item interval={2500}>

                    <img
                        className="d-block w-100 dark img "
                        src="/images/img1.jpg"
                        alt="First slide"
                    />
                    <div className='col-xl-8 col-lg-9 offset-xl-2 offset-lg-1'>
                        <Carousel.Caption className='col-sm-4 pos '>
                            <p className="title p">Old Delhi Cycle Tour</p>
                            <h1 className="h1" >Shahjahan<span className='hr'>Tour</span></h1>
                            <p className='pad p'>Price</p>
                            <h2 className='h2'>INR 2000</h2>
                            <p className='no p'>01/<span className='noss'>03</span></p>
                            <p className='down p'>4 Hour <span className='fw-lighter'>Morning Tour</span></p>
                        </Carousel.Caption>
                        <Carousel.Caption className='col-sm-4 mid pos'>
                            <p className='pad p'>Explore the organized chaos</p>
                            <h2 className='h2'>Old Delhi</h2>
                            <p className='downmid p'>Breakfast <span className='fw-lighter'>Included</span></p>
                        </Carousel.Caption>
                        <Carousel.Caption className='col-sm-4 last pos'>
                            <p className='pad p'>we hoosted more than</p>
                            <h2 className='h2'>30,000+</h2>
                            <p className='downlast p'>people <span className='fw-lighter'>in this tour</span> </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        id="height"
                        className="d-block w-100 dark img"
                        src="/images/img2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='col-sm-4 pos'>
                        <p className="title p">Delhi-Taj Mahal Cycle Tour</p>
                        <h1 className="h1" >Krishna's<span className='hr'>Trails</span></h1>
                        <p className='pad p'>Price</p>
                        <h2 className="h2" >INR 20000</h2>
                        <p className='no p'>02/<span className='noss'>03</span></p>
                        <p className="down p">2 Days Tour <span className='fw-lighter'> | October-March</span></p>
                    </Carousel.Caption>
                    <Carousel.Caption className='col-sm-4 mid pos'>
                        <p className='pad p'>5 Star Stay In</p>
                        <h2 className="h2" >Vrindavan</h2>
                        <p className="down p">Krishna's <span className='fw-lighter'>childhood town</span></p>
                    </Carousel.Caption>
                    <Carousel.Caption className='col-sm-4 last pos'>
                        <p className='pad p'>Tour Date</p>
                        <h2 className="h2" >Weekends</h2>
                        <p className="down p">Contact for<span className='fw-lighter'> Private Tour</span></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100 dark img"
                        src="/images/img3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='col-sm-4 pos'>
                        <p className="title p">Evening Food Walk</p>
                        <h1 className="h1" >StreetFood<span className='hr'>Safari</span></h1>
                        <p className='pad p'>Price</p>
                        <h2 className="h2" >INR 2500</h2>
                        <p className='no p'>03/<span className='noss'>03</span></p>
                        <p className="down p">2.5 Hours <span className='fw-lighter'> Old Delhi</span></p>
                    </Carousel.Caption>
                    <Carousel.Caption className='col-sm-4 mid pos'>
                        <p className='pad p'>Taste 10+</p>
                        <h2 className="h2" >Street Food</h2>
                        <p className="down p">Safe & <span className='fw-lighter'>tested</span></p>
                    </Carousel.Caption>
                    <Carousel.Caption className='col-sm-4 last pos'>
                        <p className='pad p'>Limited Spots</p>
                        <h2 className="h2" ><span className='br'>Evening</span>Daily</h2>
                        <p className="down exception p">Best food lovers <span className='fw-lighter'>leading the walk</span></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Image;