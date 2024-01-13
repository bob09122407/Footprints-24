// Technotron.js

import React, { useState, useRef } from "react";
import "../technotron.css"; // Make sure this path is correct
import icon1 from "../../../assets/images/Logo/space.png";
import icon2 from "../../../assets/images/Logo/space.png";
import icon3 from "../../../assets/images/Logo/space.png";
import icon4 from "../../../assets/images/Logo/space.png";
import icon5 from "../../../assets/images/Logo/space.png";
import icon6 from "../../../assets/images/Logo/space.png";
import Heading from "../../Common/Headings/Heading";
import { FaAmazon } from "react-icons/fa";
import Vid from "../../../assets/images/Logo/lycra.mp4";
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
      const offsetTop =
        sectionRef.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const iconsRow1 = [
    {
      name: "Diz-O-Spot",
      background: icon1,
      details: {
        info: [
          "Make an innovative product based on theme using given material and decorate it.",
        ],
        rules: ["•	The event comprises of two rounds.•	Participants will have to design a garment according to the given instructions and present it.ROUNDSRound 1-:  Fashion illustration  •	Sheets will be provided to the participants to draw the fashion illustration.•	Participants have to bring their own supplies for sketching and •	Time allotted for this round will be 45 to 60 minutes.  Round 2-:  Fashion design         •	Required material will be provided to the participants. Participants will have to use that material only to make a product.•	Time allotted will be 60 to 90 minutes.•	Final decision lies with the Core Committee of FootPrints23.JUDGING CRITERIA•	Neatness of the overall work•	Creativity•	Innovative design•	Stitching•	Ornamentation•	Optimum use of the material provided"],
        Member: ["Compulsory-2"],
        Price: ["150 Rs"],
      },
    },
    {
      name: "Broken Floats",
      background: icon2,
      details: {
        info: [
          "Weave a fabric on a handloom with maximum speed and accuracy in given interval of time.",
        ],
        rules: ["•	Total time allotted will be 2 hours. This includes thinking, designing, assembling, weaving and decorating the sample.SPECIFICATIONS•	Number of heald shafts or weaves will be given according to which participants will have to weave the fabric.•	Weave should be clear.•	Final decision lies with the Core Committee of FootPrints23.JUDGING CRITERIA•	Neatness of the overall work•	Length produced•	Appearance of the fabric•	Firm beat-up•	Minimum thread breakage•	Decoration"],
        Member: ["Compulsory-2"],
        Price: ["120 Rs"],
      },
    },
    {
      name: "The 10s Count",
      background: icon2,
      details: {
        info: [
          "It is a paper presentation event related to Textile Department.",
        ],
        rules: ["•	Make a presentation on any technical topic related to Textile Engineering field.•	The time specifications are ’7 + 1+ 2 = 10 min’. Presentation time is limited to a maximum of 8 minutes. There will be a warning bell at the end of 7 minutes, indicating the remainder of 1 minutes to conclude your presentation. The next 2 minutes are reserved for questions from the judges or the present audience.•	No extra time after 8 minutes will be given to any participant and he/she is expected to stop as soon as their time is completed. Participants are free to bring their own Laser Pointers or Hand Pointers and none will be provided by the Core Committee.•	Participants are requested to bring the files on pendrive.The presentation soft copy and the text papers should under no circumstances bear the name of the participants or the college; any case of this rule being violated will lead to disqualification.SPECIFICATIONS•	Send your abstracts to the10scount@msufp.in by 25th Feb'23 .•	The abstract must be concise, consisting of 250-300 words either in Word or PDF format.•	The abstract may contain maximum 3 pictures in relevance with the subject.•	The content must be written in Times New Roman font of size 12 with 1.5” spacing.•	The topic of presentation, name of participant(s), college name and e-mail IDs must be clearly mentioned in the abstract."],
        Member: ["Max 2"],
        Price: ["100 Rs"],
      },
    },
    {
      name: "Quiz-O-Tex",
      background: icon3,
      details: {
        info: ["A quiz event pertaining to Textile Department."],
        rules: ["•	Teams will be formed strictly by the Core Committee.•	The Core Committee reserves the right to change any of the rules. Participants will be informed about the changes if any.•	ROUNDS:The event comprises 3 rounds including elimination round SPECIFICATIONS•	Specifications of the rounds will be disclosed on the day of the event."],
        Member: ["Individual"],
        Price: ["80 Rs"],
      },
    },
    {
      name: "Imprints",
      background: icon4,
      details: {
        info: [
          "Dye and print the given fabric using creativity and maximum accuracy.",
        ],
        rules: ["Participants will have to design a product according to the given instructions and present their product.ROUNDSThe event comprises of two rounds.Tie and Dye (elimination round)•	In this event, participants have to dye the given fabric using their creativity.•	Required material will be provided to the participants.•	Time allotted for this round will be 45 to 60 min .    Printing (final round)•	Required material will be provided to the participants. Participants will have to use that material and print various designs on the given cloth.•	Time allotted will be 45 to 60 minutes for preparation of product.•	Final decision lies with the Core Committee of FootPrints23.JUDGING CRITERIA•	Creativity•	Innovativeness•	Appearance of the fabric•	Neatness of the overall work"],
        Member: ["- Compulsary-2"],
        Price: ["150 Rs"],
      },
    },
  ];

  const getSelectedDetails = () => {
    const selectedIcon = [...iconsRow1].find(
      (icon) => icon.name === selectedTab
    );
    return selectedIcon ? selectedIcon.details : null;
  };

  const selectedDetails = getSelectedDetails();

  return (
    <div className="events_main">
      <div className="video_main">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          width="100%"
        >
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
          <h4>
            If you think good design is expensive, you should look at the cost
            of a bad design! Budget, innovativeness and accuracy in designing
            forms the crux of Lycra. Here art is question to the problem and
            design is solution, while you work your way up to creative
            thinking.Are you ready to be an emerging fusion of artist, inventor
            and mechanic?
          </h4>
        </div>
      </div>
      <div className="main-tech">
        <div className="tech">
          {iconsRow1.map(({ name, background, details }, index) => (
            <div
              key={index}
              className="moon-icon"
              data-name={name}
              style={{
                backgroundImage: `url(${background})`,
                ...details.styles,
              }}
              data-aos="zoom-in-up"
              onClick={() => toggle(name)}
            ></div>
          ))}
        </div>
        
      </div>
      <div className="main_section">
        {iconsRow1.map(({ name, details }, index) => (
          <div
            key={index}
            className={`details_each ${selectedTab === name ? "active" : ""}`}
            data-aos="zoom-in-up"
            id={`${name.toLowerCase()}`}
          >
            <Heading className="kaleido_heading" id="glheading" title={name} />

            <div className="details_each_" data-aos="zoom-in-up">
              <h4>Problem Statement</h4>
              <ul>
                {details.info.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>

            <div className={`containereve ${isActive ? "active" : ""}`}>
              <div
                className="toggle-menu"
                onClick={() => setIsActive(!isActive)}
              >
                <div className="ripple-circle">
                  <span></span>
                </div>
              </div>
              <ul className="menu" data-aos="zoom-in-up">
                {details && (
                  <>
                    <li
                      style={{ "--i": 1 }}
                      onClick={() => toggleMenu("rules")}
                    >
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Rules</span>
                        </div>
                      </div>
                    </li>
                    <li
                      style={{ "--i": 5 }}
                      onClick={() => toggleMenu("Member")}
                    >
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Member</span>
                        </div>
                      </div>
                    </li>
                    <li style={{ "--i": 6 }} onClick={() => toggleMenu("Price")}>
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Price</span>
                        </div>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Additional Details */}
            <div
              ref={detailsRef}
              className={`additional-details ${isActive ? "visible" : ""}`}
            >
              {details && (
                <div className="details-content">
                  <h1>{selectedMenu}</h1>
                  {selectedMenu === "rules" && (
                    <ul>
                      {details.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "Member" && (
                    <ul>
                      {details.Member.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "Price" && (
                    <ul>
                      {details.Price.map((Price, index) => (
                        <li key={index}>{Price}</li>
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
