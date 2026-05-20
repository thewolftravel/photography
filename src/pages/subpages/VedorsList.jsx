import "../../styles/vendors.css"
import vendor1 from"../../assets/vendors/vendor1.jpg"
import vendor2 from"../../assets/vendors/vendor2.webp"
import vendor3 from"../../assets/vendors/vendor3.png"
import vendor4 from"../../assets/vendors/vendor4.jpg"
import vendor5 from"../../assets/vendors/vendor5.webp"
import vendor6 from "../../assets/vendors/vendor6.jpg"
import vendor7 from "../../assets/vendors/vendor7.png";

import { Link } from "react-router-dom";


export default function VendorsLits() {
    return (
      <>
        <div className="vendors">
          <h2 className="tittle">Vendors List</h2>
        </div>

        <section className="vendorsList">
          <ul className="list">

            <li>
              <img src={vendor7} className="vendorsPhoto" alt="" />
              <h3 className="vendorsName">Jeff TheVideoGuy</h3>
              <p className="vendorsService">Videographer</p>
              <p className="vendorsDescription">
                I love "storytelling" in shooting and creative editing -
                creating not just a video record, but adding sparkle, brightness
                and engaging polish to edits, design elements, fx and
                dialog/music mixing to build a more grand and exciting "mood"
                and story. It's great being part of "The Best Day Ever!" for
                most couples, along with learning and exploring new events,
                supporting my client's excitement and creativity and energy.
              </p>
              <a href="https://www.ourweddingphotovideo.com" target="_blank">
                Visit their website
              </a>
            </li>

            <li>
              <img src={vendor1} className="vendorsPhoto" alt="" />
              <h3 className="vendorsName">Brightfolk Gatherings</h3>
              <p className="vendorsService">Luxury Picnics</p>
              <p className="vendorsDescription">
                Brightfolk Gatherings, founded by Phoenix in Denver and Boulder,
                is a boutique picnic and event styling studio. What started as a
                love for beautiful tablescapes and meaningful connections has
                grown into creating spaces that feel genuine, thoughtful, and
                full of heart. Every experience blends soft, natural textures,
                grounded color palettes, and a touch of modern romance, helping
                couples slow down, savor the moment, and celebrate life’s most
                intimate occasions — from proposals and anniversaries to other
                special gatherings.
              </p>
              <a href="https://brightfolkgatherings.com/" target="_blank">
                Visit their website
              </a>
            </li>

            <li>
              <img src={vendor6} className="vendorsPhoto" alt="" />
              <h3 className="vendorsName">Gabby</h3>
              <p className="vendorsService">Web Developer</p>
              <p className="vendorsDescription">
                Hey! I’m Gabby, a Web Developer specializing in modern,
                high-converting websites for entrepreneurs, creatives, and
                growing businesses. I bring your ideas to life through clean
                design, responsive development, and seamless user experiences.
                From portfolio sites to full web platforms, my goal is to create
                an online presence that attracts your ideal clients and elevates
                your brand with confidence. Just like this website—you’re seeing
                my work in action.
              </p>
              <a href="https://gabbycarvalho.github.io/gabriela-portfolio/#/contact">
                Visit their website
              </a>
            </li>

            <li>
              <img src={vendor3} className="vendorsPhoto" alt="" />
              <h3 className="vendorsName">Veiled Rose Films</h3>
              <p className="vendorsService">Videographer</p>
              <p className="vendorsDescription">
                Brian Alan is a Colorado-based wedding videographer with over a
                decade of experience capturing love stories with emotional depth
                and cinematic flair. Through his brand, Veiled Rose Films, he
                offers luxury heirloom films handcrafted to preserve the real
                moments that matter most. With a calming presence and a
                commitment to storytelling, Brian blends seamlessly into the
                day, helping couples relive the joy, laughter, and heartfelt
                emotion of their wedding for years to come.
              </p>
              <a href="https://www.veiledrosefilms.com/" target="_blank">
                Visit their website
              </a>
            </li>


            <li>
              <img src={vendor4} className="vendorsPhoto" alt="" />
              <h3 className="vendorsName">Natasha Clawson</h3>
              <p className="vendorsService">Marketing | Branding</p>
              <p className="vendorsDescription">
                Hey! I’m Natasha Clawson, and I specialize in helping
                high-achieving women—authors, speakers, coaches, and course
                creators—craft compelling brands and marketing systems that
                position them as leaders in their industry. My expertise spans
                branding, web development, social strategy, and digital
                marketing, all designed to help you attract your dream clients
                with confidence.
              </p>
              <a href="https://natashaclawson.com/" target="_blank">
                Visit their website
              </a>
            </li>

            <li>
              <div className="vendorCTA">
                <h2>Would You Like to Join Our Vendor List?</h2>
              </div>
              <h3 className="vendorsName">Let's Chat!</h3>
              <Link to="/become-vendor">Become a Vendor</Link>
            </li>
          </ul>
        </section>
      </>
    );
}