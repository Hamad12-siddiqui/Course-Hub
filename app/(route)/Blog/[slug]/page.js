import React from "react";
import { blogPosts } from "@/app/constant/Blog_post.txt.js";
import BlogDetails from "@/app/modules/Blog/detail-blog";

const Page = ({ params }) => {
  const { slug } = params;

  // Slug ke basis pe blog post find karo
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  // Same category ke blogs (except current)
  const sameCategory = blogPosts.filter(
    (b) => b.category === post.category && b.slug !== post.slug
  );

  // Other category blogs
  // const otherCategory = blogPosts.filter(
  //   (b) => b.category !== post.category


   const otherCategory = blogPosts.filter(
    (b) => b.slug !== post.slug
  );


  return (
    <BlogDetails 
      post={post} 
      sameCategory={sameCategory} 
      otherCategory={otherCategory} 
    />
  );
};

export default Page;
