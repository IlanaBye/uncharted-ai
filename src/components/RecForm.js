// import { useState } from 'react';

import ChatGPT from '../ChatGPT.png';

function RecForm({ promptData, setPromptData, onRecForm }) {
  console.log('PROMPDATA', promptData);

  return (
    <div>
      <form onSubmit={onRecForm}>
        <img
          src={ChatGPT}
          alt="ChatGPT Logo"
          className="{loading ? 'chatgpt-logo loading' : 'chatgpt-logo"
        />
        <input
          type="text"
          value={promptData.letterTo}
          onChange={(e) =>
            setPromptData({ ...promptData, letterTo: e.target.value })
          }
          placeholder="Ask anything..."
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default RecForm;
