import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FC from '../assets/img/fc.png';
import UCB from '../assets/img/ucb.png';


export const EduTimeline = () => {
  return (
    <div className="timeline-container" id="Experiences">
      <section className="project">
        <h2>My Education Journey</h2>
      </section>
      <VerticalTimeline>
         <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#6495ED', color: '#fff' }}
          contentArrowStyle={{ borderRight: '20px solid #6495ED' }}
          date="August 2022 - May 2024"
          iconStyle={{ background: '#FFFFFF', color: '#fff' }}
          icon={<img src={FC} alt="FC Logo" />}
        >
          <h3 className="vertical-timeline-element-title">Fullerton College</h3>
          <h5 className="vertical-timeline-element-subtitle">Community College Student</h5>
          <p>
             <br /><br />
             <br /><br />
             <br />
          </p>
        </VerticalTimelineElement> 
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#6A5ACD', color: '#fff' }}
          contentArrowStyle={{ borderRight: '20px solid #6A5ACD' }}
          date="August 2024 - May 2026"
          iconStyle={{ background: '#FFFFFF', color: '#fff' }}
          icon={<img src={UCB} alt="UCB Logo" />}
        >
          <h3 className="vertical-timeline-element-title">University of California, Berkeley</h3>
          <h5 className="vertical-timeline-element-subtitle">Undergraduate Student</h5>
          <p>
          Continuing undergraduate studies in Electrical Engineering & Computer Sciences<br /><br />
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
