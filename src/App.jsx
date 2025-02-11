import React from 'react';

import GameFeatures from './components/GameFeatures';
import GameTable from './components/GameTable';

import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Benefits from './components/Benefits';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <GameFeatures />
      <GameTable />
      <Benefits />
      <Footer />
    </div>
  );
};

export default App;
