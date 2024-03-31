import React, { useState, useEffect } from "react";
import mainpic from "../img/incubation.logo.png";
import sides from "../img/sideimg.jpg";
import backi from "../img/aboutUsbg.jpg";
import "./aboutUs.css";
function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="about-container">
  <div className="aboutcover">
    <h1>About</h1>
  </div>
  <div className="title-outer">
    <div className="title-image">
      <img className="image-top" src={backi} alt="Incubation Center" />
    </div>
    {/* <div class="title-text">
      <h2 class="headincub">Incubation Center</h2>
    </div> */}
  </div>
  <div className="about-info">
    <h1 className="about_heading_us">About Us</h1>
    <p className="about_content">
      The Incubation Centre (IC) at DAVV is a result of collaboration between
      the Government of India (47%) and the Government of Madhya Pradesh (53%).
      This is an INR 47.10 Crore project associated with the MAKE IN INDIA
      initiative.
      <br />
      The Incubation Centre specifically focuses on incubating ventures in
      various domains and provides them guidance and support in the best
      possible manner. We offer world-class facilities for design, testing,
      prototyping, and fabrication. The objective is to ensure that for ideas in
      any domain, the IC-DAVV is the place to turn the idea into reality.
      <br /> 
      It is registered as IC-DAVV society under the Society Act.
    </p>

    <div className="about-img">
      <img className="image-incubation" src={sides} alt="Incubation Center" />
    </div>
  </div>
  <div className="about-sec">
    <div className="about-info">
      <h1 className="about_heading_us">VISION</h1>
      <p className="about_content">
        Be the leading technology business incubator in the country for the
        development of Small Scale Startups along with the growing firms to
        reach great heights.
      </p>
    </div>
    <div className="about-info">
      <h1 className="about_heading_us">OBJECTIVE</h1>
      <p className="about_content">
        Identify, nurture, and translate technology ideas and innovation in the
        various domains with a focus on working as a helping hand for the
        Incubatees.
        Be a stepping stone for the growth of entrepreneurship activities in the
        geographical region.
        Give impetus to entrepreneurship among interested students, faculties,
        and external innovators.
      </p>
    </div>
  </div>
</div>

  
  );
}
export default About;
