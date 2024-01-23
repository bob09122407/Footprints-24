import React, { useEffect } from 'react';
import { Swiper} from 'swiper';
import './style.css'; // Make sure to include your custom styles


const Scroll = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      speed: 600,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 10,
      breakpoints: { 512: { spaceBetween: 16 }, 1024: { spaceBetween: 32 } },
      on: {
        progress(e, r) {
          const t = e.slides.length > 4 ? 360 - 45 * (8 - e.slides.length + 1) : 270;
          const o = document.querySelector('.travel-slider-planet');
          o.style.transform = `translate(-50%, -50%) rotate(${t * -r}deg)`;
        //   console.log(`${r}ms`);
        },
        setTransition(e, r) {
          const o = document.querySelector('.travel-slider-planet');
          o.style.transitionDuration = `${r}ms`;
        },
      },
    });
  }, []);
  return (
    <div className='top'>
      
<section className="section section-1" id="section-1">

<div className="travel-slider">
  {/* <!-- Rotating Planet --> */}
  <div className="travel-slider-planet" id="planeta" style={{"transform": "translate(-50%, -50%) rotate(0deg)", "transition-duration": "0ms"}}>
    <img src="https://raw.githubusercontent.com/gamextar/web/e6e010e7914e8ef4ed230a0df7636f4a08720097/images/planeta.svg"/>
        <div className="travel-slider-cities travel-slider-cities-8">
                <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1702929193/mlrixspewnsgcyfnrymc.png"/>
                <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1702929193/mlrixspewnsgcyfnrymc.png"/>
                <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1702929193/mlrixspewnsgcyfnrymc.png"/>
                <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1702929193/mlrixspewnsgcyfnrymc.png"/>
                <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1702929193/mlrixspewnsgcyfnrymc.png"/>
                <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1702929193/mlrixspewnsgcyfnrymc.png"/>
                <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1702929193/mlrixspewnsgcyfnrymc.png"/>
                <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1702929193/mlrixspewnsgcyfnrymc.png"/>
        </div>
  </div>
  {/* <!-- Swiper -->/ */}
  
  
<div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
<div className="swiper-wrapper" style={{"cursor": "grab", "transition-duration": "0ms", "transform": "translate3d(639.5px, 0px, 0px)"}}>
           
                           
       {/* <!-- MAIN MENU SLIDE 1 --> */}
       <div className="swiper-slide" style={{marginRight: "64px"}}>
           <a className='scroll' href="#section-2">
               <img src="https://1.bp.blogspot.com/-dhIszFAhbcs/YEGqnGSHMqI/AAAAAAAAAj0/DSgpISv3JY4tYTeqFv9eiIlQOECRb8gmQCLcBGAsYHQ/s320/RoundedIcon.png" className="travel-slider-bg-image scroll" href='#section-2'/>
                   </a>
           <div className="travel-slider-content">
               <div className="travel-slider-title">Games</div>
               <div className="travel-slider-subtitle"> Mobile & VR Games</div>
           </div>
       </div>
       
       
       {/* <!-- MAIN MENU SLIDE 2 --> */}
       <div className="swiper-slide" style={{marginRight: "64px"}}>
           <a className='scroll' href="#section-3">
               <img src="https://1.bp.blogspot.com/-_O6a4B3N-2c/YD7-XIw-kcI/AAAAAAAAAjM/PnA1glSjei0GRpXkunc8DsgjsBPVLfg_gCPcBGAYYCw/s320/s1.png" className="travel-slider-bg-image scroll" href='#section-3'/>
                   </a>
           <div className="travel-slider-content">
               <div className="travel-slider-title">Artwork</div>
               <div className="travel-slider-subtitle"> NFT Creations</div>
           </div>
       </div>
       
       {/* <!-- MAIN MENU SLIDE 3 --> */}
       <div className="swiper-slide" style={{marginRight: "64px"}}>
           <a className='scroll' href="#section-4">
               <img src="https://1.bp.blogspot.com/-dhIszFAhbcs/YEGqnGSHMqI/AAAAAAAAAj0/DSgpISv3JY4tYTeqFv9eiIlQOECRb8gmQCLcBGAsYHQ/s320/RoundedIcon.png" className="travel-slider-bg-image scroll" href='#section-4'/>
                   </a>
           <div className="travel-slider-content">
               <div className="travel-slider-title">Metaverse</div>
               <div className="travel-slider-subtitle">VR Experiences</div>
           </div>
       </div>
       
       {/* <!-- MAIN MENU SLIDE 4 --> */}
       <div className="swiper-slide" style={{marginRight: "64px"}}>
           <a className='scroll' href="#section-5">
               <img src="https://1.bp.blogspot.com/-dhIszFAhbcs/YEGqnGSHMqI/AAAAAAAAAj0/DSgpISv3JY4tYTeqFv9eiIlQOECRb8gmQCLcBGAsYHQ/s320/RoundedIcon.png" className="travel-slider-bg-image scroll" href='#section-5'/>
                   </a>
           <div className="travel-slider-content">
               <div className="travel-slider-title">Services</div>
               <div className="travel-slider-subtitle">We Provide</div>
           </div>
       </div>
       
       {/* <!-- MAIN MENU SLIDE 5 --> */}
       <div className="swiper-slide" style={{marginRight: "64px"}}>
           <a className='scroll' href="#section-6">
               <img src="https://1.bp.blogspot.com/-2mheDUqz6Ho/YEGswL8h8eI/AAAAAAAAAkE/PwoFW0gzXWQIPYB6vZk_7s8JCPDl_475QCLcBGAsYHQ/s320/RoundedIcon-2.png" className="travel-slider-bg-image scroll" href='#section-6'/>
                   </a>
           <div className="travel-slider-content">
               <div className="travel-slider-title">About</div>
               <div className="travel-slider-subtitle">Our Company</div>
           </div>
       </div>

       <div className="swiper-slide" style={{marginRight: "64px"}}>
        <a className='scroll' href="#section-6">
            <img src="https://1.bp.blogspot.com/-2mheDUqz6Ho/YEGswL8h8eI/AAAAAAAAAkE/PwoFW0gzXWQIPYB6vZk_7s8JCPDl_475QCLcBGAsYHQ/s320/RoundedIcon-2.png" className="travel-slider-bg-image scroll" href='#section-6'/>
                </a>
        <div className="travel-slider-content">
            <div className="travel-slider-title">About</div>
            <div className="travel-slider-subtitle">Our Company</div>
        </div>
    </div>
  
    <div className="swiper-slide" style={{marginRight: "64px"}}>
        <a className='scroll' href="#section-6">
            <img src="https://1.bp.blogspot.com/-2mheDUqz6Ho/YEGswL8h8eI/AAAAAAAAAkE/PwoFW0gzXWQIPYB6vZk_7s8JCPDl_475QCLcBGAsYHQ/s320/RoundedIcon-2.png" className="travel-slider-bg-image scroll" href='#section-6'/>
                </a>
        <div className="travel-slider-content">
            <div className="travel-slider-title">About</div>
            <div className="travel-slider-subtitle">Our Company</div>
        </div>
    </div>

    <div className="swiper-slide" style={{marginRight: "64px"}}>
        <a className='scroll' href="#section-6">
            <img src="https://1.bp.blogspot.com/-2mheDUqz6Ho/YEGswL8h8eI/AAAAAAAAAkE/PwoFW0gzXWQIPYB6vZk_7s8JCPDl_475QCLcBGAsYHQ/s320/RoundedIcon-2.png" className="travel-slider-bg-image scroll" href='#section-6'/>
                </a>
        <div className="travel-slider-content">
            <div className="travel-slider-title">About</div>
            <div className="travel-slider-subtitle">Our Company</div>
        </div>
    </div>
    <div className="swiper-slide" style={{marginRight: "64px"}}>
        <a className='scroll' href="#section-6">
            <img src="https://1.bp.blogspot.com/-2mheDUqz6Ho/YEGswL8h8eI/AAAAAAAAAkE/PwoFW0gzXWQIPYB6vZk_7s8JCPDl_475QCLcBGAsYHQ/s320/RoundedIcon-2.png" className="travel-slider-bg-image scroll" href='#section-6'/>
                </a>
        <div className="travel-slider-content">
            <div className="travel-slider-title">About</div>
            <div className="travel-slider-subtitle">Our Company</div>
        </div>
    </div>
    <div className="swiper-slide" style={{marginRight: "64px"}}>
        <a className='scroll' href="#section-6">
            <img src="https://1.bp.blogspot.com/-2mheDUqz6Ho/YEGswL8h8eI/AAAAAAAAAkE/PwoFW0gzXWQIPYB6vZk_7s8JCPDl_475QCLcBGAsYHQ/s320/RoundedIcon-2.png" className="travel-slider-bg-image scroll" href='#section-6'/>
                </a>
        <div className="travel-slider-content">
            <div className="travel-slider-title">About</div>
            <div className="travel-slider-subtitle">Our Company</div>
        </div>
    </div>
    <div className="swiper-slide" style={{marginRight: "64px"}}>
        <a className='scroll' href="#section-6">
            <img src="https://1.bp.blogspot.com/-2mheDUqz6Ho/YEGswL8h8eI/AAAAAAAAAkE/PwoFW0gzXWQIPYB6vZk_7s8JCPDl_475QCLcBGAsYHQ/s320/RoundedIcon-2.png" className="travel-slider-bg-image scroll" href='#section-6'/>
                </a>
        <div className="travel-slider-content">
            <div className="travel-slider-title">About</div>
            <div className="travel-slider-subtitle">Our Company</div>
        </div>
    </div>
</div>
</div>
</div>

</section>
    </div>
  )
}

export default Scroll
