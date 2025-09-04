// import React from 'react'

// const page = ({ params }) => {
//     const { slug } = params;
//     console.log(slug);
//     return (
//         <div>page</div>
//     )
// }

// export default page

import React from 'react';
import { blogPosts } from '@/app/constant/Blog_post.txt.js';
import BlogDetails from '@/app/modules/Blog/detail-blog';

const Page = async ({ params }) => {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
   <BlogDetails post={post} />
  );
};

export default Page;
