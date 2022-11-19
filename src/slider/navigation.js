import React from 'react';
import {TfiAngleRight, TfiAngleLeft} from 'react-icons/tfi';

function Navigation(
{
   onPrevNavigation,
   onNextNavigation,
   currentIndex,
   lastIndex,
   repeat
}
) {
   return (
      <div className="slider_nav">
         <button className="slider_nav_btn" disabled={!repeat && currentIndex === 0} onClick={onPrevNavigation}><TfiAngleLeft /></button>
         <button className="slider_nav_btn"  disabled={!repeat && currentIndex === lastIndex} onClick={onNextNavigation}><TfiAngleRight /></button>
      </div>
   );
}

export default Navigation;