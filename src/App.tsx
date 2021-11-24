import { useEffect, useState } from 'react';
import { Button } from './stories/Button';
import './App.css';

export default function App() {
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
      <p>Welcome to my new App, huhhuu!</p>
      <p>
        <Button size="large" label={'hello'} />
      </p>
      <p>{message}</p>
    </div>
  );
}
