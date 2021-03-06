import React, { Component } from "react";
import kebabCase from "lodash/kebabCase";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container my-6">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${kebabCase(tag)}`}
              className="tag m-2"
            >
              <button type="button">{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
