import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'


export function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    (ref.current.position.y -= 0.1)
  })
//   useFrame((state, delta) => (ref.current. += 0.1))
//   useFrame((state, delta) => (ref.current.rotation.y += 0.1))
//   useFrame((state, delta) => (ref.current.rotation.x += 0.1))
  // Return the view, these are regular Threejs elements expressed in JSX
//   const springProps = useSpring({ from: {
//     marginTop: -1
//   }, to: {
//     marginTop: 1
//   }, delay: 100 })

  const { spring } = useSpring({
    spring: clicked,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  const rotation = spring.to([0, 1], [0, Math.PI]);
//   console.log(springProps)
  const x = useMemo(() => Math.random() * (5 - -5) + -5, []);
  const y = useMemo(() => Math.floor(Math.random() * 2), []);
  const z = useMemo(() => Math.random() * (2.5 - -1) + -1, []);
  console.log((x))
  return (
    <animated.mesh
      scale={0.1}
      rotation-y={rotation}
      position={[x,7,z]} 
      ref={ref}
      onClick={(event) => click(!clicked)}
      width={1} height={1}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <sphereBufferGeometry width={1} height={1} attach="geometry" args={[1, 8, 10]}  />
      <meshStandardMaterial attach="material"
        color="blue"
        transparent
        roughness={0.1}
        metalness={0.1} />
    </animated.mesh>
  )
}

// createRoot(document.getElementById('root')).render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
// )
