import "../styles/headshots.css"
import HoneyBookEmbed from "../components/HoneyBookEmbed"
import ScrollItem from "../components/ScrollIItem";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import hero from "../assets/headshots/hero.png"
import bubble1 from "../assets/headshots/01-01.jpg"
import bubble2 from "../assets/headshots/01-02.jpg"
import bubble3 from "../assets/headshots/01-03.jpg"
import bubble4 from "../assets/headshots/01-04.jpg"
import bubble5 from "../assets/headshots/01-05.jpg"
import card1 from "../assets/headshots/02-01.webp"
import card2 from "../assets/headshots/02-02.jpg"
import card3 from "../assets/headshots/02-03.jpg"
import card4 from "../assets/headshots/03-01.webp"
import card5 from "../assets/headshots/03-02.jpg"
import card6 from "../assets/headshots/03-03.jpg"
import card7 from "../assets/headshots/03-04.jpg"
import finalSec1 from "../assets/headshots/04-01.jpg"
import finalSec2 from "../assets/headshots/04-02.jpg"
import finalSec3 from "../assets/headshots/04-03.png"
import location from "../assets/headshots/location.png"
import ka from "../assets/headshots/photographer.jpeg"

export default function Headshots () {
    return (
        <>

        <Helmet>
            <title>Professional Headshots Broomfield Colorado | Karina Bittencourt</title>
            <meta name="description" content="Outdoor professional headshots in Broomfield, Denver, Westminster and surrounding areas. For entrepreneurs, coaches, and professionals ready to level up their brand." />
            <link rel="canonical" href="https://www.kbphotographer.com/headshots" />
            <meta property="og:title" content="Professional Headshots Broomfield CO | Karina Bittencourt" />
            <meta property="og:description" content="Authentic outdoor headshots for professionals and entrepreneurs in the North Denver metro area." />
            <meta property="og:url" content="https://www.kbphotographer.com/headshots" />
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Professional Headshot Photography",
                "provider": { "@type": "ProfessionalService", "name": "Karina Bittencourt Photographer" },
                "areaServed": ["Broomfield", "Denver", "Westminster", "Arvada", "Thornton", "Erie"],
                "description": "Outdoor professional headshots for entrepreneurs and professionals in Colorado."
            })}</script>
        </Helmet>
        <section className="hero">
            <div className="img-wrapper">
                <img src={hero} alt="" />
            </div>
        </section>

        <section className="intro">
           
            <div className="introDiv">
                <h1 className="tittle">Signature Headshots for Professionals & Entrepreneurs</h1>
                <p>Broomfield, Colorado | by KB PHOTOGRAPHER</p>
            </div>

        </section>

        <section className="headshotsWrapper">
                <img src={bubble1} alt="" />
                <img src={bubble2} alt="" />
                <img src={bubble3} alt="" />
                <img src={bubble4} alt="" />
                <img src={bubble5} alt="" />  
        </section>
        <div className="serving">
            <p>Serving Denver, Broomfield, Westminster, Arvada, Thornton, Wheat Ridge, and the North Denver area.</p>
        </div>

        <section className="middleSection">
            <div className="textMiddle">
                <h2 className="tittle">Authentic. Confident. 100% You.</h2>
                <p>Forget stiff studio backdrops. Your professional image should tell your story in a way that feels real — relaxed, approachable, and full of life.</p>
                <p>Imagine a sunlit park in Broomfield, golden light casting a glow on your face, trees softly framing you, or city streets in Denver providing a subtle, professional backdrop.</p>
                <p>These are headshots of the kind that stop people scrolling, spark conversations, and leave a lasting impression.</p>
            </div>
        </section>



        <section className="middleCardsSection">
            <ScrollItem>
            <div className="middleCards">
                <div className="cardLeft">
                    <h2 className="tittle">Perfect For</h2>
                    <p>⫸ Entrepreneurs and small business owners building their brand</p>
                    <p>⫸ Professionals updating LinkedIn, websites, or press features</p>
                    <p>⫸ Coaches, consultants, and creatives ready to level up their online presence</p>
                    <p>⫸ Anyone who wants a portrait that feels like them — relaxed, powerful, and genuine</p>
                </div>
                <div className="cardRight">
                    <img src={card1} alt=""  className="top"/>
                    <img src={card2} alt=""  className="center"/>
                    <img src={card3} alt="" className="bottom" />
                </div>
           </div>
            </ScrollItem>
        </section>

        <section className="packageSection">
            <div className="packageCards">
                <div className="cardLeft-2">
                    <img src={card4} alt="" className="imgMain" />
                    <img src={card5} alt="" className="imgTop" />
                    <img src={card6} alt="" className="imgMiddle" />
                    <img src={card7} alt="" className="imgBottom"  />
                </div>

                <div className="cardRight-2">
                    <h2 className="tittle">What’s Included</h2>
                    <p className="bold">Your Signature Headshot Session includes:</p>
                    <p>15-minute photography session (outdoors)</p>
                    <p>3 professionally edited, high-resolution images</p>
                    <p>Private online gallery with print and download options</p>
                    <p className="bold">Add-on options:</p>
                    <p>→ Hair & makeup styling</p>
                    <p>→ Studio rental or brand environment location</p>
                    <p>→ Additional images or outfit changes</p>
                    
                </div>
           </div>

        </section>

        <section className="finalSection">
            <ScrollItem>
            <div className="finalSectionWrapper">
                <div className="finalSectionText">
                    <h2 className="tittle">Why It Matters</h2>
                    <p>In today’s world, your headshot is your digital handshake. Some people may never meet you in person, yet they feel like they know you through the confidence, warmth, and personality your headshot shares on your profile.</p>
                    <p>It’s the first impression clients, employers, and collaborators have of you — and it deserves to be as intentional as the work you do.</p>
                    <p>When your photos reflect your personality and your purpose, opportunities naturally follow.</p>

                </div>
                <div className="finalSectionPhotos">
                    <img src={finalSec1} alt="" />
                    <img src={finalSec2} alt="" />
                    <img src={finalSec3} alt="" />

                </div>
             </div>
        </ScrollItem>
        </section>

        <section className="locationSection">
            <div className="location">
                <img src={location} alt=""  className="map"/>
                
                 <div className="locationInfo">
                    <p className="titlePlanning">Location:</p>
               
                    <a href="https://www.google.com/maps/place/McKay+Lake+Park+and+Open+Lands/@39.9529652,-105.0176074,16z/data=!4m7!3m6!1s0x876c753b77d093f7:0xe37e6b0d10598273!8m2!3d39.9499698!4d-105.0148015!15sChVtY2theSBwYXJrIGJyb29tZmllbGSSAQRwYXJrqgE-EAEyHxABIhtpT0SPIqUI3KCWo-FHzBNeGqUOoKkLsi62JyMyGRACIhVtY2theSBwYXJrIGJyb29tZmllbGTgAQA!16s%2Fg%2F11f9hv0lqm?entry=tts&g_ep=EgoyMDI1MTAyMC4wIPu8ASoASAFQAw%3D%3D&skid=3a1c3252-ec53-4526-af30-8ba5f0649c56">
                        McKay Lake Park and Open Lands in Broomfield, Colorado
                    </a>
                </div>
            </div>

        </section>

        <section className="photographerSection">
            <div className="photographer">
                <div className="photographerPic">
                    <img src={ka} alt="" />

                </div>
                <div className="photographerIntro">
                <h2 className="titlePlanning">Who am I?</h2>
                <p>I'm <Link to="/about"> Karina Bittencourt Photographer.</Link> </p>
            </div>

            
        </div>
        <div className="aboutPhotographer">
            <h2 className="aboutPhotographeTittle">About <Link to="/about"> Karina Bittencourt Photographer.</Link></h2>
            <p>I’m Karina, a lifestyle and branding photographer based in Colorado. I help professionals and entrepreneurs show up with confidence — capturing authentic portraits that blend professionalism with personality. My approach is relaxed, candid, and creatively guided, so you feel at ease in front of the camera (even if you think you’re not photogenic — I’ve got you!).</p>

            <h2>Ready to Update Your Professional Presence?</h2>
            <p>Let’s plan your Signature Headshot session.</p>
            <p>Sessions take place throughout the North Denver metro area — including Broomfield, Westminster, Arvada, Wheat Ridge, Thornton, and nearby.</p>
            <p>Broomfield Monthly Sessions available for booking now.</p>

            </div>
        </section>

        <section className="formSection">
                
                <h2 className="titlePlanning"> Have something different in mind? Send me a message </h2>
    
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