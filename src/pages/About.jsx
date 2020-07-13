import React from 'react';
import './Pages.css';
import { Link } from 'react-router-dom';
import RouteButton from '../components/RouteButton';

const About = () => (
  <div>
    <Link className="link" to="/">
      <RouteButton> Back </RouteButton>
    </Link>
    <div className="page">
      <div className="wrapper">
        <div className="header">
          About.
        </div>
        <div>
          This web app is a multitool for doing a bunch of things. It was built by
          {' '}
          <a href="http://www.jancharatan.com/">
            Jan Charatan
          </a>
          , a computer science
          student at Pomona College using
          {' '}
          <a href="https://www.reactjs.org">
            React
          </a>
          . If you have any suggestions or comments, you can email Jan at
          jan.charatan@gmail.com or you can
          {' '}
          <a href="https://github.com/jancharatan/calculator">submit a pull request</a>
          .
        </div>
        <div className="footer">
          Created in July 2020 by Jan Charatan.
        </div>
      </div>
    </div>
  </div>

);

export default About;
