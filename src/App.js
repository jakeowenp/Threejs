import './App.css';
import { Box } from './Box';
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react';

function App() {
  const [rain, setRain] = useState([]);
  useEffect(() => {
    setInterval(() => {
      const numberOfRainDrops = Math.random() * (500 - 100) + 100;
      const arr = new Array(parseInt(numberOfRainDrops)).fill(0);
      console.log(arr)
      setRain(rainArr => [...rainArr, arr]);
    }, 100)

  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <Canvas style={{height: '100vh'}}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {rain.map(() => <Box />)}
      </Canvas>
      </header>
    </div>
  );
}

export default App;
