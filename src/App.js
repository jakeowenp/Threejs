import logo from './logo.svg';
import './App.css';
import { Box } from './Box';
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useState } from 'react';
import { Box2 } from './boxv2';

function App() {
  const [yAxis, setYAxis] = useState(1.1);
  const [decreaseInterval, setDecreaseInterval] = useState();
  const [increaseInternal, setIncreaseInternal] = useState();
  const MAX = 1;
  const MIN = -1;

  useEffect(() => {
    if (!decreaseInterval) {
      const id = setInterval(() => {
        setYAxis(axis => axis - 0.1)
      }, 100);
      setDecreaseInterval(id);
    }
  }, [])

  // useEffect(() => {
  //   // console.log(yAxis)
  //   // min -2 max 1
  //   // let increaseInternal;
  //   // let decreaseInterval;
  //   // if (yAxis > MAX) {
  //   //   // console.log("222")
  //   //   decreaseInterval = setInterval(() => {
  //   //     setYAxis(axis => axis - 0.1)
  //   //   }, 100)  
  //   //   console.log(decreaseInterval)
  //   // }
  //   // = setInterval(() => {
  //   //   setYAxis(axis => axis + 0.1)
  //   // }, 100)
  //   // if (yAxis > MAX) {
  //   //   console.log("CLEARING INCREASE")
  //   //   clearInterval(increaseInternal);
  //   //   decreaseInterval = setInterval(() => {
  //   //     setYAxis(axis => axis - 0.01)
  //   //   }, 1000)
  //   // }
  //   // console.log(yAxis)
  //   if (yAxis < MIN) {
  //     // console.log("CLEARING DECREASE")
  //     clearInterval(decreaseInterval);
  //     // increaseInternal = setInterval(() => {
  //     //   setYAxis(axis => axis + 0.01)
  //     // }, 1000)
  //   }
  // }, [yAxis, MIN, MAX])

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
          {/* <Box position={[-1.2, 1, 3]} /> */}
          {rain.map(() => <Box />)}
          {/* <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box /> */}
          
          {/* <Box position={[4, 0, 0]} /> */}
      </Canvas>
      </header>
    </div>
  );
}

export default App;
