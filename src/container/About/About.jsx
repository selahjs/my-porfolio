import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

//import axios from 'axios';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [skills, setSkills] = useState([]);
  const [about, setabout] = useState([])

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    axios.get('http://localhost:3001/about').then((res) => {
      console.log(res.data);
      setabout(res.data[0]);
    });

    client.fetch(skillsQuery).then((data) => {
      console.log(data);
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"><span>About Us</span></h2> 
      <p className='text-center'>{about.header_paragraph_1}<br />
      {about.header_paragraph_2}</p>

        <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                    >
                      {/* <h4 className="bold-text">{work.name}</h4> */}
                      <p className="p-text">{about.paragraph_1}</p>
                       <br />
                      <p className="p-text">{about.paragraph_2} </p>
                       <br />
                      <p className="p-text">{about.paragraph_3}</p>
                    </motion.div>
                  
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
