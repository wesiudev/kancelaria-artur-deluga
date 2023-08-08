"use client";

import { useRef, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useGLTF, SoftShadows, Html, CameraControls } from "@react-three/drei";
import { easing, geometry } from "maath";

extend(geometry);

export default function ThreeGraces() {
  return (
    <Canvas
      style={{ background: "transparent" }}
      shadows="basic"
      camera={{ position: [0, 1.5, 14], fov: 45 }}
    >
      <fog attach="fog" args={["white", 0, 20]} />
      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
      <SoftShadows samples={3} />
      <CameraControls />
    </Canvas>
  );
}

function Model(props) {
  const group = useRef();
  const light = useRef();
  const { nodes } = useGLTF("/graces-draco.glb");

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rotationY = -(event.clientX - window.innerWidth / 2) * 0.005;
      const positionZ =
        1 -
        Math.abs((event.clientX - window.innerWidth / 2) / window.innerWidth) *
          0.5;

      group.current.rotation.y = rotationY;
      group.current.position.z = positionZ;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <group ref={group} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node_3.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.2}
        dispose={null}
      >
        <meshLambertMaterial color="white" />
      </mesh>

      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={10}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      />
    </group>
  );
}
