import React, {useState, useEffect, useCallback, useRef} from 'react';
import Slide from './slide';
import Pagination from './pagination';
import Navigation from './navigation';
import {elementMatches, repeatTheCycle, breakTheFlow} from './helpers'

function Slider(
{
   data,
   width,
   height,
   pagination = false,
   initial = 0, // The index of the slide to select initially.
   repeat = false,
   keyHandling = false
}
) {
   const [currentIndex, setCurrentIndex] = useState(initial);
   const [inFocus, setInFocus] = useState(false);
   const sliderElement = useRef();

   // When a click is seen anywhere inside the slider, it's in focus
   useEffect(function() {
      keyHandling && window.addEventListener('click', function(e) {
         var inFocus = elementMatches(e.target, sliderElement.current);
         setInFocus(inFocus);
      })
   }, []);

   const onKeyDown = useCallback(function(e) {
      if (e.keyCode === 37) {
         onPrevNavigation();
      }
      else if (e.keyCode === 39) {
         onNextNavigation();
      }
   }, []);

   useEffect(function() {
      if (inFocus) {
         window.addEventListener('keydown', onKeyDown);
      }
      else {
         window.removeEventListener('keydown', onKeyDown);
      }
   }, [inFocus]);

   function normalizeIndex(index) {
      index = repeat
         ? repeatTheCycle(index, data.length)
         : breakTheFlow(index, data.length);
      return index;
   }

   function onNavigation(newIndex) {
      setCurrentIndex(normalizeIndex(newIndex));
   }

   function onNextNavigation() {
      setCurrentIndex(function(currentIndex) {
         return normalizeIndex(currentIndex + 1);
      })
   }

   function onPrevNavigation() {
      setCurrentIndex(function(currentIndex) {
         return normalizeIndex(currentIndex - 1);
      })
   }

   return (
      <div className="slider" ref={sliderElement} style={{width}}>
         <div className="slider_slides-wrapper" style={{width, paddingBottom: `${height / width * 100}%`}}>
            {data.map((imageURL, i) => {
               return (
                  <Slide key={imageURL} select={i === currentIndex} imageURL={imageURL} />
               );
            })}

            <Navigation onPrevNavigation={onPrevNavigation} onNextNavigation={onNextNavigation}
               currentIndex={currentIndex} lastIndex={data.length - 1} repeat={repeat} />
         </div>

         {pagination && (
            <Pagination data={data} currentIndex={currentIndex} onNavigation={onNavigation} />
         )}
      </div>
   );
}

export default Slider;