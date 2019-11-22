import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
// import "./listing.css";

class Listing extends React.Component {
  renderPaging() {
    const {
      pageContext: { currentPageNum, pageCount }
    } = this.props;
    const prevPage = currentPageNum - 1 === 1 ? "/blog" : `/blog/${currentPageNum - 1}/`;
    const nextPage = `/blog/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className='paging-container'>
        {!isFirstPage && <Link to={prevPage} className="text-gray-500 hover:text-gray-700 mr-3">Previous</Link>}
        {pageCount > 1 && [...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/blog" : `/blog/${pageNum}/`}
              className="p-3 rounded shadow mr-3 hover:bg-gray-200"
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage} className="text-gray-500 hover:text-gray-700 mr-3">Next</Link>}
      </div>
    );
  }

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className='listing-container'>
          <div className='posts-container'>
            <Helmet title={config.siteTitle} />
            <SEO />
            <PostListing postEdges={postEdges} />
          </div>
          {this.renderPaging()}
        </div>
      </Layout>
    );
  }
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
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
