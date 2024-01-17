import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Countdown.css";

const SVGCircle = ({ radius }) => (
  <svg className="Countdown-svg">
    <path
      fill="none"
      stroke="#333"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

const Countdown = ({ timeTillDate, timeFormat }) => {
  const [Countdown, setCountdown] = useState({
    days: 10,
    hours: 1,
    minutes: 25,
    seconds: 12,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const duration = moment.duration(then - now);

      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeTillDate, timeFormat]);

  const daysRadius = mapNumber(Countdown.days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(Countdown.hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(Countdown.minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(Countdown.seconds, 60, 0, 0, 360);

  // if (!Countdown.seconds) {
  //   return null;
  // }

  console.log("Hhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

  return (
    <div className="timer">
      <h1>Countdown</h1>
      <div className="Countdown-wrapper">
        {(
          <div className="Countdown-item">
            <SVGCircle radius={daysRadius} />
            {Countdown.days}
            <span>days</span>
          </div>
        )}
        {(
          <div className="Countdown-item">
            <SVGCircle radius={hoursRadius} />
            {Countdown.hours}
            <span>hours</span>
          </div>
        )}
        {(
          <div className="Countdown-item">
            <SVGCircle radius={minutesRadius} />
            {Countdown.minutes}
            <span>minutes</span>
          </div>
        )}
        {(
          <div className="Countdown-item">
            <SVGCircle radius={secondsRadius} />
            {Countdown.seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
