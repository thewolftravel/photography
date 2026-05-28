import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts } from "./posts";
import "../styles/blog.css";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // categorias
  const categories = [
    "all",
    "couples",
    "family",
    "maternity",
    "portraits",
    "personal-branding",
    "sports",
    "others"
  ];

  // FILTRO 
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter(post => post.categoryFolder === selectedCategory);

  return (
    <>

      <Helmet>
        <title>Blog | Colorado Photography | Karina Bittencourt</title>
        <meta name="description" content="Stories, tips, and behind-the-scenes from engagement sessions, ski photography, elopements, headshots, and family portraits across Colorado." />
        <link rel="canonical" href="https://kbphotographer.com/blog" />
        <meta property="og:title" content="Blog | Karina Bittencourt Photographer" />
        <meta property="og:description" content="Stories and tips from Colorado engagement, elopement, ski, and portrait photography sessions." />
        <meta property="og:url" content="https://kbphotographer.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>


    <div className="blog-wrapper">

      {/* CATEGORIAS */}
      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat
              .replaceAll("-", " ")
              .replace(/\b\w/g, l => l.toUpperCase())}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="blog-container">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="blog-link"
          >
            <div className="blog-card">

              <div className="imageBlog-wrapper">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="card-content">
                <h2>{post.title}</h2>
                <h3 className="category">{post.category}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <span className="read-more">Continue reading</span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
    </>
  );
}


