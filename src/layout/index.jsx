import React from "react";
import Helmet from "react-helmet";
import ThemeContext from "../context/ThemeContext";

import Navbar from "../components/Navbar";
import github from "../../content/thumbnails/github.png";
import gitlab from "../../content/thumbnails/gitlab.png";
import favicon from "../favicon.png";

import config from "../../data/SiteConfig";
import "./index.css";

class MainLayout extends React.Component {
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
          <link rel='shortcut icon' type='image/png' href={favicon} />
        </Helmet>

        {/* Page Body should go here */}
        {children}

        {/* About my website */}
        <div className='w-full my-16 bg-purple-700 p-5 rounded-lg text-white'>
          <h4 className='mt-0'>What is this Site?</h4>
          <p className='text-sm tracking-wide leading-relaxed'>
            <a className='underline' href='https://viralpatel.blog'>
              viralpatel.blog
            </a>{" "}
            is started by me, Viral Patel, as a place to write posts and blogs
            about problems that I personally face during my day to day and share
            new learnings about software development work. Even though there is
            abundant of information out there via various personal blogs or
            blogs written by technical companies, day in and day out, We as
            software developers face different problems. By starting out this
            blog, I wish to explore different problem solving patterns and
            software design practices that will make easier to build quality and
            useful software.{" "}
          </p>
        </div>

        <footer className='flex items-center justify-between w-full mb-5 mt-10'>
          <div className='flex w-1/4 justify-between text-sm'>
            <a
              href='https://ko-fi.com/viralpatel'
              className='text-gray-600 hover:text-gray-900'
              target='_blank'
              rel='noopener noreferrer'
            >
              Ko-Fi
            </a>
            <a
              href='https://www.patreon.com/bePatron?u=26750695'
              className='text-gray-600 hover:text-gray-900'
              target='_blank'
              rel='noopener noreferrer'
            >
              Patreon
            </a>
            <a
              href='https://viral.substack.com/subscribe'
              className='text-gray-600 hover:text-gray-900'
              target='_blank'
              rel='noopener noreferrer'
            >
              Newsletter
            </a>
          </div>
          <div className='flex w-3/4 justify-end items-center'>
            <a
              href='https://github.com/viral810'
              className='text-gray-600 hover:text-gray-900 w-8 mr-5'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={github} alt='github - viral patel' />
            </a>
            <a
              href='https://gitlab.com/viral_810'
              className='text-gray-600 hover:text-gray-900 w-6'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={gitlab} alt='gitlab - viral patel' />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainLayout;
