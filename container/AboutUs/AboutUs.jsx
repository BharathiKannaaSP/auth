import React from 'react';

import './AboutUs.css';
import {images} from '../../constants'
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
  <img src={images.G} alt='g'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='spoon' className='spoon__img'/>
          <p className='p__opensans'>The Yummy is a three-Michelin star French and Californian cuisine restaurant located in Yountville, California, in the Napa Valley. The chef and owner of the Yummy is Thomas Keller. The restaurant building dates from 1900 and was added to the National Register of Historic Places in 1978</p>
          <button type='button' className='custom__button'>Know more</button>
      </div>


      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife'/>
      </div>


    <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='spoon' className='spoon__img'/>
          <p className='p__opensans'>The building was built as a saloon in the 1900s by a Scottish stonesman for Pierre Guillaume.In the 1920s, the building was owned by John Lande who used it as a French steam laundry.</p>
          <button type='button' className='custom__button'>Know more</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
