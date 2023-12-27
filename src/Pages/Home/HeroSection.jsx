import React from 'react'
// import myimg from "./img/heroimg2.png"
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hey, I'm Nitish</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Full Stack</span>{" "}
          <br />
          Developer
        </h1>
        <p className="hero--section-description">
        Driven MCA student with a knack for React, Java, and MongoDB.
         From impactful roles at TCS to cutting-edge project development,
        I bring tech expertise to the table.  <br /> Explore my journey! 🚀 #TechInnovator #DeveloperJourney
        </p>
      </div>
      <button className="btn btn-primary">Get In Touch</button>
    </div>
    <div className="hero--section--img">
      <img src="./img/profile-pic.png" alt="Hero Section" />
    </div>
  </section>
  )
}
