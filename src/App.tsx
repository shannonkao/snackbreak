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
            <Link to="/snackcontent">snack content</Link>
          </li>
          <li>
            <Link to="/surprise">a surprise</Link>
          </li>
        </ul>
        <div className="spacer"></div>
        <pre className="footer">by snack break studio</pre>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, augue a convallis facilisis, eros magna luctus enim, et pharetra nulla ante sed orci. Quisque hendrerit, sem sed fermentum consectetur, libero diam pharetra nulla, sit amet porttitor diam orci vel tortor. Vestibulum porta orci ac metus hendrerit euismod. Phasellus aliquam eget neque at elementum. Donec iaculis ante sollicitudin ligula rhoncus dapibus. Nunc posuere semper ex, ac blandit metus eleifend a. Nam luctus quam fermentum elit consequat, nec porta augue finibus. Morbi nec eros tempor, cursus orci eu, venenatis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida sem magna, nec tincidunt sapien venenatis a.

        In hac habitasse platea dictumst. Integer elementum tempus pretium. Nam vestibulum quis diam ut posuere. Donec placerat ex non libero tincidunt auctor. Nam pulvinar pharetra est, accumsan vulputate lorem. Phasellus tempor elit et condimentum accumsan. Integer egestas, metus nec viverra accumsan, lacus tellus bibendum leo, a elementum nisl leo id velit. In ullamcorper nulla a quam iaculis, id malesuada tellus mollis. Fusce eu nibh at massa ultricies pretium.

        Vivamus sit amet viverra nibh. Pellentesque molestie elit ut finibus tempus. Praesent rutrum et nunc vel faucibus. Etiam tincidunt dapibus nunc molestie varius. Duis in suscipit mauris, ut aliquet turpis. Ut elementum justo quis iaculis porta. Vivamus sit amet ante vitae leo suscipit facilisis vel a neque. Sed viverra imperdiet ante. Phasellus at massa diam. Mauris condimentum egestas elit, at lobortis ante egestas nec. Fusce eu rhoncus felis. Donec mattis lorem non venenatis tincidunt. Quisque a risus non urna facilisis malesuada. Praesent vitae est sollicitudin, tempor purus nec, condimentum quam. Donec non quam non dui iaculis sodales.

        Ut vehicula orci in velit dapibus, ut facilisis felis scelerisque. Pellentesque ac tellus venenatis, scelerisque erat vel, commodo lorem. Sed pharetra leo non blandit dictum. Vivamus at velit vitae erat convallis tincidunt quis viverra sem. Mauris ullamcorper id eros vitae finibus. In hac habitasse platea dictumst. Donec non laoreet massa. Integer eleifend nisl orci, vitae consectetur leo porta eget.

        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis fringilla felis tortor. Curabitur dapibus sapien a congue molestie. In egestas, diam non iaculis rutrum, justo enim tristique purus, et lacinia ante tortor in nisi. Integer accumsan tortor sit amet tortor eleifend, vel porta tortor sagittis. Phasellus interdum rutrum tellus. Sed ornare dignissim condimentum. Suspendisse eleifend purus nec est tempor consectetur. Duis aliquet in arcu vitae mollis. Donec eleifend, lectus ac condimentum malesuada, elit nunc sagittis tortor, eget congue purus ex quis leo.
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