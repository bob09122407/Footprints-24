// Technotron.js

import React, { useState, useRef } from 'react';
import '../technotron.css'; // Make sure this path is correct
import icon1 from '../../../assets/images/Logo/space.png';
import icon2 from '../../../assets/images/Logo/space.png';
import icon3 from '../../../assets/images/Logo/space.png';
import icon4 from '../../../assets/images/Logo/space.png';
import icon5 from '../../../assets/images/Logo/space.png';
import icon6 from '../../../assets/images/Logo/space.png';
import Heading from '../../Common/Headings/Heading';
import { FaAmazon } from "react-icons/fa";
import Vid from "../../../assets/images/Logo/c.mp4";
const Citadel = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState(); // Set default tab
  const [selectedMenu, setSelectedMenu] = useState(null);
  const detailsRef = useRef(null);
  const [activeIcons, setActiveIcons] = useState({});
  // const sectionRef= useRef(null);

  const toggleMenu = (menu) => {
    if (selectedMenu === menu) {
      // If clicking on the same tab and menu, toggle isActive only
      setIsActive(!isActive);
    } else {
      // If clicking on a different tab or menu, update both selectedTab and selectedMenu
      setIsActive(true);
      // setSelectedTab(tab);
      setSelectedMenu(menu);
      // Scroll to details section
      // detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const toggle = (tabname) => {
    setSelectedTab(tabname);

    const sectionRef = document.getElementById(`${tabname.toLowerCase()}`);
    if (sectionRef) {
      const offset = 250; // You can adjust this value based on your layout
      const offsetTop = sectionRef.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };


  const iconsRow1 = [
    {
      name: 'CivIQ',
      background: icon1, 
      details:
       { info:
         ['Its Treasure hunt event based on immense consept and knowledge of  civil engineering.'],
          rules: 
          [''],
           specs:
            ['- Announce before two days of event'],
             team:
              [''] }
    },
    { name: 'CAD', background: icon2, details: { 
      info: ['In this Participants have to design a multipurpose building based on a given detailed problem statement.'], 
      specs: ['- Announce few days befor event'], 
      team: [''] } },

   
  ];

  const iconsRow2 = [
    { name: 'WWE', background: icon3, details: { 
      info: ['It is a paper presentation event along with case study with a solution based approach.'], 
      rules: [''],
       specs: ['- Announce few days befor event'], 
       team: [''] } },
    { name: 'Tremors',
     background: icon4, 
     details: {
       info: 
       ['Participants have to make a model using  popsicle sticks'],
        specs: ['- Announce few days befor event'], team: [''] } },
    
  ];

  const getSelectedDetails = () => {
    const selectedIcon = [...iconsRow1, ...iconsRow2].find(icon => icon.name === selectedTab);
    return selectedIcon ? selectedIcon.details : null;
  };

  const selectedDetails = getSelectedDetails();

  return (
    <div className="events_main">
      <div className="video_main">
    <video autoPlay loop muted className="w-full h-full object-cover" width="100%">
           <source src={Vid} type="video/mp4" />
           Your browser does not support the video tag.
      </video>
      </div>
      <div className="text_info">
      <Heading
              className="kaleido_heading"
              id="glheading"
              title={"Technical Events for Civil and IWM Department"}
            />
       <div className="statement">
        <h4>The road to success is always under construction. Materials like bricks, cement, steel and stones are worthless when seen separately but when utilized to create majestic structures with firm foundations, reflect grandeur and awe. Citadel witnesses the most skilled civil engineers showcasing their technical know – how of the recent civil engineering discoveries.</h4>
       </div>
      </div>
      <div className="main-tech">
        <div className="tech" data-aos="zoom-in-up">
          {iconsRow1.map(({ name, background, details }, index) => (
            <div key={index} className="moon-icon" data-name={name} style={{ backgroundImage: `url(${background})`, ...details.styles }} onClick={() => toggle(name)}></div>
          ))}
        </div>
        <div className="tech" data-aos="zoom-in-down">
          {iconsRow2.map(({ name, background, details }, index) => (
            <div key={index} className="moon-icon-2" data-name={name} style={{ backgroundImage: `url(${background})`, ...details.styles }} onClick={() => toggle(name)}></div>
          ))}
        </div>
      </div>
      <div className="main_section">
        {iconsRow1.concat(iconsRow2).map(({ name, details }, index) => (
          <div key={index} className={`details_each ${selectedTab === name ? 'active' : ''}`} data-aos="zoom-in-up" id={`${name.toLowerCase()}`}>
            <Heading
              className="kaleido_heading"
              id="glheading"
              title={name}
            />

            <div className="details_each_" data-aos="zoom-in-up" >
              <h4>Problem Statement</h4>
            <ul>
              {details.info.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
            </div>


            <div className={`containereve ${isActive ? 'active' : ''}`}>
              <div className="toggle-menu" onClick={() => setIsActive(!isActive)}>
                <i className="bx bx-plus">
                  <FaAmazon />
                </i>
                <p>Click Me</p>
              </div>
              <ul className="menu" data-aos="zoom-in-up">
                {details && (
                  <>
                    <li style={{ '--i': 1 }} onClick={() => toggleMenu('rules')}>
                      <div className="a">
                        <i className="bx rules">
                          <FaAmazon />
                        </i>
                        <p>Rules</p>
                      </div>
                    </li>
                    <li style={{ '--i': 5 }} onClick={() => toggleMenu('specs')}>
                      <div className="a">
                        <i className="bx specs">
                          <FaAmazon />
                        </i>
                        <p>Specs</p>
                      </div>
                    </li>
                    <li style={{ '--i': 6 }} onClick={() => toggleMenu('team')}>
                      <div className="a">
                        <i className="bx teams">
                          <FaAmazon />
                        </i>
                        <p>Team</p>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Additional Details */}
            <div ref={detailsRef} className={`additional-details ${isActive ? 'visible' : ''}`}  >
              {details && (


                <div className="details-content">
                  <h1>{selectedMenu}</h1>
                  {selectedMenu === 'rules' && (
                    <ul>
                      {details.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === 'specs' && (
                    <ul>
                      {details.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === 'team' && (
                    <ul>
                      {details.team.map((team, index) => (
                        <li key={index}>{team}</li>
                      ))}
                    </ul>
                  )}
                </div>

              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Citadel;
