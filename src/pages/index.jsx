import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Home | ${config.siteTitle}`} />
        </div>
        <div className="flex items-center justify-between py-5">
          <div className="flex-initial items-center py-10">
            <h2 className="text-3xl font-bold mb-5">I'm Viral Patel</h2>
            <p className="w-3/4">Toronto based Full Stack Developer working with teams and startups to create websites, scalable web applications and systems that focus on performance, amazing UI/UX design, and simplicity.</p>
          </div>
          <div className="flex-initial items-center w-1/4">
            <img src="https://media.licdn.com/dms/image/C5603AQGc2Z7FneVkFg/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=Hd_CwEsKXacRUNDU4MZSrpTtOr3SR9kyGs8ktR19SxI" alt="Viral Patel" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
