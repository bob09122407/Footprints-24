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
import Vid from "../../../assets/images/Logo/c.mp4";
const Mechanema = () => {
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
      name: "Burnout",
      background: icon1,
      details: {
        info: [
          "The participants have to design a vehicle powered by an internal combustion engine which can complete the given track in least possible time along with certain obstacles on the way.",
        ],
        rules: [
          "The dimensions of vehicle should be 70 x 50 x 50 cm",
          "The fuel to be used can be methanol along with castor Oil. The proportion is 70% methanol and 30% castor oil. Also, you can use 10% nitro methane along with it.",
          "The minimum tire size should be 25mm x 75mm.",
          "Antennae are exempted from height constraint.",
          "The chassis of the machine should be at least 2cm above the ground.",
          "Braking Mechanism is compulsory.",
          "Guards on front and rear side are compulsory to prevent damage to the vehicle.",
          "There is no restriction on the weight of the vehicle.",
          "The potential difference between any two points in the vehicle must not exceed 12 volts.",
          "The potential difference between any two points in the vehicle of the equipped with Reverse Gear Mechanism can be 18 volts.",
          "The participants are advised to use proper air filters as dirt might cause problems to the IC engine.",
        ],
        specs: ["- Announce before two days of event"],
        team: ["Maximum-5"],
      },
    },
    {
      name: "Ballista",
      background: icon2,
      details: {
        info: [
          "It is an event in which participants will have to design an X-bow using elastic, torsional or any other mechanism capable of hitting a given target with variable height and distance.",
        ],
        rules: [
          "The top view of the model should be 70 x 70 cm with no restrictions on the height.",
          "The crossbow should be able to move vertically and horizontally.",
          "No restriction on the type of spring or string to be used. Mechanism can be torsional, elastic or any other feasible mechanism.",
          "The arrow used must not be longer than 40cm.",
          "The arrow used must have a blunt head.",
          "A trigger mechanism is compulsory.",
        ],
        specs: ["- Announce few days befor event"],
        team: ["- Max 3"],
      },
    },

    {
      name: "Powered Echo",
      background: icon4,
      details: {
        info: [
          "It is a paper presentation event related to Mechanical Engineering department.",
        ],
        rules: [
          "Make a presentation on any technical topic related to Mechanical Engineering field.",
          "The time specifications are ‘8 + 2 + 2 = 12 min’. Presentation time is limited to a maximum of 10 minutes.",
          "There will be a warning bell at the end of 8 minutes, indicating the remainder of 2 minutes to conclude your presentation. The next 2 minutes are reserved for questions from the judges or the present audience.",
          "No extra time after 10 minutes will be given to any participant and he/she is expected to stop as soon as their time is completed. Participants are free to bring their own Laser Pointers or Hand Pointers and none will be provided by the Core Committee.",
          "The presentation can be made in Power Point or Flash. All the Participants are required to bring a hard copy of a typewritten report containing all the descriptive details of the topic of the presentation. The text should not exceed 8 A4 sheets, with details being Times New Roman, Size 12 with 1.5 line spacing being mandatory. This copy is to be handed over to the coordinator present.",
          "A format for the presentation will be uploaded shortly and will be sent via mail to the participants short-listed for the first round.",
          "The 8 page report is excluding ‘only picture pages’ which may be added in between as per requirement. A page on bibliography is recommended to be added at the end of the report.",
          "Participants are requested to bring the files on a CD or a pen-drive (Floppy discs should not be used).The presentation’s soft copy and the text papers should under no circumstances bear the name of the participants or the college; any case of this rule being violated will lead to disqualification.",
          "Only those teams whose abstract is short listed will be qualified to deliver the presentation on the event day. The selected teams will be notified by the Core Committee.",
          "The abstract must be concise consisting of 250-300 words either in word or pdf format.",
          "The abstract may contain maximum 3 pictures in relevance with the subject.",
          "The content must be written in Times New Roman font of size 12 with 1.5” spacing.",
          "The topic of presentation, name of participants, college name and e-mail ids must be clearly mentioned in the abstract.",
          "Only those teams whose abstract is short listed are subjected to pay the event fees. The abstract has to be mailed on lustre@msufp.in by 13th feb’18.",
        ],
        specs: [""],
        team: ["Max 2"],
      },
    },
    {
      name: "Gizmo",
      background: icon4,
      details: {
        info: [
          "It is a knowledge based event related to Mechanical engineering department consisting of quiz, puzzles, crosswords, treasure hunt and industry defined problems.",
        ],
        rules: [""],
        specs: ["- Announce few days befor event"],
        team: ["- Max 2"],
      },
    },
    {
      name: "Hydrex",
      background: icon3,
      details: {
        info: [
          "The participants have to build a machine propelled by hydraulics which can climb a given vertical rod and build a hydraulic arm with a hook attached to the machine to lift the given load.",
        ],
        rules: [
          "The dimensions of the base plate should be 60 x 30 with no restriction on height.",
          "The arm’s reach should be a minimum of 40cm and maximum 80cm.",
          "The minimum movement of the arm should be 90.",
          "The scoop volume should be at maximum of 100 ml.",
          "Only commercial syringes (20ml) can be used with no restriction on number of syringes.",
          "Any fluid such as water or oil can be used.",
        ],
        specs: ["- Announce few days befor event"],
        team: ["- Max 4", "Fees-100 rupees"],
      },
    },
  ];

  const iconsRow2 = [];

  const getSelectedDetails = () => {
    const selectedIcon = [...iconsRow1, ...iconsRow2].find(
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
          title={"Technical Events for Mechanical and Metallurgy Department"}
        />
        <div className="statement">
          <h4>
            Eloquent ideas are forged, hammered and welded to form powerful
            machinery that brings about the grandeur of Macheanema. This
            unleashes the opportunity for Mechanical and Metallurgy engineers to
            test their knowledge in the arena of practicality. Gather your
            tools, advance towards the mysterious challenges and rise above the
            cliché.
          </h4>
        </div>
      </div>
      <div className="main-tech">
        <div className="tech" data-aos="zoom-in-up">
          {iconsRow1.map(({ name, background, details }, index) => (
            <div
              key={index}
              className="moon-icon"
              data-name={name}
              style={{
                backgroundImage: `url(${background})`,
                ...details.styles,
              }}
              onClick={() => toggle(name)}
            ></div>
          ))}
        </div>
        <div className="tech" data-aos="zoom-in-down">
          {iconsRow2.map(({ name, background, details }, index) => (
            <div
              key={index}
              className="moon-icon-2"
              data-name={name}
              style={{
                backgroundImage: `url(${background})`,
                ...details.styles,
              }}
              onClick={() => toggle(name)}
            ></div>
          ))}
        </div>
      </div>
      <div className="main_section">
        {iconsRow1.concat(iconsRow2).map(({ name, details }, index) => (
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
                      onClick={() => toggleMenu("Rules")}
                    >
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Rules</span>
                        </div>
                      </div>
                    </li>
                    <li
                      style={{ "--i": 5 }}
                      onClick={() => toggleMenu("Specs")}
                    >
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Specs</span>
                        </div>
                      </div>
                    </li>
                    <li style={{ "--i": 6 }} onClick={() => toggleMenu("Team")}>
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Team</span>
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
                  {selectedMenu === "Rules" && (
                    <ul>
                      {details.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "Specs" && (
                    <ul>
                      {details.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "Team" && (
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

export default Mechanema;
