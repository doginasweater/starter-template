import 'vite/modulepreload-polyfill';
import { createRoot } from 'react-dom/client';
import { App } from './src/App';
import './styles/styles.scss';

const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement) {
  const root = createRoot(appElement);
  root.render(<App />);
}
