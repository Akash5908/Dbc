import React from 'react'
import Blogs from '../json/blogs'
// import './op.css'
const Blob
    = () => {
        return (
            <>
                <div className="holiday-plan-area tp-holiday-plan-area mg-top-96" style={{ marginTop: '55px' }}>
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6 col-lg-9">
                                <div class="section-title text-center">
                                    <h1 class=" wow  fadeInUp animated" data-wow-duration="0.6s" data-wow-delay="0.1s" style={{
                                        visibility: 'visible', animationDuration: '0.6s', animationDelay: '0.1s', animationName: 'fadeInUp', marginBottom: "20px",
                                        fontWeight: "700", fontSize: '53px', color: "var(--heading-color)",
                                        fontFamily: "var(--heading-font)"
                                    }}>Recent Blog Posts</h1>

                                    <p class="wow  fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDuration: '0.6s', animationDelay: '0.2s', animationName: 'fadeInUp' }}>Real India lives in it’s villages! Explore the countryside, temples, towns, rivers, local hospitality, and history on slow &amp; authentic design cycle tours.</p>
                                    <a class="btn btn-yellow" href="/tours/bicycle-touring">View All <i class="fa fa-paper-plane"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            {Blogs.map((item) => {
                                return (

                                    <div class="col-lg-4 col-sm-6"><div class="single-destinations-list style-two wow  fadeInUp animated" data-wow-duration="0.4s" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDuration: '0.4s', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <a href="/tours/bicycle-touring/krishna-trails-taj-mahal-delhi-by-cycle" style={{ textDecoration: 'none' }}>
                                            <div class="thumb">
                                                <picture>
                                                    <source class="lazy" data-src="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-agra-delhi-by-cycle.webp" type="image/webp" />
                                                    <source class="lazy" data-src="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-agra-delhi-by-cycle.jpg" type="image/jpeg" />
                                                    <img class="" style={{ borderRadius: '5px', maxWidth: '100%' }} data-src="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-agra-delhi-by-cycle.jpg" src={item.imagejpeg} />
                                                </picture>
                                            </div>
                                            <div class="details">
                                                <p class="location" style={{ color: '#01b9b7' }}>


                                                    {item.date}
                                                </p>
                                                <h4 class="holi-title" style={{ fontSize: '20px', color: 'var(--heading-color)', fontFamily: 'var(--heading-font)', fontWeight: '700' }}>{item.title}</h4>
                                                <p class="content">{item.shortDescription}</p>
                                                <div class="tp-price-meta">
                                                    {/* <h2 style={{ color: 'var(--main-color-one', marginRight: '40px' }}>{item.}</h2> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    </div>



                                )

                            }
                            )}
                        </div>
                    </div>
                </div >
            </>
        )
    }
export default Blob
    ;