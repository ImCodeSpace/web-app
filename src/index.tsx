import React from 'react';
import './styles.css'
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.querySelector('#vr-app')?? document.body;
const root = createRoot(rootElement);

root.render(<App />);
