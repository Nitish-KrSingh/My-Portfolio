import React from 'react'

function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
    <div className="about--section--img">
      <img src="./img/about-me_img.png" alt="About Me" />
    </div>
    <div className="hero--section--content--box about--section--box">
      <div className="hero--section--content">
        <p className="section--title">About</p>
        <h1 className="skills-section--heading">About Me</h1>
        <p className="hero--section-description">
        Passionate MCA student at Manipal Institute of Technology. 
        Experienced System Engineer adept in React, Java, and MongoDB. 
        
        </p>
        <p className="hero--section-description">
        Contributed to impactful projects at Tata Consultancy Services. 
        Recognized for leadership and commitment. Excited about innovative solutions in tech.
        Open to collaborations and new opportunities. #TechEnthusiast #SoftwareDeveloper
        </p>
      </div>
    </div>
  </section>
  )
}

export default AboutMe
