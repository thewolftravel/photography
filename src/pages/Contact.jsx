import { InlineWidget } from "react-calendly";

import HoneyBookEmbed from "../components/HoneyBookEmbed"
import ScrollItem from "../components/ScrollIItem";
import proposal from "../assets/contact/proposal-surprise.jpg"
import couple from "../assets/contact/couple.jpg"
import proposal2 from "../assets/contact/proposal-2.png"
import hero from "../assets/contact/hero.jpg"
import collage1 from "../assets/contact/collage1.png"
import collage2 from "../assets/contact/collage2.jpg"
import collage3 from "../assets/contact/collage3.png"
import collage4 from "../assets/contact/collage4.jpg"
import collage5 from "../assets/contact/collage5.jpg"

import "../styles/contact.css"
export default function Contact () {
    return (
    <>
    <section className="hero">
        <div className="img-wrapper">
            <img src={hero} alt="couple-moutain-surprise-proposal-colorado" />
        </div>
    </section>
        <div className="sayYes">
            <h2>Ready to say yes to a lifetime of memories?</h2>
        </div>

    <section className="contactSection">


            <div className="imgBackground">
                <img src={proposal} alt="couple-moutain-surprise-proposal-colorado"className="side-img" />
                
                 <div className="text">
                <ScrollItem>

                    <p> I’m so excited to know that you’ve connected with me and my work! Thank you for getting this far!</p>
                       <br /> 
                    <p> • This is where our journey together begins. To better understand your expectations and learn more about your session or wedding, please fill out the form with all the details.</p>
                        <br />
                    <p> • Just a heads up, my 2026 Spring | Summer schedule is now open. I specialize in capturing daytime, outdoor ceremonies and portraits, starting no later than 5 PM, in locations that align with my artistic and timeless style.</p>
                        <br />
                    <p> • Can’t wait to hear from you! P.S.: Every message is received with care, and I’ll respond within 48 hours! If you haven’t heard back, please check your spam folder. You’re also welcome to reach out to me on Instagram!</p>
                </ScrollItem>
            </div>

        <img src={proposal2} alt="couple-moutain-surprise-proposal-colorado-ski-photography" className="side-img"/>
            

            </div>
           

       <div className="contactGrid">
        <div className="imageForm">
            <img src={couple} alt="couple-propsal-engagemnet-photography-black-and-white-colorado-denver" />
        </div> 

            <div className="contactForm">
                <HoneyBookEmbed 
                pid="6621a6daa1587f00085ab204"
                placementId="6621a6daa1587f00085ab204-1"
                />

            </div>        
        </div>
    </section>

    <div className="calendlyWrapper">
        <h2 className="tittle">You can also schedule a video or phone call here: </h2>
        <InlineWidget url="https://calendly.com/kbphotographer/30min" />   
    </div>

    <section className="photoCollage">
        <div className="footerCollage">

            <div className="frame img-1">
                <img src={collage1} alt="couple-moutain-surprise-proposal-colorado-love-land-engagemnet" />
            </div>

            <div className="frame img-2">
                <img src={collage2} alt="family-portraits-lifestyle-photography" />
            </div>

            <div className="frame img-3">
                <img src={collage3} alt="enlopement-moutain-couples"  />
            </div>

            <div className="frame img-4">
                <img src={collage4} alt="mountain-ski-sports-snow-photography" />
            </div>

            <div className="frame img-5">
                <img src={collage5} alt="maternity-pictures-lifestyle-photography"/>
            </div>
                     
        </div>
    </section>


        
    </>
    )
}

