import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasons = {
  winter: 'Burr, it is chilly',
  summer: 'Lets hit the beach',
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  return (
    <div>
      <h1>{seasons[season]}</h1>
    </div>
  );
};

export default SeasonDisplay;
