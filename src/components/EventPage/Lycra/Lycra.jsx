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
const Lycra = () => {
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
      name: 'Diz-O-Spot',
      background: icon1, 
      details:
       { info:
         ['Make an innovative product based on theme using given material and decorate it.'],
          rules: 
          ['The event comprises of two rounds.',
        'Specifications of the round will be disclosed on the day of event.',
      'Participants will have to design a product according to the given instructions and present their product.'],
           specs:
            ['- Announce before two days of event'],
             team:
              ['Compulsory-2'] }
    },
    { name: 'Broken Floats', background: icon2, details: { 
      info: ['Weave a fabric on a handloom with maximum speed and accuracy in given interval of time.'], 
      rules:['Total time allotted will be 2 hours. This includes thinking, designing, assembling, weaving and decorating the sample.',
      'Number of heald shafts or weaves will be given according to which participants will have to weave the fabric.',
    'Weave should be clear.','Final decision lies with the Core Committee of FootPrints X8.'],
      specs: ['- Announce few days befor event'], 
      team: ['Compulsory-2'] } },
      { name: 'The 10s Count', background: icon2, details: { 
        info: ['It is a paper presentation event related to Textile Department.'], 
        rules:['Make a presentation on any technical topic related to Textile Engineering field.',
        'The time specifications are ’10 + 2 + 3 = 15 min’. Presentation time is limited to a maximum of 12 minutes. There will be a warning bell at the end of 10 minutes, indicating the remainder of 2 minutes to conclude your presentation. The next 3 minutes are reserved for questions from the judges or the present audience.',
        'No extra time after 12 minutes will be given to any participant and he/she is expected to stop as soon as their time is completed. Participants are free to bring their own Laser Pointers or Hand Pointers and none will be provided by the Core Committee.',
        'The presentation can be made in Power Point or Flash.',
        'All the participants are required to bring a hard copy of a typewritten report containing all the descriptive details of the topic of the presentation. The text should not exceed 8 A4 sheets, with details being Times New Roman, Size 12 with 1.5 line spacing being mandatory. This copy is to be handed over to the Coordinator present.',
        'A format for the presentation and list of the topics will be uploaded shortly and will be sent via mail to the participants.',
        'The 8 page report is excluding ‘only picture pages’ which may be added in between as per requirement. A page on bibliography is recommended to be added at the end of the report.',
        'Participants are requested to bring the files on a CD or a pendrive (Floppy discs should not be used).The presentation soft copy and the text papers should under no circumstances bear the name of the participants or the college; any case of this rule being violated will lead to disqualification.',
        'Send your abstracts to the10scount@msufp.in before February 13, 2018.',
        'The abstract must be concise, consisting of 250-300 words either in Word or PDF format.',
        'The abstract may contain maximum 3 pictures in relevance with the subject.',
        'The content must be written in Times New Roman font of size 12 with 1.5” spacing.',
        'The topic of presentation, name of participant(s), college name and e-mail IDs must be clearly mentioned in the abstract.'
        ],
        specs: ['- Announce few days befor event'], 
        team: ['Maximum-2'] } },

   
  ];

  const iconsRow2 = [
    { name: 'Quiz-O-Tex', background: icon3, details: { 
      info: ['A quiz event pertaining to Textile Department.'], 
      rules: ['Teams will be formed strictly by the Core Committee.','The Core Committee reserves the right to change any of the rules. Participants will be informed about the changes if any.'],
       specs: ['- Announce few days befor event'], 
       team: ['Individual'] } },
    { name: 'Imprints',
     background: icon4, 
     details: {
       info: 
       ['Dye and print the given fabric using creativity and maximum accuracy.'], 
       rules: ['The event comprises of two rounds. 1)Tie and Dye 2)Block Printing','Specifications of the round will be disclosed on the day of the event.'],
        specs: ['- Announce few days befor event'], team: ['Compulsory-2'] } },
    
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
              title={"Technical Events for Textile Department"}
            />
       <div className="statement">
        <h4>If you think good design is expensive, you should look at the cost of a bad design! Budget, innovativeness and accuracy in designing forms the crux of Lycra. Here art is question to the problem and design is solution, while you work your way up to creative thinking.Are you ready to be an emerging fusion of artist, inventor and mechanic?</h4>
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

export default Lycra;
