import React from 'react';
import { XR, Controllers, Hands, ARButton } from '@react-three/xr';
import '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import Button from './component/Button';
// Types
import { FC } from 'react';

const App: FC = () => {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Button position={[0, 0.1, -0.2]} />
          <Controllers />
          {/* <Hands */}
        </XR>
      </Canvas>
    </>
  )
}

export default App;
