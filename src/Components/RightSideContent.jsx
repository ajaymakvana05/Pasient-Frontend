import Rightbackground from "../assets/images/right-side-frame.svg";
import Logo from "../assets/images/logo.svg";
import Slide1 from "../assets/images/login-slide-1.svg";

const RightSideContent = () => {
  return (
    <section className="right-image flex">
        <div className="right-content-box">
          <img className="logo" src={Logo} alt="" />
          <img className="slide-image" src={Slide1} alt="" />
          <div>
            <h2>Hospital</h2>
            <p>You Can stay your Hospital and Contact With Your Facility</p>
          </div>
          
        </div>
      <div className="image-box">
        <img src={Rightbackground} alt="Hospital Illustration" />
      </div>
    </section>
  );
};

export default RightSideContent;
