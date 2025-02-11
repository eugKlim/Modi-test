import React from 'react';

const Intro = () => {
  return (
    <section className="intro py-28">
      <div className="container flex justify-between items-center space-x-10 text-center">
        <div className=" mx-auto sm:w-full sm:px-6 md:px-20 xl:w-3/5">
          <h1 className="text-5xl font-bold text-yellow-400">
            Gates of Olympus Play
          </h1>
          <span className="w-22 h-1 bg-amber-400 block rounded-full mt-10 mx-auto" />
          <p className="my-22 text-lg leading-8">
            Experience the thrill of the legendary Gates of Olympus slot! This
            high-volatility game by Pragmatic Play takes you to the mythical
            world of the Greek gods. With cascading reels, multipliers, and free
            spins, Gates of Olympus offers an unforgettable experience. Try the
            Gates of Olympus demo to play for free or download the game now to
            enjoy real wins.
          </p>
          <button className="px-6 py-3 bg-green-600 hover:bg-red-700 text-white text-lg font-bold rounded-lg animate-bounce">
            Get Bonus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
