import React from 'react';

const GameTable = () => {
  return (
    <section className="container py-18 mt-32 bg-black rounded-4xl">
      <h2 className="titleStyle">Game Information</h2>
      <span className="w-22 h-1 bg-amber-400 block rounded-full mt-10 mx-auto" />

      <table className="w-full mt-10 border border-gray-400">
        <thead>
          <tr className="bg-white text-black">
            <th className="p-2 border">Feature</th>
            <th className="p-2 border">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">RTP</td>
            <td className="p-2 border">96.5%</td>
          </tr>
          <tr>
            <td className="p-2 border">Max Win</td>
            <td className="p-2 border">5000x</td>
          </tr>
          <tr>
            <td className="p-2 border">Volatility</td>
            <td className="p-2 border">High</td>
          </tr>
          <tr>
            <td className="p-2 border">Bonus Features</td>
            <td className="p-2 border">
              Multipliers, Free Spins, Cascading Reels
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default GameTable;
