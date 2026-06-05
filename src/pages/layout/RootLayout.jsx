import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import logo from "../../assets/logos/logo.png";
import br from "../../assets/logos/br.jpg";
import us from "../../assets/logos/us.png";
import { useState } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import RedirectHandler from "../../components/RedirectHandler";

export default function RootLayout () {

  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()
  const isPT = location.pathname.startsWith("/pt")

  const path = (route) => {
    return isPT ? `/pt${route}` : route
  }

  return (
    <>
     <Helmet>
        <html lang="en" />
        <meta name="author" content="Karina Bittencourt Photographer" />
        <meta property="og:site_name" content="Karina Bittencourt Photographer" />
        <meta property="og:locale" content="en_US" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Karina Bittencourt Photographer",
          "url": "https://www.kbphotographer.com",
          "telephone": "",
          "image": "https://www.kbphotographer.com/logo.png",
          "description": "Latina photographer based in Colorado specializing in weddings, elopements, engagements, family portraits, couples, and ski & snow sports photography.",
          "areaServed": [
            "Broomfield", "Denver", "Westminster", "Arvada",
            "Thornton", "Fort Collins", "Estes Park", "Boulder",
            "Golden", "Winter Park", "Frisco", "Dillon", "Vail", "Aspen",
            "Steamboat", "Breckenridge", "Keystone", "Summit County",
            "Rocky Mountain National Park", "Colorado", "Arapahoe Basin"
          ],
          "knowsAbout": [
            "Wedding Photography",
            "Micro Wedding Photography",
            "Elopement Photography",
            "Engagement Photography",
            "Family Portrait Photography",
            "Couple Portrait Photography",
            "Portrait Photography",
            "Ski Photography",
            "Snowboarding Photography",
            "Snow Sports Photography",
            "Headshots",
            "Branding Photography",
            "Lifestyle Photography"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Photography Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding & Elopement Photography" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Micro Wedding Photography" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engagement Photography" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family & Couple Portraits" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ski & Snow Sports Photography" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Headshots" } }
            ]
          },
          "sameAs": [
            "https://www.instagram.com/bittencourt_k",
            "https://www.facebook.com/KarinaBittencourtPhotographer",
            "https://br.pinterest.com/karinabittencourtphotographer"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Broomfield",
            "addressRegion": "CO",
            "addressCountry": "US"
          }
        })}</script>
      </Helmet>

      <ScrollToTop />   
      <RedirectHandler />

      <header className="header">
        <div className="topBar">
          <nav className="navbar">

            {/* LOGO */}
            <Link to={path("/")} className="logo">
              <img src={logo} alt="Karina Bittencourt Photographer" />
            </Link>

            {/* NAV LINKS */}
            <div className={`navLinks ${menuOpen ? "open" : ""}`}>

              <Link to={path("/")} onClick={() => setMenuOpen(false)}>
                {isPT ? "INÍCIO" : "HOME"}
              </Link>

              <Link to={path("/about")} onClick={() => setMenuOpen(false)}>
                {isPT ? "SOBRE" : "ABOUT"}
              </Link>

              <Link to={path("/contact")} onClick={() => setMenuOpen(false)}>
                {isPT ? "CONTATO" : "CONTACT"}
              </Link>

              <Link to={path("/blog")} onClick={()=> setMenuOpen(false)}>
                BLOG
              </Link>

              <Link to={path("/galleries")} onClick={() => setMenuOpen(false)}>
                {isPT ? "GALERIAS" : "GALLERIES"}
              </Link>

              <Link to={path("/faq")} onClick={()=> setMenuOpen(false)}>
                {isPT ? "DÚVIDAS" : "FAQ"}
              </Link>

              <Link to={path("/engagements")} onClick={()=> setMenuOpen(false)}>
                {isPT ? "NOIVADOS" : "ENGAGEMENTS"}
              </Link>

              <Link to={path("/ski")} onClick={()=> setMenuOpen(false)}>
                SKI
              </Link>

              <Link to={path("/headshots")} onClick={()=> setMenuOpen(false)}>
                HEADSHOTS
              </Link>

              <Link to={path("/store")} onClick={()=> setMenuOpen(false)}>
                {isPT ? "LOJA" : "STORE"}
              </Link>

              {/* FLAGS dentro do menu */}
              <div className="flags">
                <Link to="/pt" onClick={() => setMenuOpen(false)}>
                  <img src={br} alt="Português" />
                </Link>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img src={us} alt="English" />
                </Link>
              </div>
            </div>

            {/* HAMBURGER */}
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={()=> setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </nav>
        </div>
      </header>

      <main className="mainContent">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerNav">

            <div>
              <Link to={path("/about")} className="titleFooter">
                {isPT ? "Sobre" : "About"}
              </Link>

              <div className="regularText">
                <p>Latina Owned</p>
                <p>Speaks English | Português</p>
                <p>All bodies are beautiful</p>
                <p>All humans celebrated here</p>
              </div>
            </div>

            <div>
              <p className="titleFooter">
                {isPT ? "Recursos" : "Resources"}
              </p>

              <Link to={path("/store")}>
                {isPT ? "Comprar produtos" : "Buy Art Work & Products"}
              </Link>

              <Link to={path("/blog")}>
                {isPT ? "Visitar Blog" : "Visit Blog"}
              </Link>

              <Link to={path("/faq")}>
                {isPT ? "Dúvidas" : "FAQ"}
              </Link>

              <Link to={path("/vendors-list")}>Vendor List</Link>

              <Link to={path("/become-vendor")}>Become a Vendor</Link>

              <Link to={path("/privacy-policy")}>
                {isPT ? "Política de Privacidade" : "Privacy Policy"}
              </Link>
            </div>

            <div>
              <p className="titleFooter">
                {isPT ? "Área do Cliente" : "Client Area"}
              </p>

              <Link to={path("/galleries")}>
                {isPT ? "Ver Galerias" : "View Galleries"}
              </Link>

              <a href="https://kbphotographer.hbportal.co/app/login" target="_blank">
                Client Portal
              </a>

              <Link to={path("/blog")}>
                {isPT ? "Visitar Blog" : "Visit Blog"}
              </Link>
            </div>

            <div>
              <p className="titleFooter">Powered By</p>
              <a href="https://kbphotographer.pic-time.com/referral" target="_blank" className="regularText">Pic-time </a>
              <a href="https://app.honeybook.com/signup?redirect=true&code=karina4278693" target="_blank" className="regularText">HoneyBook</a>
            </div>

            <div>
              <p className="titleFooter">
                {isPT ? "Redes Sociais" : "Stay in Touch"}
              </p>

              <div className="socialIcons">
                <a href="https://br.pinterest.com/karinabittencourtphotographer/?actingBusinessId=1077064204541947953" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-pinterest"></i>
                </a>

                <a href="https://www.instagram.com/bittencourt_k" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>

                <a href="https://www.facebook.com/KarinaBittencourtPhotographer" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}