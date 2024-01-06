'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment, Text, Text3D } from '@react-three/drei'
import { Suspense } from 'react'

export default function Index() {
  return (
    <Canvas orthographic camera={{position: [0, 0, 200], zoom: 30}}>
        <color attach="background" args={['#fffff']} />
        <Suspense fallback={null}>
          <Model />
          <Text position={[0, 0, -15]} fontSize={5} color="black" anchorX="center" anchorY="middle">
            hello world!
          </Text>
          <directionalLight intensity={2} position={[0, 2, 3]}/>
          <Environment preset="city" />
        </Suspense>
    </Canvas>
  )
}
