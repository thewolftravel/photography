import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import ScrollItem from "../components/ScrollIItem";
import HoneyBookEmbed from "../components/HoneyBookEmbed"
import "swiper/css";
import "../styles/ski.css";

import car1 from "../assets/ski/car-1.webp"
import car2 from "../assets/ski/car-2.png"
import car3 from "../assets/ski/car-3.png"
import car4 from "../assets/ski/car-4.png"
import big1 from "../assets/ski/big1.jpg"
import big2 from "../assets/ski/big2.jpg"
import big3 from "../assets/ski/big3.jpeg"
import big4 from "../assets/ski/big4.jpeg"
import sec31 from "../assets/ski/sec3-1.jpg"
import sec32 from "../assets/ski/sec3-2.jpg"
import sec33 from "../assets/ski/sec3-3.jpg"
import sec41 from "../assets/ski/sec4-1.jpg"
import sec42 from "../assets/ski/sec4-2.jpg"
import sec43 from "../assets/ski/sec4-3.jpg"
import sec44 from "../assets/ski/sec4-4.jpg"
import gif3 from "../assets/ski/sec3-gif.gif"
import gif1 from "../assets/ski/gif1.gif"
import gif2 from "../assets/ski/gif2.gif"
import gif32 from "../assets/ski/gif3.gif"
import gif4 from "../assets/ski/gif4.gif"
import collage1 from "../assets/ski/collage1.jpg"
import collage2 from "../assets/ski/collage2.jpg"
import collage3 from "../assets/ski/collage3.jpeg"
import collage4 from "../assets/ski/collage4.jpg"
import collage5 from "../assets/ski/collage5.jpg"
import collage6 from "../assets/ski/collage6.jpg"
import collage7 from "../assets/ski/collage7.jpg"
import collage8 from "../assets/ski/collage8.jpg"

