import React from 'react';
import { Link } from 'react-router-dom';
import RouteButton from '../components/RouteButton';
import './Pages.css';

const Convert = () => (
  <div>
    <Link className="link" to="/">
      <RouteButton> Back </RouteButton>
    </Link>
    <div className="page">
      <div className="wrapper">
        <div className="header">
          Convert Units.
        </div>
        <div>
          Coming soon!
        </div>
        <div className="footer">
          Created in July 2020 by Jan Charatan.
        </div>
      </div>
    </div>
  </div>
);

export default Convert;
