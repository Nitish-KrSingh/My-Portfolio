import React from 'react'
import data from "../../data/index.json";
function MySkills() {
  return (
    <section className='skills--section' id='myskiills'>
     <div className='portfolio--container'>
        <p className='section-title'>My Skillls</p>
        <h2 className='skills-section-heading'>My Experties</h2>
     </div>

     <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              {/* <p className="skills--section--description">{item.description}</p> */}
              <ul className="skills--list">
                {item.list.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <img src={skill.src} alt={`${skill.name} tag`} />
                    {/* {skill.name} */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>

    </section>
  )
}

export default MySkills
