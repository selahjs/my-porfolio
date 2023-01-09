import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Service.scss';
// import { urlFor, client } from '../../client';

const Service = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:3001/services').then((res) => {
      setAbouts(res.data);
    });

  }, []);

  return (
    <>
      <h2 className="head-text">Our <span>Services</span></h2> 
      <p>We help our clients to build state of the art software products and <br />
        empower the tech sector with innovative solutions and approaches.</p>

      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + about.id}
          >
            {/* add a src for the image */}
            <img src={about.imgUrl}  alt={about.title} /> 
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Service, 'app__about'),
  'service',
  'app__primarybg',
);