export default function Ski() {
    return (
        <>
        <Helmet>
            <title>Ski & Snow Photography Colorado | Karina Bittencourt</title>
            <meta name="description" content="Ski and snowboarding photography sessions at Keystone, Copper Mountain, Winter Park and more. Action shots, couples, and families on the slopes." />
            <link rel="canonical" href="https://kbphotographer.com/ski" />
            <meta property="og:title" content="Ski & Snow Photography Colorado | Karina Bittencourt" />
            <meta property="og:description" content="On-mountain photography sessions starting at $700. Keystone, Ikon Pass resorts, and more in Colorado." />
            <meta property="og:url" content="https://kbphotographer.com/ski" />
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Ski & Snow Photography Sessions",
                "provider": { "@type": "ProfessionalService", "name": "Karina Bittencourt Photographer" },
                "offers": { "@type": "Offer", "price": "700", "priceCurrency": "USD" },
                "areaServed": ["Keystone", "Copper Mountain", "Winter Park", "Eldora", "Colorado", "Dillon", "Breckenridge", "Vail", "Aspen", "Arapahoe Basin"],
                "description": "On-mountain ski and snowboarding photography sessions in Colorado."
            })}</script>
        </Helmet>
        <section className="heroCarousel">
             <Swiper
                modules={[Autoplay]}
                speed={2500}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                >
                    <SwiperSlide>
                        <img src={car1} alt="" />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img src={car2} alt="" />
                    </SwiperSlide>
                    
                     <SwiperSlide>
                        <img src={car3} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={car4} alt="" />
                    </SwiperSlide>
                </Swiper>
        </section>

        <section className="section-1">
            <div className="textSec1">
                <h2 className="tittle">Ski & Snow Sessions | Mountain photos that feel like your best days on the slopes</h2>
                <p>Sessions start at $700 | by KB Photographer</p>
            </div>
        </section>

        <div className="bigImgs">
            <div className="photos">
            <img src={big1} className="img1" />
            <img src={big2} className="img2" />
            </div>
            <div className="photos">
                <img src={big3} className="img1" />
                <img src={big4} className="img2" />

            </div>
        </div>

        <section className="section-2">
            <ScrollItem>
            <div className="textSec">
                <h2 className="tittle">Why a Ski-Snow Photo Session Is Your Winter Must-Have</h2>

                <p>Have you ever seen those snowy mountain photos online and immediately recognized the phone-quality vibe... blurry edges, awkward angles, someone struggling to hold the camera just right? We’ve all been there. Trying to snap a selfie that actually looks good on the slopes feels impossible. Family photos, couple shots, vacation memories... too often they end up looking like everyone else’s.</p>

                <p>Imagine instead effortlessly having stunning, high-resolution images of you, your loved ones, or your adventures... without carrying a camera, worrying about angles, or stopping mid-run. Shots made to look natural, candid, and full of life. Perfect for social media, wall prints, or simply bringing your memories to life in a way no phone can match.</p>

                <p>With a ski-snow session, your moments on the mountain are captured effortlessly, so you can fully enjoy the slopes, share memories that stand out, and have high-resolution photos that feel personal, timeless, and unlike anything your friends have.</p>

                 <Link to="/contact" className="contactBtn">
                     CONTACT
                </Link>

            </div>
            </ScrollItem>

        </section>

        <section className="section-3">
            <div className="wrapper">
                <div className="visualSide">
                    <div className="gifSec3">
                        <img src={gif3} alt="" />
                    </div>
                    <div className="polaroids">
                        <img src={sec31} className="p1" />
                        <img src={sec32} className="p2" />
                        <img src={sec33} className="p3" />
                    </div>
                </div>

                <ScrollItem>
                <div className="textSide">
                    <h2 className="tittle">What’s Included</h2>
                        <p>→ 2 hours of on-mountain photography</p>

                         <p> → 30 edited images delivered in a private online gallery</p>

                        <p> → Photographer access included at Keystone Resort and all Ikon Base Pass resorts in Colorado</p>

                        <p> → Consultation call to plan your day, locations, and style</p>

                        <p> → Gallery access for 3 months with high-resolution and web-sized downloads</p>

                        <p> → Option to purchase additional images or professional prints directly from your gallery</p>

                        <p> You’ll get a mix of action shots, lifestyle moments, and portraits surrounded by Colorado’s most stunning alpine views.</p>
    
                </div>
                </ScrollItem>

            </div>
            <Link to="/contact" className="contactBtn">
                     Ready to Book ?
                </Link>

        </section>

        <section className="section-4">
            <ScrollItem>
            <div className="textSec4">
                <h2 className="tittle">Where We Ride</h2>
                <p>Sessions are available at Keystone Resort, Ikon Pass, and other mountains in Colorado, including:
                Photographer's pass included for the following Resorts: Keystone, Copper Mountain, Winter Park, Eldora.</p>

                <p>Photographer's pass not included for the following Resorts: Breckenridge, Arapahoe Basin, Aspen Snowmass, Steamboat, Aspen Highlands, Aspen Mountain (Ajax), Buttermilk, Beaver Creek, Crested Butte, Telluride, Snowmass, Loveland, Monarch Mountain, Silverton.</p>

                <p>Each location offers its own vibe. Whether you’re dropping into bowls, gliding through tree runs, or sharing a quiet chairlift ride with someone you love.</p> 


            </div>

            <div className="sec4Pic">
                <img src={sec41} className="sec4"/>
                <img src={sec42} alt="" />
                <img src={sec43} alt="" />
                <img src={sec44} alt="" />
            </div>
        </ScrollItem>
        </section>

        <section className="section-5">
        
            <div className="sec5">

            <img src={gif32} alt="" className="gif"/>

            <div className="textSec5">
                <h2 className="tittle">Who It’s For</h2>
                <p>These sessions are perfect for:</p>
                <p>→ Skiers and snowboarders who want to capture their ride in motion</p>
                <p>→ Couples planning a mountain engagement or winter adventure together</p>
                <p>→ Friends and families who live for powder days and Colorado Mountains</p>
                <p>You don’t need to be a pro athlete to book a session. If you love the mountains and snow makes you smile, we’ll create something beautiful.</p>

            </div>

            <img src={gif4} alt="" className="gif" />
            </div>
        </section>

        <section className="section-6">
            <div className="textSec6">
                <h2 className="tittle">Pricing & Booking</h2>
                <p>Session Price starts at: $700
                    Includes 2 hours on-mountain, 30 edited images, and photographer access at Keystone and all Ikon Base Pass resorts within 100 miles of Broomfield (80020).</p>

                <p>For other resorts, a travel fee and lift ticket may apply.</p>

                <p>A $250 non-refundable retainer secures your spot, with full payment due before the session. Payment plans are available.</p>
        
           </div>
            <div className="photoCollage1">
                <div className="frame img1">
                    <img src={collage1}/>
                </div>
                <div className="frame  img2Collage">
                    <img src={collage2} />
                </div>
                <div className="frame img3">
                    <img src={collage3} />
                </div>
                <div className="frame img4">
                    <img src={collage4} />
                </div>
                
                
                
                
            </div>

            <div className="textSec6-2">
                <p>BOOKING OPEN | limited sessions per week and priority for pass-holders and repeat clients.</p>
                <Link to="/contact" className="contactBtn">
                     Book Now!
                </Link>
            </div>
            
            <div className="photoCollage2">
                <div className="frame img-5-2">
                    <img src={collage5} />
                </div>
                <div className="frame img6">
                    <img src={collage6} />
                </div>
                <div className="frame img7">
                    <img src={collage7}/>
                </div>
                <div className="frame img8">
                    <img src={collage8} />
                </div> 
                
                
            </div>
        
        </section>

        <section className="section-7">
            <ScrollItem>
            <div className="sec7">
            <div className="textSec7">
                <h2 className="tittle">Let’s Ride</h2>
                <p>Spots fill fast once the snow starts falling. If Keystone is your mountain or you ride with an Ikon Pass, let’s make this season unforgettable. (Do you ride at a different Colorado Resort? Get in touch, let's craft a personalized package for you. I'll meet you in Telluride, Aspen, Snowmass, or another resort)</p>

                <p>Click below to start planning your session.
                Bring your board, your skis, and your story... I'll bring the camera and enthusiasm.</p>

                <Link to="/contact" className="contactBtn">
                     Book Now!
                </Link>
            </div>
            <div className="gifSec7">
                <img src={gif1} alt="" />
            </div>
            
        </div>
        </ScrollItem>
        </section>

        <section className="formSection">
                    
                    <h2 className="titlePlanning"> Let's Chat! </h2>
        
                    <div className="contactForm">
                        <HoneyBookEmbed 
                            pid="6621a6daa1587f00085ab204"
                            placementId="6621a6daa1587f00085ab204-1"
                        />
                    
                    </div>    
        </section>   

        
        </>
    )
}