import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider';

const data = [
   'images/pexels-eberhard-grossgasteiger-534164.jpg',
   'images/pexels-h-emre-773471.jpg',
   'images/pexels-jaime-reimer-2662116.jpg',
   'images/pexels-pixabay-302769.jpg',
   'images/pexels-roberto-nickson-2559941.jpg',
];

function App() {
   return <>
      <h1>Simple Image Slider</h1>
      <p>Developed by <a href="https://github.com/bilalbro">@bilalbro</a> using React.</p>
      <br />
      <Slider data={data} width={800} height={400} pagination keyHandling />
   </>;
}

ReactDOM.render(<App />, document.getElementById('root'));