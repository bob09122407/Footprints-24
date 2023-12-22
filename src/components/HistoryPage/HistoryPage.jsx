import React, { useEffect } from "react";
import HistoryData from "../../Data/HistoryData";
import Heading from "../Common/Headings/Heading";
import "./HistoryPage.css";

function HistoryPage() {
  useEffect(() => {
    document.title = "History | FootPrints'23";
  }, []);

  useEffect(()=>{

    (function($){
      let prevScrollY = 0;
      let progressBar =  $(".ag-timeline_line-progress");
      let branches = $(".branch"); 
      $(window).on("scroll",function(){
        //For Progress Bar
        let currentScrollY = $(this).scrollTop();

        if(currentScrollY > prevScrollY){
          progressBar.height(progressBar.height()+(currentScrollY-prevScrollY));
        }else{
          progressBar.height(progressBar.height()-(prevScrollY-currentScrollY));
        }

        prevScrollY = currentScrollY;
        
        // For Branch
        branches.each(function(index,branch){
          // console.log(progressBar.offset().top+progressBar.height(), branch.offsetTop);
          if((progressBar.offset().top+progressBar.height()) >= $(branch).offset().top){
            // $(branch).find("path").animate({
            //   strokeDasharray:250
            // },"fast");
            $(branch).find("path").addClass("path-animate");
          }else{
            $(branch).find("path").removeClass("path-animate");
          }
        })

      })



    })(jQuery);
  },[])

  return (
    <>
      <section id="history">
        <div className="history_header_img" id="parent_div">
          <div className="text-on-image-history">
            <Heading id="history_heading" title="HISTORY" />
          </div>
        </div>

        <div className="ag-timeline-block">
          <section className="ag-section">
            <div className="ag-format-container">
              <div className="js-timeline ag-timeline">
                <div className="js-timeline_line ag-timeline_line">
                  <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
                </div>

                <div className="timeline-list">
                  {HistoryData.map((element, index) => {
                    return (
                      <div className="timeline-item" key={index}>
                        <div>
                          <div className="main-content">
                            <div className="timeline-header">
                              <h3 className="timeline-heading">
                                {element.heading}
                              </h3>
                              <div className="timeline-year">
                                Footprints'{element.year}
                              </div>
                            </div>
                            <div className="timeline-content">
                              {element.description}
                            </div>
                          </div>
                          <div className="branch">
                            <svg
                              width="202"
                              height="133"
                              viewBox="0 0 202 133"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              
                              <path
                                d="M1 128.946C144.205 131.963 58.4037 8.0224 201 4"
                                stroke="white"
                                stroke-width="3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default HistoryPage;
