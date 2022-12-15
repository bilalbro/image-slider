import React from 'react';

function Slide(
{
   imageURL,
   select
}
) {
   return (
      <div className={'slider_slide' + (select ? ' slider_slide--faded-in' : '')}
         style={{backgroundImage: `url('${imageURL}')`}}></div>
   );
}

export default Slide;