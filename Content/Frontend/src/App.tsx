import { useState } from 'react';
import './App.scss';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>DogInASweater.WebStarter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>Frontend/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};
