import "../styles/engagements.css"
import HoneyBookEmbed from "../components/HoneyBookEmbed"
import ScrollItem from "../components/ScrollIItem";
import { Helmet } from 'react-helmet-async'

import collage1 from "../assets/engagements/collage1.jpg"
import collage2 from "../assets/engagements/collage2.jpg"
import collage3 from "../assets/engagements/collage3.jpg"
import collage4 from "../assets/engagements/collage4.png"
import collage5 from "../assets/engagements/collage5.jpg"
import middle1 from "../assets/engagements/middle1.png"
import middle2 from "../assets/engagements/middle2.jpg"
import middle3 from "../assets/engagements/middle3.jpg"
import middle4 from "../assets/engagements/middle4.jpg"
import pic1 from "../assets/engagements/pic1.jpg"
import gif1 from "../assets/engagements/gif1.gif"
import final1 from "../assets/engagements/final1.jpg"
import final2 from "../assets/engagements/final2.jpg"
import final3 from "../assets/engagements/final3.jpg"
import final4 from "../assets/engagements/final4.jpg"
import footerpic from "../assets/engagements/footer.jpg"

export default function Engagements () {
    return (
        <>
        <Helmet>
            <title>Mountain Engagement Photography Colorado | Karina Bittencourt</title>
            <meta name="description" content="Colorado mountain engagement photography in Rocky Mountain National Park, Breckenridge, Estes Park, and beyond. Candid, adventurous, and uniquely yours." />
            <link rel="canonical" href="https://kbphotographer.com/engagements" />
            <meta property="og:title" content="Mountain Engagement Photography | Karina Bittencourt" />
            <meta property="og:description" content="Capture your proposal or engagement in Colorado's mountains. Serving Broomfield, Denver, Summit County, and beyond." />
            <meta property="og:url" content="https://kbphotographer.com/engagements" />
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Mountain Engagement Photography",
                "provider": { "@type": "ProfessionalService", "name": "Karina Bittencourt Photographer" },
                "areaServed": ["Colorado", "Rocky Mountain National Park", "Breckenridge", "Estes Park", "Keystone","Summit County","Steamboat","Breckenridge","Golden", "Winter Park", "Frisco", "Dillon", "Vail", "Aspen",  "Broomfield", "Denver", "Westminster", "Arvada","Thornton", "Fort Collins", "Estes Park", "Boulder","Arapahoe Basin"],
                "description": "Candid engagement and proposal photography in Colorado's mountains."
            })}</script>
        </Helmet>
        <section className="heroSection">
            <ScrollItem>
            <p className="heroText">Planning to Propose?<br/>Let capture the yes</p>
            </ScrollItem>
        </section>

        <section className="planningSection">
        <div className="planning">
            <div className="left">
                <h2 className="titlePlanning">Planning a Mountain Engagement</h2>

                <p>There’s nothing quite like the thrill of a surprise engagement in the mountains — crisp air, golden light, and breathtaking views creating the perfect backdrop for a life-changing moment.</p>
                
                <p>Whether you’re planning this special surprise while living in Colorado or visiting for an unforgettable trip, your engagement photos should feel real, adventurous, and uniquely yours — capturing the joy, excitement, and intimacy of the moment without ever feeling staged. Imagine popping the question in Estes Park, along the trails of Rocky Mountain National Park, or with the snowy peaks of Breckenridge, Keystone, or the scenic beauty near Fort Collins framing your love story.</p>
               
                <p>Whether you’re planning a proposal on a quiet trail, a sunrise session on a scenic peak, or a playful afternoon in a forested park, your photos will capture the laughter, connection, and genuine moments that define your relationship.</p>

                <h2 className="titlePlanning">Why Choose a Mountain Engagement Session?</h2>

                <p>• Natural Light, Stunning Backdrops: Mountains, forests, lakes, and open skies provide an organic canvas that no studio can match.</p>

                <p>• Adventure + Intimacy: Whether hiking a trail or exploring hidden spots, your photos will feel candid, spontaneous, and filled with personality.</p>

                <p>• Storytelling Through Photography: Every photo will capture not just your faces, but your story — your love, your dynamic, and the way you move through the world together.</p>


            </div>
            <div className="right">
                <div className="bigImage">
                    <img src={collage5} alt="surprise-engagement-proprosal-picnic-park-colorado-city-park-denver" />
                </div>
            
            
            <div className="smallImages">

                <img src={collage1} alt="surprise-engagement-proposal-emerald-lake-rocky-moutain-national-park-rmnp" />
                <img src={collage2} alt="surprise-engagement-proposal-emerald-lake-rocky-moutain-national-park-rmnp"  />
                <img src={collage3} alt="surprise-engagement-proposal-aspen-colorado" />
                <img src={collage4} alt="surprise-engagement-proposal-sunrise-amphitheater-boulder" />
            </div>
            </div>
        </div> 
        </section>

       
        <section className="middleSection">
            <div className="middleText">
            <ScrollItem>   
                <h2 className="titlePlanning">Perfect For Couples Who…</h2>
            </ScrollItem>
            <ScrollItem>
                <p>• Love the outdoors and want their engagement photos to reflect their adventurous spirit</p>
                
                <p>• Value genuine, candid moments over posed, stiff portraits</p>
               
                <p>• Are planning a proposal or engagement session anywhere in Colorado’s mountains, including the Front Range, Summit County, Rocky Mountain National Park, or nearby trails.</p>
            </ScrollItem>
            </div>

            <ScrollItem>
            <div className="middlePhotos">
                <img src={middle3} alt="surprise-proposal-engagement-keystone-colorado-arapahoe-basin-ski-snowboarding-couple" />
                <img src={middle1} alt="surprise-proposal-engagement-keystone-colorado-arapahoe-basin-ski-snowboarding-couple" />
                <img src={middle2} alt="surprise-proposal-engagement-keystone-colorado-arapahoe-basin-ski-snowboarding-couple" />
                <img src={middle4} alt="surprise-proposal-engagement-keystone-colorado-arapahoe-basin-ski-snowboarding-couple" />

            </div>
            </ScrollItem>
        </section>
        




        <section className="thirdSection">
            <div className="experience">
             <div className="left2">
                
                <div className="engagementExperience">
                    <img src={pic1} alt="surprise-engagement-proposal-overlook-telluride" />
                </div>
            </div>
             <div className="right2">
               

                <h2 className="titlePlanning">Your Mountain Engagement Experience</h2>

                <p>- Pre-session planning call to discuss location, outfits, and timing</p>

                <p>- At least 1 hour photography session at your chosen mountain location</p>

                <p>- Guidance on poses and movement to keep things natural and fun</p>

                <p>- 20 fully edited, high-resolution images delivered via online gallery</p>

                <p>- Option to include gifts or other personal touches</p>

            </div>

            </div>
        </section>

        <section className="fourthSection">
           
            <div className="fourthSectionText">
                <h2 className="titlePlanning">Tips for Planning Your Mountain Engagement</h2>
                
                <p>Timing is Everything: Sunrise and golden hour provide the most magical light.</p>

                <p>Pack Smart: Bring layers, snacks, water, and shoes suitable for the terrain.</p>

                <p>Expect the Unexpected: Weather, wildlife, and mountain conditions add character to your story — embrace it!</p>
                
            </div>

            <div className="fourthSectionGif">
                <img src={gif1} alt="surprise-engagement-proposal-aspen-colorado" />
            </div>

        </section>

        <section className="final">
            <ScrollItem>
            <div className="finalText">
                
                <h2 className="titlePlanning">Ready to Plan Your Mountain Engagement ?</h2>
                
                <p>Let’s make your love story as breathtaking as the mountains themselves. I serve couples throughout Colorado, including Broomfield, Westminster, Arvada, Thornton, Summit County, Rocky Mountain National Park, Estes Park, Fort Collins, Denver, and beyond.</p>

                <p>[Book Your Session] or [Schedule a Consultation Call] today — let’s start planning your adventure!</p>

            </div>
            </ScrollItem>

            <ScrollItem>
            <div className="middlePhotos">
                <img src={final1} alt="surprise-engagement-proposal-lily-lake-rmnp" />
                <img src={final2} alt="surprise-engagement-proposal-lily-lake-rmnp"/>
                <img src={final3} alt="surprise-engagement-proposal-lily-lake-rmnp"/>
                <img src={final4} alt="surprise-engagement-proposal-lily-lake-rmnp"/>

            </div>
            </ScrollItem>
        </section>

        <section className="formSection">
            
            <h2 className="titlePlanning"> Contact me! </h2>

            <div className="contactForm">
                <HoneyBookEmbed 
                    pid="6621a6daa1587f00085ab204"
                    placementId="6621a6daa1587f00085ab204-1"
                />
            
            </div>       
        </section> 

        <section className="footerBanner">
  
        </section>
  

    </>
    )
}