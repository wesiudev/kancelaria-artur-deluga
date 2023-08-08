"use client"
// Original concept by Tom Bogner @dastom on Dribble: https://dribbble.com/shots/6767548-The-Three-Graces-Concept

import { useRef } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { useGLTF, SoftShadows, Html, CameraControls } from '@react-three/drei'
import { easing, geometry } from 'maath'

extend(geometry)

export default function ThreeGraces() {
  return (
    <Canvas style={{background:"transparent", position:'absolute',left:"0px",top:"0px",zIndex:"0"}} shadows="basic" eventPrefix="client" camera={{ position: [0, 1.5, 14], fov: 45 }}>
      <fog attach="fog" args={['black', 0, 20]} />
      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
      <SoftShadows samples={3} />
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 2} maxAzimuthAngle={Math.PI / 2} />
    </Canvas>
  )
}

/*
Auto-generated by: https://github.com/react-spring/gltfjsx
Author: 3DLadnik (https://sketchfab.com/3DLadnik)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-printable-the-three-graces-58e0ae19e2984b86883edc41bf43415a
Title: 3D Printable The Three Graces
*/
function Model(props) {
    const group = useRef()
    const light = useRef()
    const { nodes } = useGLTF('/graces-draco.glb')
    useFrame((state, delta) => {
      easing.dampE(group.current.rotation, [0, -state.pointer.x * (Math.PI / 10), 0], 1.5, delta)
      easing.damp3(group.current.position, [0, -5.5, 1 - Math.abs(state.pointer.x)], 1, delta)
      easing.damp3(light.current.position, [state.pointer.x * 12, 0, 8 + state.pointer.y * 4], 0.2, delta)
    })
    return (
      <group ref={group} {...props}>
        <mesh castShadow receiveShadow geometry={nodes.Node_3.geometry} rotation={[-Math.PI / 2, 0, 0]} scale={0.2} dispose={null}>
          <meshLambertMaterial color="white" />
        </mesh>
        <Annotation position={[-4, 4, 8]}>
        Kancelaria Radcy Prawnego <span style={{ fontSize: '1.5em' }}></span>
        </Annotation>
        
        <spotLight angle={0.5} penumbra={0.5} ref={light} castShadow intensity={10} shadow-mapSize={1024} shadow-bias={-0.001}>
          <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
        </spotLight>
      </group>
    )
  }
  
  function Annotation({ children, ...props }) {
    return (
      <Html
        {...props}
        transform
        occlude="blending"
        geometry={
          /** The geometry is optional, it allows you to use any shape.
           *  By default it would be a plane. We need round edges here ...
           */
          <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
        }>
        <div className="annotation">{children}</div>
      </Html>
    )
  }
  