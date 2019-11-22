import React from "react";
import Img from "gatsby-image";

import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    const { postEdges } = this.props;
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        <h1 className='text-6xl font-extrabold my-16'>Blog</h1>
        {/* Your post list here. */
        postList.map(post => (
          <Link
            to={post.path}
            key={post.title}
            className='flex items-center hover:bg-gray-200 text-gray-600 hover:text-gray-800 w-full my-3 py-5 px-3'
          >
            {post.thumbnail && (
              <Img
                fixed={post.thumbnail.childImageSharp.fixed}
                className='mr-5'
              />
            )}
            <h2 className='text-base font-medium'>{post.title}</h2>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
