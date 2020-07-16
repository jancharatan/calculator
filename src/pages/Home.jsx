import React from 'react';
import './Pages.css';
import { Link } from 'react-router-dom';
import RouteButton from '../components/RouteButton';

const Home = () => (
  <div>
    <Link className="link" to="/about">
      <RouteButton> About </RouteButton>
    </Link>
    <div className="page">
      <div className="wrapper">
        <div className="header">Select a tool.</div>
        <Link className="link" to="/calculator">
          <RouteButton isBig>Calculator</RouteButton>
        </Link>
        <Link className="link" to="/convert">
          <RouteButton isBig notFirst>
            Convert Units
          </RouteButton>
        </Link>
        <div className="footer">Created in July 2020 by Jan Charatan.</div>
      </div>
    </div>
  </div>
);

export default Home;
