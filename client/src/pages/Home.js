import React from 'react';
import Section from '../components/Section';
import '../styles/global.css';

const Home = () => {
  return (
    <div className="grid-container">
      <Section title="Chest" />
      <Section title="Leg" />
      <Section title="Back" />
      <Section title="Full Body" />
    </div>
  );
};

export default Home;
