import React from 'react'
import  { ReactComponent as Schoolicon} from "../../../assets/images/work.svg"
import { ReactComponent as Workicon}  from "../../../assets/images/school.svg"

import {timelineElement} from "./TimelineElement";
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {

let workiconstyle ={background : "#06D6A0"}
let schooliconstyle ={background : "#F9C74f"}

  return (
    <section  className="timeline--section">
    <h2 className="section--heading">Experience & Education</h2>
      <div className='timeline--content'>   
      <VerticalTimeline>
          {
            timelineElement.map(element => {
              let isWorkicon = element.icon === "work";
              return (
                <VerticalTimelineElement key={element.key} date={element.date}
                dateClassName='date'
                iconStyle={isWorkicon ? workiconstyle : schooliconstyle}
                icon={isWorkicon ? <Schoolicon/> :  <Workicon/>  }
                >
                <h3 className="vertical-timeline-element-title" >{element.title1}</h3>
                <h4 className="vertical-timeline-element-subtitle">{element.title2}</h4>
                <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                <p className="description">{element.descrption}</p>
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>  
        </div>    
    </section>
  )
}
