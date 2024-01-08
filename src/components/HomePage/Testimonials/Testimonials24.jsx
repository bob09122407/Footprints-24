import React, { useState, useEffect } from 'react';
import './testimonial.css';
import Heading from '../../Common/Headings/Heading';
const YourComponent = () => {
  const [position, setPosition] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);

  const testimonials = [
    {
      quote: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
      author: "Tanya Sinclair",
      role: "UX Engineer",
      image: "https://alcs-slider.netlify.app/images/image-tanya.jpg",
    },
    {
      quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      author: "John Tarkpor",
      role: "Junior Front-end Developer",
      image: "https://alcs-slider.netlify.app/images/image-john.jpg",
    },
    {
        quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        author: "John Tarkpor",
        role: "Junior Front-end Developer",
        image: "https://alcs-slider.netlify.app/images/image-tanya.jpg",
      },
      {
        quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        author: "John Tarkpor",
        role: "Junior Front-end Developer",
        image: "https://alcs-slider.netlify.app/images/image-john.jpg",
      },
      {
        quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        author: "John Tarkpor",
        role: "Junior Front-end Developer",
        image: "https://alcs-slider.netlify.app/images/image-tanya.jpg",
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
