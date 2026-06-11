import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from 'react-helmet-async'
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import ScrollItem from "../components/ScrollIItem";
import "swiper/css";
import "../styles/home.css";

// desktop images
import img10 from "../assets/home/img10.png";
import img11 from "../assets/home/img11.webp";
import img12 from "../assets/home/img12.webp";
import img13 from "../assets/home/img13.webp";
import img14 from "../assets/home/img14.png";
import img16 from "../assets/home/img16.png";
import img17 from "../assets/home/img17.webp";
import img18 from "../assets/home/img18.png";
import img24 from "../assets/home/img24.png";

import ka from "../assets/home/ka-half.webp";
import headshotsGif from "../assets/home/headshots.gif";
import lifestyleGif from "../assets/home/lifestyle.gif";
import weddingGif from "../assets/home/wedding.gif";

import review1 from "../assets/home/review1.png";
import review2 from "../assets/home/review2.png";
import review3 from "../assets/home/review3.png";
import review4 from "../assets/home/review4.png";
import review5 from "../assets/home/review5.png";

// mobile images
import img10mob from "../assets/home/mobile/img10-mobile.png";
import img11mob from "../assets/home/mobile/img11-mobile.webp";
import img12mob from "../assets/home/mobile/img12-mobile.webp";
import img13mob from "../assets/home/mobile/img13-mobile.webp";
import img24mob from "../assets/home/mobile/img24-mobile.jpg";
import couple4mob from "../assets/home/mobile/couple4-mobile.jpg";
import couple5mob from "../assets/home/mobile/couple5-mobile.jpg";
import snowboarding from "../assets/home/mobile/snowboarding-mobile.jpg"

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Karina Bittencourt Photographer | Colorado Adventure & Engagement Photography</title>
      <meta name="description" content="Latina photographer in Broomfield, Colorado. Specializing in mountain engagements, ski sessions, headshots, and lifestyle photography." />
      <link rel="canonical" href="https://kbphotographer.com" />
      <meta property="og:title" content="Karina Bittencourt Photographer | Colorado" />
      <meta property="og:description" content="Mountain engagements, ski sessions, headshots and lifestyle photography in Colorado." />
      <meta property="og:url" content="https://kbphotographer.com" />
      <meta property="og:type" content="website" />
    </Helmet>
      <ScrollItem>
        <section className="home-carousel">
          <Swiper
            modules={[Autoplay]}
            speed={2500}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <picture>
                <source media="(max-width: 768px)" srcSet={img10mob} />
                <img src={img10} alt="couple-elopment" />
              </picture>
            </SwiperSlide>

            <SwiperSlide>
              <picture>
                <source media="(max-width: 768px)" srcSet={img11mob} />
                <img src={img11} alt="snowboarding-sports-photography" />
              </picture>
            </SwiperSlide>

            <SwiperSlide>
              <picture>
                <source media="(max-width: 768px)" srcSet={img12mob} />
                <img src={img12} alt="family-portraits" />
              </picture>
            </SwiperSlide>

            <SwiperSlide>
              <picture>
                <source media="(max-width: 768px)" srcSet={img13mob} />
                <img src={img13} alt="" />
              </picture>
            </SwiperSlide>

            <SwiperSlide>
              <picture>
                <source media="(max-width: 768px)" srcSet={img24mob} />
                <img src={img24} alt="portraits-pictures" />
              </picture>
            </SwiperSlide>

            <SwiperSlide>
              <picture>
                <source media="(max-width: 768px)" srcSet={couple4mob} />
                <img src={img16} alt="portraits-pictures-family" />
              </picture>
            </SwiperSlide>

            <SwiperSlide>
              <picture>
                <source media="(max-width: 768px)" srcSet={couple5mob} />
                <img src={img17} alt="proposal-picture-moutain-engagement" />
              </picture>
            </SwiperSlide>
          </Swiper>
        </section>
      </ScrollItem>

      <ScrollItem>
        <div className="moreAboutMeArea">
          <div className="aboutText">
            <h2 className="tittle">
              Inspired by adventure, emotion, and natural light
            </h2>
            <p>
              I’m Karina, and I love Colorado, these mountains, and the stories
              people create while exploring it. I want your photos to feel like
              you, even when we’re standing on the peak or racing down a slope at
              a ski resort. Whether it’s an engagement, a snowboarding adventure,
              or a family session, I’ll be there to capture your story
              authentically.
            </p>
            <Link to="/about">
              <button className="aboutBtn">More About Me</button>
            </Link>
          </div>

          <div className="photographer">
            <img src={ka} alt="photographer-colorado" />
          </div>
        </div>
      </ScrollItem>

      <ScrollItem>
        <div className="cardsSection">
          <div className="cards">
            <h2 className="tittle">Explore My Work</h2>

            <div className="cardsArea">
              
              <Link to="/engagements">
              <div className="card">
                
                <img src={weddingGif} alt="wedding-engagement-enlopment" />
                <h3 className="cardTitle">Couples</h3>

                <div className="cardLinks">
                  <p>ENGAGEMENT / ELOPMENT</p>
                </div>
              </div>
              </Link>
              
              <Link to="/headshots">
              <div className="card">
                 <img src={headshotsGif} alt="headshots-branding-portraits-professional-pictures-linkedin" />
                <h3 className="cardTitle">Branding</h3>

                <div className="cardLinks">
                  <p>HEADSHOTS</p>
                </div>
              </div>
              </Link>
              
              
              <Link to="/ski">
              <div className="card">
                <img src={lifestyleGif} alt="lifestyle-family-portraits-sports-snowsports-ski-snowboarding-pictures" />
                <h3 className="cardTitle">Lifestyle</h3>

                <div className="cardLinks">
                  <p>FAMILY / SPORTS</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </ScrollItem>

      <div className="reviewsArea">
        <section className="reviewcarousel">
          <h2 className="tittle">Reviews</h2>

          <Swiper
            modules={[Autoplay]}
            speed={3500}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={review1} alt="review"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={review2} alt="review" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={review3}  alt="review"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={review4} alt="review"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={review5} alt="review"/>
            </SwiperSlide>
          </Swiper>
        </section>

        <a
          href="https://www.thumbtack.com/co/broomfield/headshots/karina-bittencourt-photographer/service/515883517792149513"
          target="_blank"
          rel="noopener noreferrer"
          className="seeReviewsBtn"
        >
          See all reviews
        </a>
      </div>
    </>
  );
}