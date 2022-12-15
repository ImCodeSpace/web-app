import './styles.css'
import { createRoot } from 'react-dom/client';
import App from './component/app';

const domContainer = document.querySelector('#vr-app');
const root = createRoot(domContainer);
root.render(App());
