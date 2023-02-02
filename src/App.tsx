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
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/surprise">a surprise</Link>
          </li>
        </ul>
        <div className="spacer"></div>
        <pre className="footer">by snack break studios</pre>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2 className="title">time for a <strong>snack</strong>?</h2>
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
      <table>
        <tr>
          <td>
            vivian!

          </td>
          <td>
            shannon!

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
    </div>
  );
}

function Surprise() {
  return (
    <div>
      <h2>a surprise</h2>
    </div>
  );
}