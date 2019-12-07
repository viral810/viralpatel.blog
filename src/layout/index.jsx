import React from "react";
import Helmet from "react-helmet";
import ThemeContext from "../context/ThemeContext";

import Navbar from "../components/Navbar";
import github from "../../content/thumbnails/github.png"
import gitlab from "../../content/thumbnails/gitlab.png"
import favicon from "../favicon.png"


import config from "../../data/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { dark, notFound } = this.context;
    const { children } = this.props;
    let themeClass = "";

    if (dark && !notFound) {
      themeClass = "dark";
    } else if (notFound) {
      themeClass = "not-found";
    }

    return (
      <div className='font-sans container mx-auto p-4'>
        <Navbar />

        <Helmet
          bodyAttributes={{
            class: `theme ${themeClass}`
          }}
        >
          <meta name='description' content={config.siteDescription} />
          <html lang='en' />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>

        {/* Page Body should go here */}
        {children}

        <footer className="flex items-center justify-between w-full mb-5 mt-10">
          <div className="flex w-1/4 justify-between text-sm">
            <a href="https://ko-fi.com/viralpatel" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Ko-Fi</a>
            <a href="https://www.patreon.com/bePatron?u=26750695" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Patreon</a>
            <a href="https://viral.substack.com/subscribe" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Newsletter</a>
          </div>
          <div className="flex w-3/4 justify-end items-center">
            <a href="https://github.com/viral810" className="text-gray-600 hover:text-gray-900 w-8 mr-5" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github - viral patel" />
            </a>
            <a href="https://gitlab.com/viral_810" className="text-gray-600 hover:text-gray-900 w-6" target="_blank" rel="noopener noreferrer">
              <img src={gitlab} alt="gitlab - viral patel" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
