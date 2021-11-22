import { useEffect, useState } from 'react';
import { Button } from './stories/Button';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function doFetch() {
      const response = await fetch('/api/hello');
      const result = await response.json();
      setMessage(result.message);
    }
    doFetch();
  }, []);

  return (
    <div className="app">
      <p>Welcome to my new App!</p>
      <p>
        <Button
          size="large"
          onClick={() => setCount((count) => count + 1)}
          label={`count is: ${count}`}
        />
      </p>
      <p>{message}</p>
    </div>
  );
}
