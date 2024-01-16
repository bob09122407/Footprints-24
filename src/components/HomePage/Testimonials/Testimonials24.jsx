import React, { useState, useEffect } from 'react';
import './testimonial.css';
import Heading from '../../Common/Headings/Heading';
const YourComponent = () => {
  const [position, setPosition] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);

  const testimonials = [
    {
      quote: "Today's generation can do great things, all you need is to think beyond your capacity and stamina! Even the name of this college has a blessing in itself, 'Maharaja Sayajirao Gaekwad.",
      author: "Dr. Pawan Aggarwal",
      role: "International Motivational Speaker",
      image: "https://res.cloudinary.com/dzuuosxkc/image/upload/v1698909575/testimonial-img/wb9qcyqolcvwilmkfexk.jpg",
    },
    {
      quote: "Seeing the level of energy , hereby I wish all of you a great life ahead serving this country with upmost modern and industrial economy.Thank you for inviting me.",
      author: "Sanjaya Baru",
      role: "Former Media Advisor to the Prime Minister of India",
      image: "https://res.cloudinary.com/dnsvjhy0a/image/upload/v1664283215/Testimonials/Sanjaya-Baru_vzdc0d.jpg",
    },
    {
        quote: "It was a delightful and enthralling experience and I surely had a blast! The team escorted me all over the college and showed me around. If I had more time then I would have surely spent it relishing the event.",
        author: "Ami Ganatra",
        role: "Author of Ramayana Unravalled, Mahabharata Unravalled",
        image: "https://res.cloudinary.com/dzuuosxkc/image/upload/v1698909578/testimonial-img/cre15oai2yegqqj4m1rp.jpg",
      },
      {
        quote: "It was an honor to be a part of such a remarkable event. The quality of the questions asked by the students was amazing as well. Organizers were brilliant and for me this is going to be unforgettable for a lifetime.",
        author: "RADHAKRISHNAN PILLAI",
        role: "Teacher of Chanakya Neeti| TEDx Speaker",
        image: "https://res.cloudinary.com/dzuuosxkc/image/upload/v1698909577/testimonial-img/wrwwlbomexn6c5oeqprq.jpg",
      },
      {
        quote: "I adored the enthusiasm and the energy the students had. Organizing committee did a fantastic job and really it was an honor to be a part of such a great event.",
        author: "AMOD MALVIYA",
        role: "Co-Founder of UDAAN,Ex-CTO at Flipkart",
        image: "https://res.cloudinary.com/dzuuosxkc/image/upload/v1698909576/testimonial-img/lfwfimjdvl86k6rmtbb1.png",
      },
      {
        quote: "I am thankful to Team Footprints to invite me to such an outstanding event. Everyone's enthusiasm was terrific and the event was organized in such a flawless manner. It has really been an honor and a delight to be here. Jai Hind!",
        author: "Lt. Gen SATISH DUA",
        role: "Mastermind of Uri Surgical Strike",
        image: "https://res.cloudinary.com/dzuuosxkc/image/upload/v1698909575/testimonial-img/we55t34nqqf5lmdbv8tf.jpg",
      },
      {
        quote: "It was remarkably delightful to be in the auditorium and having a chance to interact with so many people. Our panel was very well moderated by Ajay sir and was a very enjoyable experience. We have one message for all that because of your support, HUME FARAK PADTA HAI!",
        author: "ABHI N NIYU",
        role: "YouTubers/Content Creators Youth",
        image: "https://res.cloudinary.com/dzuuosxkc/image/upload/v1698909576/testimonial-img/plqdi9zeokp6rpfdbbjl.jpg",
      },
  ];

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [position]);

  const moveSlider = (direction) => {
    const newPosition = direction === 'right' ? position + 1 : position - 1;
    setPosition(newPosition >= testimonials.length ? 0 : newPosition < 0 ? testimonials.length - 1 : newPosition);
  };

  const startAutoPlay = () => {
    const intervalId = setInterval(() => {
      moveSlider('right');
    }, 3000); // Adjust the interval as needed

    setAutoPlayInterval(intervalId);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
    setAutoPlayInterval(null);
  };

  const nextSlide = () => {
    moveSlider('right');
  };

  const prevSlide = () => {
    moveSlider('left');
  };

  return (
    <main>
      <div className="sliders">
      <Heading
              className="kaleido_heading"
              id="glheading"
              title={"Testimonials"}
            />
        <div className="slide-wrappers" style={{ transform: `translateX(-${position * 100}%)` }}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="slide">
              <div className="testimonial">
                <blockquote>{testimonial.quote}</blockquote>
                <p className="author">
                  {testimonial.author} <span>{testimonial.role}</span>
                </p>
              </div>
              <div className="slider-img">
                <img src={testimonial.image} alt={`Author ${testimonial.author} Image`} />
              </div>
            </div>
          ))}
        </div>

        <div className="buttons">
          <div className="previous" onClick={prevSlide}>Left</div>
          <div className="next" onClick={nextSlide}>Right</div>
        </div>
      </div>
    </main>
  );
};

export default YourComponent;
