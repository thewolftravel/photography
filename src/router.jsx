import { createBrowserRouter } from "react-router-dom"

// Layout
import RootLayout from "./pages/layout/RootLayout"

// EN pages
import Home from "./pages/Home"
import About from "./pages/About"
import Galleries from "./pages/Galleries"
import Faq from "./pages/Faq"
import Engagements from "./pages/Engagements"
import Ski from "./pages/Ski"
import Headshots from "./pages/Headshots"
import Contact from "./pages/Contact"
import Store from "./pages/Store"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Policy from "./pages/subpages/Policy"
import VendorsList from "./pages/subpages/VedorsList"
import BecomeVendor from "./pages/subpages/BecomeVendor"
import FaqPT from "./pages/pt/FaqPT"

// PT pages
import HomePT from "./pages/pt/HomePT"
import AboutPT from "./pages/pt/AboutPT"
import ContactPT from "./pages/pt/ContactPT"
import BlogPT from "./pages/pt/BlogPT"
import PolicyPT from "./pages/pt/PolicyPT"
import BlogPostPT from "./pages/pt/BlogPostPT"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // ENGLISH ROUTES
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "galleries", element: <Galleries /> },
      { path: "faq", element: <Faq /> },
      { path: "engagements", element: <Engagements /> },
      { path: "ski", element: <Ski /> },
      { path: "headshots", element: <Headshots /> },
      { path: "contact", element: <Contact /> },
      { path: "store", element: <Store /> },

      {
        path: "blog",
        children: [
          { index: true, element: <Blog /> },
          { path: ":slug", element: <BlogPost /> }
        ]
      },

      { path: "privacy-policy", element: <Policy /> },
      { path: "vendors-list", element: <VendorsList /> },
      { path: "become-vendor", element: <BecomeVendor /> }
    ]
  },

  // =========================
  // 🇧🇷 PORTUGUESE VERSION
  // =========================
{
  path: "pt",
  element: <RootLayout isPT={true} />,
  children: [
    { index: true, element: <HomePT /> },
    { path: "about", element: <AboutPT /> },
    { path: "contact", element: <ContactPT /> },

    
    { path: "blog", 
      children: [
        { index: true, element: <BlogPT /> },
        { path: ":slug", element: <BlogPostPT /> }
      ]
    },

    { path: "privacy-policy", element: <PolicyPT /> },
    { path: "faq", element: <FaqPT /> },

    { path: "galleries", element: <Galleries /> },
    { path: "engagements", element: <Engagements /> },
    { path: "ski", element: <Ski /> },
    { path: "headshots", element: <Headshots /> },
    { path: "store", element: <Store /> },
  ]
}
]
)

export default router