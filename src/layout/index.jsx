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
      <div className="font-sans container mx-auto p-4">
        <Navbar />

        <Helmet
          bodyAttributes={{
            class: `theme ${themeClass}`
          }}
        >
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <script type="text/javascript">{`(function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
  (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
  e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
  })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

  _st('install','5hZaKcJz5iWg-oKoJWqP','2.0.0');`}</script>
        </Helmet>

        {/* Page Body should go here */}
        {children}

        {/* About my website */}
        <div className="w-full my-16 bg-purple-700 p-5 rounded-lg text-white">
          <h4 className="mt-0">What is this Site?</h4>
          <p className="text-sm tracking-wide leading-relaxed">
            <a className="underline" href="https://viralpatel.blog">
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

        <footer className="flex items-center justify-between w-full mb-5 mt-10">
          <div className="flex w-1/4 justify-between text-sm">
            <a
              href="https://ko-fi.com/viralpatel"
              className="text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ko-Fi
            </a>
            <a
              href="https://www.patreon.com/bePatron?u=26750695"
              className="text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patreon
            </a>
            <a
              href="https://viral.substack.com/subscribe"
              className="text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter
            </a>
          </div>
          <div className="flex w-3/4 justify-end items-center">
            <a
              href="https://github.com/viral810"
              className="text-gray-600 hover:text-gray-900 w-8 mr-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github - viral patel" />
            </a>
            <a
              href="https://gitlab.com/viral_810"
              className="text-gray-600 hover:text-gray-900 w-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitlab} alt="gitlab - viral patel" />
            </a>
          </div>
        </footer>
        <script type="text/javascript">{`<script>
window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'STEN5';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.2.0";
})(window,document,window['_fs_namespace'],'script','user');
</script>`}</script>
      </div>
    );
  }
}

export default MainLayout;
