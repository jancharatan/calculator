import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { RouteButton } from '../components/RouteButton';

export const Home = () => (
  <div className="home">
    <div className="wrapper">
      <div className="header">
        Select a tool.
      </div>
      <Link className="link" to="/calculator">
        <RouteButton> Calculator </RouteButton>
      </Link>
    </div>
  </div>
);