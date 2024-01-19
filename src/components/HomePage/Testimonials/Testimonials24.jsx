import React, { useState, useEffect } from 'react';
import './testimonial.css';
import Heading from '../../Common/Headings/Heading';
import testiData from '../../../Data/Testimonial';

const Testimonials24 = () => {
  const [position, setPosition] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);

  const testimonials = testiData;

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
          <div className="previous" onClick={prevSlide}></div>
          <div className="next" onClick={nextSlide}></div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials24;
