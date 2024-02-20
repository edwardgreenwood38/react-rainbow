
import './App.css';
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';


function App() {
  // let colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'];
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  
  // let colorMap = colors.map((color, i) => {
  //   return (
  //     <ColorBlock color={color} />
  //   )
  // });

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  
  return (
    <div className="App">
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}

      <div>
        <ColorForm addColor={addColor} />
      </div>
    </div>
  );
}

export default App;
