import React, { useState } from 'react';
// Types
import { FC } from 'react';

interface Props {
  color: string; // the color of the box material
  size: [number, number, number]; // the dimensions of the box in the x, y, and z directions
  scale?: [number, number, number]; // the scale of the box in the x, y, and z directions (optional)
  children?: React.ReactNode; // any child components to render inside the box (optional)
  // Any other props that can be passed to a Three.js mesh (such as position, rotation, etc.) can be passed via the "rest" prop
  [key: string]: any;
}

const Box: FC<Props> = ({ color, size, scale, children, ...rest }) => {
  return (
    <mesh scale={scale} {...rest}>
      <boxGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  )
}

export default Box;
