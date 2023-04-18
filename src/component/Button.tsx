import React, { useState } from 'react';
import { Interactive } from '@react-three/xr';
import { Text } from '@react-three/drei';
import Box from './Box';
// Types
import { FC } from 'react';

interface Props {
    [key: string]: any; // Props that can be passed to a Three.js mesh (such as position, rotation, etc.) can be passed via the "rest" prop
}

const Button: FC<Props> = ({ props }) => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x51b0db);

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  }

  return (
    <Interactive
      onSelect={onSelect}
      onSqueeze={onSelect}
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}
      onMove={() => setHover(true)}
    >
      <Box color={color} scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]} size={[0.4, 0.1, 0.1]} {...props}>
        {/* @ts-expect-error */}
        <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
          Hello, Virtual World!
        </Text>
        <mesh
          onPointerDown={onSelect}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <boxBufferGeometry args={[0.4, 0.1, 0.1]} />
        </mesh>
      </Box>
    </Interactive>
  )
}

export default Button;
