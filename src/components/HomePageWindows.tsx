import React from 'react';
import IntroWindow from './windows/IntroWindow';
import JourneyWindow from './windows/JourneyWindow';
import SkillsWindow from './windows/SkillsWindow';
import '../styles/components/HomePageWindows.css'

const HomePageWindows: React.FC = () => {
    return (

      <div className='window-container h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden'>

        <IntroWindow />
        <JourneyWindow />
        <SkillsWindow />


      </div>

    );
};
  
  
  export default HomePageWindows