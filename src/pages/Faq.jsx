import Accordion from "../components/Accordion"
import Polaroid from "../components/Polaroid";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import HoneyBookEmbed from "../components/HoneyBookEmbed";
import "../styles/faq.css"


import family2 from "../assets/faq/family2.jpg"
import family3 from "../assets/faq/family3.jpg"

import couple4 from "../assets/faq/couple4.jpg"
import couple5 from "../assets/faq/couple5.jpg"

import snowboarding1 from "../assets/faq/snowboarding1.jpg"
import snowboarding4 from "../assets/faq/snowboarding4.jpg"



export default function Faq() {
    return(
        <>
        <Helmet>
            <title>FAQ | Colorado Adventure & Engagement Photography | Karina Bittencourt</title>
            <meta name="description" content="Answers to common questions about booking, locations, pricing, and what to expect from your Colorado photography session with Karina Bittencourt." />
            <link rel="canonical" href="https://www.kbphotographer.com/faq" />
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What types of photography sessions do you offer?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Mountain engagements, snowboarding adventures, ski sessions, intimate elopements, family portraits, lifestyle photography, and headshots." }
                },
                {
                    "@type": "Question",
                    "name": "Where do your photoshoots take place?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Mostly in Colorado's mountains near Denver and Broomfield, including Rocky Mountain National Park, Summit County, Keystone, Breckenridge, and Winter Park." }
                },
                {
                    "@type": "Question",
                    "name": "How far in advance should I book?",
                    "acceptedAnswer": { "@type": "Answer", "text": "For mountain engagements and winter adventures, 2-6 months in advance is ideal. Lifestyle and family sessions are more flexible." }
                },
                {
                    "@type": "Question",
                    "name": "How long until I get my photos?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A sneak peek within a week, and full galleries delivered in 3-8 weeks depending on season and session type." }
                },
                {
                    "@type": "Question",
                    "name": "Do you travel outside Colorado?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes! Colorado is home base but I'm open to traveling for meaningful adventures and destination sessions." }
                }
                ]
            })}</script>
        </Helmet>
        <section className="hero-Faq">
            <div className="hero-inner">
                <div className="polaroid-group">
                    <Polaroid img={family2} rotate="5deg" />
                    {/* <Polaroid img={family3} rotate="-3deg" /> */}

                </div>

                <div className="polaroid-group">
                    <Polaroid img={couple4} rotate="-4deg" />
                    {/* <Polaroid img={couple5} rotate="8deg" /> */}
                </div>

                <div className="polaroid-group">
                    {/* <Polaroid img={snowboarding4} rotate="-5deg" /> */}
                    <Polaroid img={snowboarding1} rotate="-5deg" />
                </div>
            </div>
        </section>

            <div className="faqTitle">
            <h1 className="tittle">Colorado Adventure & Engagement Photography FAQ</h1>
            </div>

            <section className="accordion-section">
                <div className="accordion">
                    {/* 1 */}
                    <Accordion title="What types of photography sessions do you offer?">
                    <p>
                        I love capturing moments that tell a story! From mountain engagements, snowboarding adventures, ski sessions, and intimate elopements to family portraits, lifestyle photography, and custom landscape artwork— I tailor every session to your vision. My goal is to create images that feel genuine, alive, and uniquely you.
                    </p>
                    </Accordion>
                    {/* 2 */}
                     <Accordion title="Do you photograph mountain proposals or engagement sessions?">
                    <p>
                        Absolutely! Colorado’s mountains are one of my favorite backdrops. Whether it’s a snowy ski resort, a golden sunset on a hiking trail, or an adventurous snowboarding session, I’ll capture your love story in a way that feels authentic and breathtaking.
                    </p>
                    </Accordion>
                    {/* 3 */}
                    <Accordion title="Can I book a snowboarding or ski session?">
                    <p>
                        Yes! I combine my love for snow sports with photography. Whether you’re shredding down the slopes or enjoying a cozy mountain resort, I capture your adventure in motion—perfect for memories or social media content.
                    </p>
                    </Accordion>
                    {/* 4 */}
                    <Accordion title=" Do you do elopements or small weddings in Colorado?">
                    <p>
                         I absolutely do! I specialize in intimate elopements and small weddings in the mountains. From private vow ceremonies to adventurous celebrations, I document your day naturally—so you can relive every moment without stress or distractions.
                    </p>
                    </Accordion>
                    {/* 5 */}
                    <Accordion title="  How do I book a session?">
                    <p>
                        Booking is easy! Just reach out through my <Link to="/contact">contact page</Link> or email me at <a href="mailto:hello@kbphotographer.com" className="email">hello@kbphotographer.com</a> with your vision, location, and preferred date. I’ll reply with availability, packages, and all the details you need.
                    </p>
                    </Accordion>
                    {/* 6 */}
                    <Accordion title=" How far in advance should I book?">
                    <p>
                        Even if your session is just a week or two away, reach out! I’ll do my best to make it happen. For mountain engagements, winter adventures, and elopements, booking 2-6 months in advance is ideal, especially for weekends and peak ski season, but lifestyle and family sessions are more flexible. Don’t hesitate to get in touch, no matter the timing!
                    </p>
                    </Accordion>
                    {/* 7 */}
                    <Accordion title="Where do your photoshoots take place?">
                    <p>
                        Most of my sessions are in Colorado’s stunning mountains, near Denver and Broomfield, including Rocky Mountain National Park, Summit County, Keystone, Breckenridge, Winter Park, and other ski resorts. I also love exploring new spots, if you have a dream location, let’s make it happen!
                    </p>
                    </Accordion>
                    {/* 8 */}
                    <Accordion title="What should I wear for my session?">
                    <p>
                         Wear what feels like you! For outdoor sessions, layers, textures, and colors that complement the landscape work beautifully. For snowy or adventure shoots, think about movement, comfort, and warmth. I’m happy to give personal wardrobe tips too—check out more ideas on my 
                         <Link to="/blog"> blog</Link>.
                    </p>
                    </Accordion>
                    {/* 9 */}
                    <Accordion title=" Can I get prints, albums, or wall art from my session?">
                    <p>
                         Absolutely! I offer prints, albums, wall displays, digital downloads, and greeting cards, all crafted with care so your memories can be enjoyed for years. I also collaborate with amazing partners to create unique display options, you can explore those here: 
                         <Link to="/blog/bringing-memories-to-light">DP Designs & Stuff x KB Photographer</Link>.
                    </p>
                    </Accordion>
                    {/* 10 */}
                    <Accordion title="How long until I get my photos?">
                    <p>
                        I usually send a sneak peek within a week, and full galleries are delivered in 3-8 weeks depending on season and session type and duration.
                    </p>
                    </Accordion>
                    {/* 11 */}
                    <Accordion title="Can I share my photos on social media?">
                    <p>
                        Yes! Please tag me <a href="https://www.instagram.com/kbphotographer.sports/" target="_blank">@kbphotographer.sports</a>  or at <a href="https://www.instagram.com/kbphotographer.engagement/" target="_blank">@kbphotographer.engagement</a>  when posting so we can share the stoke. I love seeing your photos in action!
                    </p>
                    </Accordion>
                    {/* 12 */}
                    <Accordion title="What if the weather is bad on our session day?">
                    <p>
                        A little weather can add character to your photos! Snow, clouds, or rain can be beautiful. If conditions are unsafe, we’ll reschedule for the next available date that works for us.
                    </p>
                    </Accordion>
                    {/* 13 */}
                    <Accordion title="What time of day is best for a photoshoot?">
                    <p>
                        Early mornings and golden hour are my favorites! The light is soft, warm, and perfect for capturing natural, glowing photos. Keep in mind that in Colorado, each season is very different, sunrise and sunset times change a lot, and the mountains have their own rhythm. I’ll help you pick the perfect time so your photos look amazing no matter the season.
                    </p>
                    </Accordion>
                    {/* 14 */}
                    <Accordion title="Do you have recommended vendors for engagement sessions?">
                    <p>
                         Yes! If you’re planning an engagement session and want a little extra support, I’ve curated a list of vendors I’ve personally worked with and trust, like makeup artists, videographers, and creative partners who understand outdoor, mountain, and adventure sessions. These are people who know how to enhance the experience without overcomplicating it.  
        
                         You can explore my recommended engagement-friendly vendors here: 
                        <Link to="/vendors-list">KB Photographer Vendor List</Link>.
                    </p>
                    </Accordion>
                    {/* 15 */}
                    <Accordion title="Do you travel outside Colorado for engagement sessions?">
                    <p>
                        Yes! Colorado is home and where I photograph most engagement sessions, but I’m always open to traveling for meaningful adventures. If you’re planning an engagement session somewhere special, a destination you love, a place tied to your story, or part of a bigger trip <Link to="/contact">reach out here</Link> and let’s talk through the details together.
                    </p>
                    </Accordion>

                </div>
                
            
            </section>

              <section className="formSection">
                          
        <h2 className="titlePlanning">Have something in mind? Let's Chat! </h2>
              
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