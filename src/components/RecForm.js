// import { useState } from 'react';

import ChatGPT from '../ChatGPT.png';

function RecForm(props) {
  console.log('PROPS in RecForm', props);

  return (
    <div>
      <form onSubmit={props.onRecForm}>
        <img
          src={ChatGPT}
          alt="ChatGPT Logo"
          className="{loading ? 'chatgpt-logo loading' : 'chatgpt-logo"
        />
        <input
          type="text"
          value={props.prompt}
          onChange={(e) => props.setPrompt(e.target.value)}
          placeholder="Ask anything..."
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default RecForm;
