import React from 'react';

const GameFeatures = () => {
  return (
    <section className="container p-6 mt-25 ">
      <div className="flex items-center sm:flex-wrap sm:justify-center lg:flex-nowrap lg:justify-between lg:space-x-10">
        <div className="sm:text-center lg:text-left lg:w-3/5">
          <h2 className="titleStyle">Why Play Gates of Olympus?</h2>
          <span className="w-22 h-1 bg-amber-400 block rounded-full mt-10 mx-auto" />

          <p className="mt-10 text-lg">
            Gates of Olympus Pragmatic Play is a unique online slot that offers
            an exhilarating gaming experience with its innovative Pay Anywhere
            system.
          </p>
          <p className="mt-8 text-lg">
            Unlike traditional slots, this game rewards players based on
            clusters of symbols rather than fixed paylines, increasing the
            chances of big wins. Whether you choose to play the Gates of Olympus
            demo or play for free, youll enjoy stunning graphics, engaging
            gameplay, and frequent bonus rounds.
          </p>
          <p className="mt-12 text-lg">
            The game features Zeus as the main character, who randomly strikes
            the reels with multipliers that can significantly boost your
            winnings. Try Gates of Olympus play today and discover why its one
            of the most popular slots in the industry!
          </p>
          <div />
        </div>

        <div className="sm:mx-auto sm:mt-10 lg:w-2/5 lg:text-right">
          <img
            src="/image/intro-image.webp"
            alt=" Gates of Olympus Play image"
            className="w-86 inline rounded-4xl shadow-1"
          />
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
