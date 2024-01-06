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
const Sanganikee = () => {
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
      name: 'Wrestlemania',
      background: icon1, 
      details:
       { info:
         ['Participants have to design a robot, which are capable of wrestling in a head-to-head bout based on the fundamental principle of conventional human wrestling matches.'],
          rules: 
          [''],
           specs:
            ['- Announce before two days of event'],
             team:
              ['- Individual Participation (Compulsory)'] }
    },
    { name: 'Technokick', background: icon2, details: { 
      info: ['This event provides participants platform to show their robotic skill by developing wired/wireless bot which can play soccer in specially designed Arena.'], 
      rules: [''], 
      specs: ['- Announce few days befor event'], 
      team: [''] } },
      { name: 'Smackbotz',
      background: icon4, 
      details: {
        info: 
        ['Participants have to design and construct a remote-controlled robot capable of fighting against another robot in a one-on-one combat.'], 
        rules: [''],
         specs: ['- Announce few days befor event'], team: [''] } },

   
  ];

  const iconsRow2 = [
    { name: 'D.F.A 6.0', background: icon3, details: { 
      info: ['Teams have to build an all-terrain robust RC vehicle that can work on dual frequency and has to complete the given track from starting point to the ending point in the minimum possible time'], 
      rules: ['- It is an online event', '- Dates:  24th Feb to 26th Feb', '- There will 3 rounds in the event','- In the first round participants have to pitch their design','- In the second round they have to present their progress','- And in final round there will be submission and QnA based on the submission','- Visit the link provided to go to the website of HackPrints 2.0'],
       specs: ['- Announce few days befor event'], 
       team: [''] } },
       { name: 'Monochrome', background: icon3, details: { 
        info: ['Participants have to design autonomous robot which can solve given line network.'],
        rules:[],
         specs: [''], 
         team: [''] } },
         { name: 'Insight', background: icon3, details: { 
          info: ['knowledge based event for Electrical & Electronics engg. Dept.'],
          rules:[],
           specs: [''], 
           team: [''] } },
           { name: 'Renaissance', background: icon3, details: { 
            info: ['Paper presentation event for EE/ELE engg.'],
            rules:[],
             specs: [''], 
             team: [''] } },
    
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
              title={"Technical Events for Electrical and Electronics Department"}
            />
       <div className="statement">
        <h4>Ranging from working with bread boards to the spectacular automation which is capable of demolishing the opponent fiercely. Sanganikee provides all electrical and electronics engineers an opportunity to showcase their technical skills with utmost perfection.</h4>
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

export default Sanganikee;
