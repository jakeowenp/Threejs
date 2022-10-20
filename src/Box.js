import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'


export function Box(props) {
  const ref = useRef()
  useFrame((state, delta) => {
    (ref.current.position.y -= 0.1)
  })

  const x = useMemo(() => Math.random() * (5 - -5) + -5, []);
  const z = useMemo(() => Math.random() * (2.5 - -1) + -1, []);
  console.log((x))
  return (
    <animated.mesh
      scale={0.1}
      position={[x,7,z]} 
      ref={ref}
      width={1} height={1}>
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
