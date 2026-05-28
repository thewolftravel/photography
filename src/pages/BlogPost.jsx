import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts } from "./posts";
import "../styles/blog.css";

const siteUrl = "https://kbphotographer.com";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h2 className="postNotFound">Post not found</h2>;
  }

  const PostComponent = post.component;

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${siteUrl}${post.image}`,
    "url": `${siteUrl}/blog/${post.slug}`,
    "author": {
      "@type": "Person",
      "name": "Karina Bittencourt",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Karina Bittencourt Photographer",
      "url": siteUrl
    },
    "keywords": `${post.category}, Colorado photography, ${post.categoryFolder} photography, KB Photographer`
  };

  return (
    <>
    <Helmet>
      <title>{post.title} | Karina Bittencourt Photographer</title>
      <meta name="description" content={post.excerpt} />
      <link rel="canonical" href={`${siteUrl}/blog/${post.slug}`} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:url" content={`${siteUrl}/blog/${post.slug}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />

      <script type="application/ld+json">
        {JSON.stringify(blogPostSchema)}
      </script>
    </Helmet>

      <PostComponent />
    </>
  );
}