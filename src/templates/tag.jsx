import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className='tag-container'>
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <h2 className='text-2xl font-bold mb-2 mt-20'>
            {" "}
            {postEdges.length} posts found under {tag}{" "}
          </h2>

          <PostListing postEdges={postEdges} tag={tag} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
