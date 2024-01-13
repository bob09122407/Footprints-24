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
import Vid from "../../../assets/images/Logo/sanga.mp4";
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
      const offsetTop =
        sectionRef.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const iconsRow1 = [
    {
      name: "Wrestlemania",
      background: icon1,
      details: {
        info: [
          "Participants have to design a robot, which are capable of wrestling in a head-to-head bout based on the fundamental principle of conventional human wrestling matches.",
        ],
        rules: ["BOT SPECIFICATIONS:● The size of the bot must be within the range of [30cm x 30cm x 25]● No Lego parts or holding mechanisms are allowed.● The size constraint does not include the remote used to control the bot.● The bot may be wired or wireless. If it is wireless, it must be able to run on two different frequencies.● The bot’s adapter (if used) should be compatible with a 220-240V AC source, 50Hz.● Only an AC power source will be provided for the bot. The rest of the power requirements are expected from the team.● The minimum length of the wire must be at least 6m long.● The potential difference between any 2 points on the bot shouldn’t exceed 24V.● Use of hydraulics, pneumatics, fire, and sticky elements of any type of chemical or liquid is not allowed.● The wire should be slack during the gameplay.● Participants will not be allowed to change the design once the robot is registered for the event.● The organizers will check the machine before the participants are allowed to compete and the decision regarding the machine's compliance with the specifications shall be solely in the hands of the judges.● The weight of the robot(Including the battery) must not exceed 8kgs.RULES:● The robot must not damage the Sumo Ring.● Intentional cutting of other wires and damaging of other bots is not allowed, failure to do that may lead to disqualification.● After each round, the winning team will be granted three minutes to repair their robots (if any).ROUND DETAILS● The matches will be played in a knockout format.● The competing teams will be split into two groups. Each team will compete in a knockout tournament against another team from the same group.● The champions of the individual groups will fight for overall victory.● A match shall be of three minutes unless changed by the judges.● When the judge announces the start of the round, the teams activate their robots, and the robots may begin functioning after a five-second wait time. During these five seconds, participants must vacate the ring.● The winner will be the bot left functioning in the arena.● No other method of attack is allowed other than pushing, if found will be disqualified.● If both the bots are functioning in the arena, after the time is over, then the winner will be decided on the basis of more attack.● The bot can be controlled by only one person of the team.● The winners of each session will advance onto the next.● The judge's verdict should be considered final and no arguments will be entertained.NOTES:● Coordinators are not responsible for any kind of technical problems.● The number of rounds is subject to participation.● For any queries and clarifications, contact the coordinators.● The time limits might differ on the day of the event."],
        Member: ["Max 4"],
        Price: ["250 Rs"],
      },
    },
    {
      name: "Technokick",
      background: icon2,
      details: {
        info: [
          "This event provides participants platform to show their robotic skill by developing wired/wireless bot which can play soccer in specially designed Arena.",
        ],
        rules: ["BOT SPECIFICATIOS The vehicle must obey the following specifications: - ●	The Vehicle should be wired or wireless. ●	Maximum voltage must not exceed 24V. ●	Maximum 6 wheels are allowed. ●	The vehicle should have a maximum dimension of 35x30x20 cm (lxbxh) (+ 10% tolerance are excepted for all dimensions), smaller vehicle shall be accepted. ●	Weight of bot must not exceed 4kg along with battery (+ 10% tolerance are excepted). ●	If bot is wired then length of the wire between bot and remote should minimum be 3 meter and perfectly tied together. (Recommended rule) ●	The remote must compulsorily work on dual frequencies (with a considerable difference between the frequencies) throughout the event so as to avoid interference with the opponent. The team may be asked to work on the alternate frequency (i.e., any of the two frequencies) at any point. (Applicable only for wireless) ●	The participants are allowed to use a single frequency car only if they use the digital encoding technique. (Which ensures that no radio frequency waves interfere with the car). Thus, your transmitter & receiver are paired uniquely to avoid any frequency clashes. (Applicable only for wireless) ●	Spare parts or kits from any ready-made toys must not be used for constructing the Vehicle. ●	However, gear box and wheels for the vehicle might be taken from toys. Individual gears can also be taken for assembling a gear box. ●	The body of the machine including the base on which the circuitry is mounted must not be taken from ready-made toys however the one can used readymade chassis. ●	The body of the machine must be completely covered and the circuit peripherals must not be visible. ●	No rocket engines, explosives, or chemically propelled substances are to be used. ●	Batteries cannot be replaced once the machine enters the track. Design should be original and innovative.●	It is recommended to check with the organizing team for any doubts or queries regarding the machine specifications.   GENERAL RULES OF GAME ●	Only one vehicle per team is allowed throughout the event (organizing team member may take your photo along with your vehicle at reporting time). ●	Only one team member allowed to drive the vehicle throughout the one game. ●	When the vehicle starts, no team member is allowed to touch the vehicle. ●	Run will start only when organizers give the signal. ●	The time measured by the organizers will be final and will be used for scoring the teams. ●	Grabbing of the socker boll in one spot more than 10 second will result a penalty. ●	Opponent bot must not totally enter into the goal post along with boll. ●	If bot seem to be immobile (no motion (motion should be at least three inch)) for 10 seconds (after its all restart)) it will consider as frailer.   ●	Time measured by any contestant by any other means is not acceptable for scoring. ●	In case bot is wired bot contestant must not drag the bot using wire at any time during the match doing so will result a penalty. ●	Teams are not allowed to purposefully damage the machine of their opponents at the time of the race. If found doing so the concerned team will be disqualified. ●	The Judges’ decision shall be considered as final and indisputable. Any team involved in any type of argument with the judges will be disqualified. ●	The Core Committee reserve the rights to disqualify any team indulging in any kind of misbehaviour.   RESTART (OR MAINTENANCE TIME) ●	The participants are allowed to take a maximum of 2 restarts in the entire match. Total time taken during restarts must not exceed 4 minutes i.e., (time spend during 1st restart + time spend during 2nd restart = 4 minute). ●	After restarts the position of the bot should be opposite coroner of the opponent goal post. ●	During a restart, a contestant must not be allowed to change the battery.  ROUND: 1 ●	The vehicle will be checked thoroughly for its mechanism & dimensions by the judges for design criteria. ●	It is single player game and participants have to dribble the soccer and make the maximum number of goals in the given time.  ROUND: 2 ●	It is a one-on-one (knock out) round. ●	Each team have to goal maximum goal in given time. ●	It is a knockout  round it will continue till we don’t get two teams for the final round.  ROUND: 3 FINAL ROUND  ●	It is again a one-on-one (knock out) round for the final two."],
        Member: ["Max 4"],
        Price: ["250 Rs"],
      },
    },
    {
      name: "Smackbotz",
      background: icon4,
      details: {
        info: [
          "Participants have to design and construct a remote-controlled robot capable of fighting against another robot in a one-on-one combat.",
        ],
        rules: [""],
        Member: ["- Announce few days befor event"],
        Price: [""],
      },
    },
    {
      name: "D.F.A 7.0",
      background: icon3,
      details: {
        info: [
          "Prices have to build an all-terrain robust RC vehicle that can work on dual frequency and has to complete the given track from starting point to the ending point in the minimum possible time",
        ],
        rules: ["VEHICLE SPECIFICATIONS The vehicle must obey the following specifications: - ●   The bot must be strictly autonomous. ●	Dimensions of the bot should be less than 20cm*20cm*20cm ( l x b x h ). ●	The bot must pass through all the deviations that come in its way. ●	A power supply should be of maximum 24V DC. ●	The participants have to ensure that room lighting, photography, etc. does not  affect the functioning of the robot. ●	Any extinguishing mechanism (flapping, blower, etc) can be used in the final  round but it should not be detachable and must be autonomous.  ●	The autonomous bot must not split into two or more units. ●	Bot cannot be constructed using readymade Lego kits or any readymade  mechanism. But they can make use of readymade gear assemblies. Violating  this clause will lead to disqualification of the team.GENERAL RULES OF GAME  ●	When the vehicle starts, no team member is allowed to touch the vehicle. ●	The participants may program the bot to accelerate on the straight paths. ●	The participants will get 3 tries to complete the task. ●	They can modify their bots after 1st or 2nd try if not successful in 1st try. ●	Participants are not allowed to touch their robots once the bot starts. ●	If the machine remains immobile for respectable time (around 20 seconds) then it will be counted as a try and participants have to start from the beginning and if it was the last try then the bot will be eliminated.●	In case of tie, the design of the bot and algorithm used may be considered. ●	Safe innovations are always encouraged but if that leads to any loophole in any of  the above rules then they will be disqualified. ●	The Core Committee has the right to change any of the rules before event date. The  changes will be highlighted on website and conveyed to registered participants well  in advance. ●	The time measured by the organizers will be final and will be used for scoring the  teams. ●	Time measured by any contestant by any other means is not acceptable for scoring.  ●	The Judge’s decision shall be considered as final and indisputable. Any team involved in any type of argument with the judges will be disqualified. ●	The Core Committee reserve the rights to disqualify any team indulging in any kind  of misbehaviour. Round-1 ●	The bot has to complete the given track in least possible time. ●	The track includes 90,45 degree turns, curvy turns and dead ends.●	The track will have white line on black background. Round-2 ●	The bot has to complete the given track in least possible time. ●	The track include 90,45 degree turns, curvy turns and dead ends. ●	The track will be divided into two halves. The first half will have white line on black  background and the other half will have black line on white background. "],
        Member: ["Max 4"],
        Price: ["250 Rs"],
      },
    },
    {
      name: "Monochrome",
      background: icon3,
      details: {
        info: [
          "Participants have to design autonomous robot which can solve given line network.",
        ],
        rules: ["VEHICLE SPECIFICATIONS The vehicle must obey the following specifications: - ●   The bot must be strictly autonomous. ●	Dimensions of the bot should be less than 20cm*20cm*20cm ( l x b x h ). ●	The bot must pass through all the deviations that come in its way. ●	A power supply should be of maximum 24V DC. ●	The participants have to ensure that room lighting, photography, etc. does not  affect the functioning of the robot. ●	Any extinguishing mechanism (flapping, blower, etc) can be used in the final  round but it should not be detachable and must be autonomous.  ●	The autonomous bot must not split into two or more units. ●	Bot cannot be constructed using readymade Lego kits or any readymade  mechanism. But they can make use of readymade gear assemblies. Violating  this clause will lead to disqualification of the team.GENERAL RULES OF GAME  ●	When the vehicle starts, no team member is allowed to touch the vehicle. ●	The participants may program the bot to accelerate on the straight paths. ●	The participants will get 3 tries to complete the task. ●	They can modify their bots after 1st or 2nd try if not successful in 1st try. ●	Participants are not allowed to touch their robots once the bot starts. ●	If the machine remains immobile for respectable time (around 20 seconds) then it will be counted as a try and participants have to start from the beginning and if it was the last try then the bot will be eliminated.●	In case of tie, the design of the bot and algorithm used may be considered. ●	Safe innovations are always encouraged but if that leads to any loophole in any of  the above rules then they will be disqualified. ●	The Core Committee has the right to change any of the rules before event date. The  changes will be highlighted on website and conveyed to registered participants well  in advance. ●	The time measured by the organizers will be final and will be used for scoring the  teams. ●	Time measured by any contestant by any other means is not acceptable for scoring.  ●	The Judge’s decision shall be considered as final and indisputable. Any team involved in any type of argument with the judges will be disqualified. ●	The Core Committee reserve the rights to disqualify any team indulging in any kind  of misbehaviour. Round-1 ●	The bot has to complete the given track in least possible time. ●	The track includes 90,45 degree turns, curvy turns and dead ends.●	The track will have white line on black background. Round-2 ●	The bot has to complete the given track in least possible time. ●	The track include 90,45 degree turns, curvy turns and dead ends. ●	The track will be divided into two halves. The first half will have white line on black  background and the other half will have black line on white background. "],
        Member: ["Max 4"],
        Price: ["250 Rs"],
      },
    },
    {
      name: "Insight",
      background: icon3,
      details: {
        info: [
          "knowledge based event for Electrical & Electronics engg. Dept.",
        ],
        rules: ["Knowledge related to Electrical/Electronics Dept is required"],
        Member: ["Individual"],
        Price: ["100 Rs"],
      },
    },
    {
      name: "Renaissance",
      background: icon3,
      details: {
        info: ["Paper presentation event for EE/ELE engg."],
        rules: ["Send your abstract to renaissance@msufp.in •	Make a Presentation on topic related to Electrical Machines or Power Systems or ADE (Analog and Digital Electronics). The time specifications are ‘8 + 2 + 2 = 12 min’.•	Presentation time is limited to a maximum of 12 minutes. There will be a warning bell at the end of 8 minutes, indicating the remainder of 2 minutes to conclude your presentation. The next 2 minutes are reserved for questions from the judges or the present audience.•	No extra time after 10 minutes will be given to any participant and he/she is expected to stop as soon as their time is completed.•	Participants are free to bring their own Laser Pointers or Hand Pointers and none will be provided by the Core Committee. The presentation can be made in Power Point or Flash. All the participants are required to bring a hard copy of a typewritten report containing all the descriptive details of the topic of the presentation.•	The text should not exceed 8 A4 sheets, with details being — Font: Times New Roman, Size 12 with 1.5 line spacing being mandatory. This copy is to be handed over to the coordinator present during the event.•	A format for the presentation will be uploaded shortly and will be sent via mail to the participant short-listed for the first round. The 8 page report is excluding ‘only picture pages’ which may be added in between as per requirement. A page on bibliography is recommended to be added at the end of the report. Participants are requested to bring the files on a pen-drive. The presentation soft copy and the text papers should under no circumstances bear the name of the participants or the college; any case of this rule being violated will lead to disqualification.Only those teams whose abstract is short listed will be qualified to deliver the presentation on event day. The selected teams will be notified by the Core Committee. •	The abstract must be concise consisting of 250-300 words either in word or pdf format.•	The abstract may contain maximum 3 pictures in relevance with the subject.•	The content must be written in Times New Roman font of size 12 with 1.5” spacing.•	The topic of presentation, name of participants, college name and e-mail ids must be clearly mentioned in the abstract."],
        Member: ["Max 2"],
        Price: ["100 Rs"],
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
          title={"Technical Events for Electrical and Electronics Department"}
        />
        <div className="statement">
          <h4>
            Ranging from working with bread boards to the spectacular automation
            which is capable of demolishing the opponent fiercely. Sanganikee
            provides all electrical and electronics engineers an opportunity to
            showcase their technical skills with utmost perfection.
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

export default Sanganikee;
