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
    slideRef.current.removeChild(lists[0]);
  };
  
  const prevSlide = () => {
    const lists = slideRef.current.querySelectorAll('.item-seg');
    slideRef.current.prepend(lists[lists.length - 1].cloneNode(true));
    slideRef.current.removeChild(lists[lists.length - 1]);
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
              title="SEGMENTS"
            />
            </div>
    <div className="container-seg">
        
      <div id="slide" ref={slideRef}>
        <div className="item-seg" style={{ backgroundImage: `url(${phoo})`}}>
          <div className="content">
            <div className="name">Cybernetics</div>
            {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
            <button>Runtime</button>
            <button>Code&Create</button>
            <button>Hackprints 2.0</button>
            <button>Protocol</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">Mechenema</div>
            {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
            <button>Burnout</button>
            <button>Ballista</button>
            <button>Hydrex</button>
            <button>Powered Echo</button>
            <button>Gizmo</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">Sanganikee</div>
            {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
            <button>Wrestlemania</button>
            <button>Technokik</button>
            <button>D.F.A 6.0</button>
            <button>Monochrome</button>
            <button>Insight</button>
            <button>Renaissance</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">Lycra</div>
            {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
            <button>Diz-O-Spot</button>
            <button>Broken Floats</button>
            <button>10's Count</button>
            <button>Quiz-O-Tex</button>
            <button>Imprints</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">Citadel</div>
            {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
            <button>CivIQ</button>
            <button>CAD</button>
            <button>WWE</button>
            <button>Tremors</button>
          </div>
        </div>
        <div className="item-seg" style={{ backgroundImage:`url(${phoo})`}}>
          <div className="content">
            <div className="name">Rasayanam</div>
            {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
            <button>Chem-o-Hustle</button>
            <button>Synopsis</button>
            <button>Chemaze</button>
            <button>ChemX</button>
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
