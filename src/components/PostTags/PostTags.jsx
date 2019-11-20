import React, { Component } from "react";
import _ from "lodash";
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
              to={`/tags/${_.kebabCase(tag)}`}
              className="tag mr-2"
            >
              <button type="button">{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
