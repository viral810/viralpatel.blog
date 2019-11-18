import React from "react";
import Helmet from "react-helmet";
import ThemeContext from "../context/ThemeContext";

import Navbar from "../components/Navbar";

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
          <script
            async
            src='https://c6.patreon.com/becomePatronButton.bundle.js'
          />
        </Helmet>
        {children}

        <footer className='flex w-full'>
          <a
            href='https://www.patreon.com/bePatron?u=26750695'
            data-patreon-widget-type='become-patron-button'
          >
            Become a Patron!
          </a>
        </footer>
      </div>
    );
  }
}
