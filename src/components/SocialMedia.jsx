import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a target="_blank" href="https://www.linkedin.com/company/afrozeal/"><BsLinkedin /></a>
    </div>
    <div>
    <a target="_blank" href="https://twitter.com/AfrozealC"><BsTwitter /></a>
    </div>
    <div>
      <a href="#https://github.com/AfrozealC"><BsGithub /></a>
    </div>
    <div>
    <a href="#https://www.instagram.com/AfrozealC/"><BsInstagram /></a>
    </div>
    
  </div>
);

export default SocialMedia;
