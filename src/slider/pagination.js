import React from 'react';

function Pagination(
{
   data,
   currentIndex,
   onNavigation
}
) {
   return (
      <div className="slider_pagination">
         {data.map((imageURL, i) => {
            return (
               <div className={'slider_pagination_btn' + (currentIndex === i ? ' slider_pagination_btn--sel' : '')}
                  onClick={e => {onNavigation(i)}}></div>
            );
         })}
      </div>
   );
}

export default Pagination;