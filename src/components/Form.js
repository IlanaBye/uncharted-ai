import axios from 'axios';
import { useState } from 'react';

import ChatGPT from './ChatGPT.png';

function Form() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //communicate with API
    axios
      .post('http://localhost:8080/recommendation', { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img
          src={ChatGPT}
          alt="ChatGPT Logo"
          className="{loading ? 'chatgpt-logo loading' : 'chatgpt-logo"
        />
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default Form;
