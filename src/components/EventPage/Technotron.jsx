// Technotron.js
import React from 'react';
import './technotron.css';
import icon1 from '../../assets/images/Logo/space.png';
import icon2 from '../../assets/images/Logo/space.png';
import icon3 from '../../assets/images/Logo/space.png';
import icon4 from '../../assets/images/Logo/space.png';
import icon5 from '../../assets/images/Logo/space.png';
import icon6 from '../../assets/images/Logo/space.png';

const Technotron = () => {
  const iconsRow1 = [
    { name: 'Mechanema', background: icon1, styles: { borderRadius: '50%', boxShadow: '10px 10px 0px 0px red', padding:'4rem' } },
    { name: 'Cybernatics', background: icon2, styles: { borderRadius: '50%', boxShadow: '10px 10px 0px 0px green' } },
    { name: 'Sanganeeki', background: icon3, styles: { borderRadius: '50%', boxShadow: '10px 10px 0px 0px blue' } },
  ];

  const iconsRow2 = [
    { name: 'Lycra', background: icon4, styles: { borderRadius: '50%', boxShadow: '10px 10px 0px 0px orange' } },
    { name: 'Rasayanam', background: icon5, styles: { borderRadius: '50%', boxShadow: '10px 10px 0px 0px purple' } },
    { name: 'Citadel', background: icon6, styles: { borderRadius: '50%', boxShadow: '10px 10px 0px 0px yellow' } },
  ];

  return (
    <div className='main-tech'>
      <div className='tech'>
        {iconsRow1.map(({ name, background, styles }, index) => (
          <div key={index} className='moon-icon' data-name={name} style={{ backgroundImage: `url(${background})`, ...styles }}></div>
        ))}
      </div>
      <div className='tech'>
        {iconsRow2.map(({ name, background, styles }, index) => (
          <div key={index} className='moon-icon-2' data-name={name} style={{ backgroundImage: `url(${background})`, ...styles }}></div>
        ))}
      </div>

     
    </div>
  );
}

export default Technotron;
