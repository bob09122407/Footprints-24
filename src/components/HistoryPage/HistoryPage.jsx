import React, { useEffect } from "react";
import HistoryData from "../../Data/HistoryData";
import Heading from "../Common/Headings/Heading";
import "./HistoryPage.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";

function HistoryPage() {
  useEffect(() => {
    document.title = "History | FootPrints'23";
  }, []);

  useEffect(() => {
    let agPosY;
    let agHeight;
    let agTop;

    (function ($) {
      $(function () {
        $(window).on("scroll", function () {
          fnOnScroll();
        });

        $(window).on("resize", function () {
          fnOnResize();
        });

        let agTimeline = $(".js-timeline"),
          agTimelineLine = $(".js-timeline_line"),
          agTimelineLineProgress = $(".js-timeline_line-progress"),
          agTimelinePoint = $(".branch"),
          agTimelineItem = $(".timeline-item"),
          agOuterHeight = $(window).outerHeight(),
          f = -1,
          agFlag = false;

        agHeight = $(window).height();

        function fnOnScroll() {
          agPosY = $(window).scrollTop();

          fnUpdateProgress();
        }

        function fnOnResize() {
          agPosY = $(window).scrollTop();
          agHeight = $(window).height();

          fnUpdateFrame();
        }

        function fnUpdateWindow() {
          agFlag = false;

          // agTimelineLine.css({
          //   top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          //   bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
          // });

          f !== agPosY && ((f = agPosY), fnUpdateProgress());
        }

        function fnUpdateProgress() {
          // agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

          // let i = agTop + agPosY - $(window).scrollTop();
          let a =
            agTimelineLineProgress.offset().top +
            agPosY -
            $(window).scrollTop();
          let n = agPosY - a + agOuterHeight / 2;
          // i <= agPosY + agOuterHeight / 2 && (n = i - a);
          agTimelineLineProgress.css({ height: n + "px" });

          agTimelinePoint.each(function () {
            agTop = $(this).offset().top;

            agTop + agPosY - $(window).scrollTop() <
            agPosY + 0.5 * agOuterHeight
              ? $(this).find("path").addClass("path-animate")
              : $(this).find("path").removeClass("path-animate");
          });
        }

        function fnUpdateFrame() {
          agFlag || requestAnimationFrame(fnUpdateWindow);
          agFlag = true;
        }
      });
    })(jQuery);
  },[]);

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
                                strokeWidth="3"
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
        <Sponsors />
        <Footer />
      </section>
    </>
  );
}

export default HistoryPage;
