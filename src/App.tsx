import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="snackcontent" element={<SnackContent />} />
          <Route path="surprise" element={<Surprise />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav className="menu">
        <img className="logo" src="/crocogator.png" />
        <span><strong>snack break studio</strong> is a small collective based out of Seattle, WA. We make comics, illustrations and zines of all flavors!
        </span>
        
        <div className="bio-links">Vivian
        <a href="https://www.vivianlikesfruit.com/" target="_blank" rel="noopener noreferrer">Website</a>
        <a href="https://www.instagram.com/vivianlikesfruit/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        
        <div className="bio-links">
        Shannon
        <a href="https://shannonkao.com/" target="_blank" rel="noopener noreferrer">Website</a>
        <a href="https://twitter.com/mellifics" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        
        <div className="spacer"></div>
        <pre className="footer">by snack break studio</pre>
      </nav>

      <div className="content">
        <span className="bio">
            <span><strong>Vivian</strong> is a comics artist, illustrator, basketball pro, and expert chef currently living in Seattle. She can be found wearing the color yellow, often in or near the water (very like a duck), equipped with watercolors and a camera (not like a duck). Vivian tells funny, charming, and kind stories about occurences both everyday and fantastic.</span>
            <span>Vivian likes fruits and hates carrots.</span>
            <span>If you see Vivian, ask her to dunk! She can do it! If she says no she is lying.</span>
        
        </span>
        <span className="bio">
            <span><strong>Shannon</strong> is not a ghost (probably). Shannon has two other things that live in her house. </span>
            <span>Shannon wears glasses, and owns a kayak, and likes pointy trees. She is good at drawing non moving things (like rocks + bus stops) and moving things (like trees and rivers) and extra moving things (like people (even though she doesn't like it)).</span>

            <span>If you are a mountain, or Sue Bird, give Shannon a call. She would like to be your friend.</span>
        
        </span>
        
        <div className="snack-comic">
          <img src="/Snacking1.png" />
          <img src="/Snacking2.png" />
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <div>
      
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>projects</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>about</h2>
      <table className="about">
        <tr>
          <td>
            <strong>vivian!</strong>

          </td>
          <td>
            <strong>shannon!</strong>

          </td>
        </tr>
        <tr>
          <td className="vivian-about-text">
            <img src="/vvn.png" alt="A picture of Vivian lookin at cilantro" />
            <div>Vivian is a comics artist, illustrator, basketball pro, and expert chef currently living in Seattle. She can be found wearing the color yellow, often in or near the water (very like a duck), equipped with watercolors and a camera (not like a duck). Vivian tells funny, charming, and kind stories about occurences both everyday and fantastic.</div>
            <div>Vivian likes fruits and hates carrots.</div>
            <div>If you see Vivian, ask her to dunk! She can do it! If she says no she is lying.</div>
          </td>
          <td>
            shannon is not a duck
          </td>
        </tr>
      </table>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>contact</h2>
      <div className="test-contact">
      </div>
    </div>
  );
}

function SnackContent() {
  return (
    <div className="snackcontent">
      <h1>snack content</h1>
      <img src="/Snacking1.png" />
      <img src="/Snacking2.png" />
    </div>
  )
}

function Surprise() {
  return (
    <div>
      <h2>a surprise</h2>
    </div>
  );
}