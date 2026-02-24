import groupRing from "../assets/images/Group.png";
import frame1 from "../assets/images/Frame (1).png";
import frame2 from "../assets/images/Frame (2).png";
import frame3 from "../assets/images/Frame (3).png";
import frame4 from "../assets/images/Frame (4).png";
import frame5 from "../assets/images/Frame (5).png"

function WorkingProcess() {
  return (
    <div className="wp-outer">
      <div className="wp-inner">

        <h2 className="wp-title">OUR WORKING PROCESS</h2>

        {/* Labels TOP row */}
        <div className="wp-top-labels">
          <div className="wp-label-slot">
            <p className="wp-desc-text">We Get Your Requirements</p>
            {/* <p className="wp-step-num navy">Step 01</p> */}
            <span className="wp-vline navy-line"></span>
          </div>
          <div className="wp-label-slot"></div>
          <div className="wp-label-slot">
            <p className="wp-desc-text">Designing &amp; Get Conformation</p>
            {/* <p className="wp-step-num orange">Step 03</p> */}
            <span className="wp-vline orange-line"></span>
          </div>
          <div className="wp-label-slot"></div>
          <div className="wp-label-slot">
            <p className="wp-desc-text">Testing &amp; Maintenance</p>
            {/* <p className="wp-step-num blue">Step 05</p> */}
            <span className="wp-vline blue-line"></span>
          </div>
        </div>

        {/* Group.png — one image, icons absolutely positioned inside each ring */}
        <div className="wp-group-wrap">
          <img src={groupRing} alt="working process rings" className="wp-group-img" />

          {/* Icon 1 — ring 1 */}
          <img src={frame1} alt="step1" className="wp-step-icon wp-icon-1" />
          {/* Icon 2 — ring 2 */}
          <img src={frame2} alt="step2" className="wp-step-icon wp-icon-2" />
          {/* Icon 3 — ring 3 */}
          <img src={frame3} alt="step3" className="wp-step-icon wp-icon-3" />
          {/* Icon 4 — ring 4 */}
          <img src={frame4} alt="step4" className="wp-step-icon wp-icon-4" />
          {/* Icon 5 — ring 5 */}
          <img src={frame5} alt="step5" className="wp-step-icon wp-icon-5" />
        </div>

        {/* Labels BOTTOM row */}
        <div className="wp-bottom-labels">
          <div className="wp-label-slot"></div>
          <div className="wp-label-slot">
            <span className="wp-vline orange-line"></span>
            {/* <p className="wp-step-num orange">Step 02</p> */}
            <p className="wp-desc-text">Market Research &amp; Feasibility Analysis</p>
          </div>
          <div className="wp-label-slot"></div>
          <div className="wp-label-slot">
            <span className="wp-vline teal-line"></span>
            {/* <p className="wp-step-num teal">Step 04</p> */}
            <p className="wp-desc-text">Coding &amp; Development</p>
          </div>
          <div className="wp-label-slot"></div>
        </div>

        {/* Buttons */}
        <div className="wp-buttons">
          <button className="wp-btn-dark">QUICK ENQUIRY</button>
          <button className="wp-btn-blue">📞 9045301702</button>
        </div>

      </div>
    </div>
  );
}

export default WorkingProcess;