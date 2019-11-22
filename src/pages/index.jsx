import React, { Component } from "react";
import Img from "gatsby-image";

import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import patreon from "../../content/thumbnails/patreon.png";

import { Link, graphql } from "gatsby";

class HomePage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });

    return (
      <Layout>
        <div className='about-container'>
          <Helmet title={`Home | ${config.siteTitle}`} />
        </div>
        <div className='flex items-center justify-between py-5'>
          <div className='flex-initial items-center py-10 w-9/12'>
            <h2 className='text-3xl font-bold'>I'm Viral Patel</h2>
            <p className='w-3/4 text-lg my-5'>
              Toronto based Full Stack Developer working with teams and startups
              to create websites, scalable web applications and systems that
              focus on performance, amazing UI/UX design, and simplicity.
            </p>
            <a
              href='https://www.patreon.com/bePatron?u=26750695'
              data-patreon-widget-type='become-patron-button'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block w-10'
            >
              <img
                src={patreon}
                alt='become-patron-button'
                className='shadow-xl rounded'
              />
            </a>
          </div>
          <div className='inline-flex justify-end w-3/12'>
            <img
              src='https://media.licdn.com/dms/image/C5603AQGc2Z7FneVkFg/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=Hd_CwEsKXacRUNDU4MZSrpTtOr3SR9kyGs8ktR19SxI'
              alt='Viral Patel'
              className='shadow-lg rounded'
            />
          </div>
        </div>
        {/* List Top 5 Articles Here */}
        <div className='flex w-full mb-8'>
          <h2 className='text-2xl font-bold'>Latest Articles</h2>
          <Link
            to='/blog'
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-xs py-1 px-3 rounded shadow-md inline-flex items-center ml-10'
          >
            <span>View All</span>
          </Link>
        </div>
        <ul className='flex flex-wrap w-full'>
          {postList.map(post => (
            <li
              key={post.path}
              className='my-1 w-full text-sm p-2 rounded tracking-wide hover:bg-gray-200 text-gray-600 hover:text-gray-900'
            >
              <Link to={post.path} className='flex items-center'>
                <Img
                  fixed={post.thumbnail.childImageSharp.fixed}
                  className='mr-5'
                />
                {post.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* List Companies you have worked for */}

        {/* Tech stack that I am familiar with */}

        {/* Footer to display some links to social account */}
      </Layout>
    );
  }
}

export default HomePage;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query TopArticles {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            thumbnail {
              childImageSharp {
                fixed(width: 35, height: 35) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
