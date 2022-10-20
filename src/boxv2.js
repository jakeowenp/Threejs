import { useState } from "react";
// this example is using react-spring@9
import { useSpring, Canvas } from "@react-spring/core";
import { a } from "@react-spring/three";
export function Box2(props) {
  const [active, setActive] = useState(0);
  // create a common spring that will be used later to interpolate other values
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  // interpolate values from commong spring
  const scale = spring.to([0, 1], [1, 5]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#6246ea", "#e45858"]);

  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 },
  })

  return (
    // using a from react-spring will animate our component
    <a.mesh
    // translateY={rotation}
    //   rotation-y={rotation}
    //   scale-x={scale}
    //   scale-z={scale}
      style={styles}
      onClick={() => setActive(Number(!active))}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial style={styles} roughness={0.5} attach="material" color={color} />
    </a.mesh>
  );
}