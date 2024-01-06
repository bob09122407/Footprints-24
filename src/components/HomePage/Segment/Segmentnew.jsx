import React, { useRef, useEffect } from 'react';
import './segmentnew.css'; // Replace with your CSS file
// import phoo from "../../../assets/images/Logo/center.png"
import phoo from "../../../assets/images/Logo/segment.png"
import Heading from '../../Common/Headings/Heading';
const Slider = () => {
  const slideRef = useRef(null);

  const nextSlide = () => {
    const lists = slideRef.current.querySelectorAll('.item-seg');
    slideRef.current.appendChild(lists[0].cloneNode(true));
    slideRef.current.appendChild(lists[1].cloneNode(true));
    slideRef.current.removeChild(lists[0]);
  };

  const prevSlide = () => {
    const lists = slideRef.current.querySelectorAll('.item-seg');
    slideRef.current.prepend(lists[lists.length - 1].cloneNode(true));
    slideRef.current.prepend(lists[lists.length - 2].cloneNode(true));
    slideRef.current.removeChild(lists[lists.length - 1]);
    slideRef.current.removeChild(lists[lists.length - 2]);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); 
  return (
    <div className="main-segment">
        <div className="head">
       <Heading
              className="kaleido_heading"
              id="glheading"
              title="GUEST LECTURES"
            />
            </div>
    <div className="container-seg">
        
      <div id="slide" ref={slideRef}>
        <div className="item-seg" style={{ backgroundImage: `url(${phoo})`}}>
          <div className="content">
            <div className="name">LUNDEV888</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
            <button>See more</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">LUNDEV777</div>
            {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
            <button>See more</button>
            <button>See more</button>
            <button>See more</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">LUNDEV566</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
            <button>See more</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">LUNDEV554</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
            <button>See more</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">LUNDEV55</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
            <button>See more</button>
          </div>
        </div>
        {/* ... Add other item-segs as needed */}
      </div>
      <div className="buttons-seg">
        <button id="prev" onClick={prevSlide}><i className="fa-solid fa-angle-left button1"></i></button>
        <button id="next" onClick={nextSlide}><i className="fa-solid fa-angle-right button2"></i></button>
      </div>
    </div>
    </div>
  );
};

export default Slider;
