// import { useState } from 'react';

import ChatGPT from '../ChatGPT.png';

function RecForm({ promptData, setPromptData, onRecForm }) {
  console.log('PROMPDATA', promptData);

  return (
    <div>
      <h1 className="page-header">Letter of Recommendation Generator</h1>
      <form onSubmit={onRecForm}>
        {/* <img
          src={ChatGPT}
          alt="ChatGPT Logo"
          className="{loading ? 'chatgpt-logo loading' : 'chatgpt-logo"
        /> */}
        <div className="whole-page">
          <div className="recommendation-form">
            <label className="input-field">
              This letter is to:
              <input
                type="text"
                value={promptData.letterTo}
                onChange={(e) =>
                  setPromptData({ ...promptData, letterTo: e.target.value })
                }
                placeholder="School/College/University/Company"
              />
            </label>
            <label>
              <input
                type="radio"
                name="institution"
                defaultChecked={true}
                value="option1"
              />
              School/College/University
            </label>
            <label>
              <input type="radio" name="institution" value="option2" />
              Company
            </label>
            <label className="input-field">
              Person's name:
              <input
                type="text"
                value={promptData.personName}
                onChange={(e) =>
                  setPromptData({ ...promptData, letterTo: e.target.value })
                }
                placeholder="Full Name"
              />
            </label>
            <label className="input-field">
              Your name:
              <input
                type="text"
                value={promptData.yourName}
                onChange={(e) =>
                  setPromptData({ ...promptData, letterTo: e.target.value })
                }
                placeholder="Full Name"
              />
            </label>
            <label>
              <input
                type="radio"
                name="relationship"
                defaultChecked={true}
                value="option1"
              />
              Teacher
            </label>
            <label>
              <input type="radio" name="relationship" value="option2" />
              Mentor
            </label>
            <label>
              <input type="radio" name="relationship" value="option3" />
              School leader
            </label>
            <label>
              <input type="radio" name="relationship" value="option4" />
              Family friend
            </label>
            <label>
              <input type="radio" name="relationship" value="option5" />
              Counselor/Advisor
            </label>
            <label>
              <input type="radio" name="relationship" value="option6" />
              Other
            </label>
            <label className="input-area">
              Important information to include:
              <input
                type="text"
                value={promptData.importantInfo}
                onChange={(e) =>
                  setPromptData({ ...promptData, letterTo: e.target.value })
                }
                // placeholder="Full Name"
              />
            </label>
          </div>
        </div>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default RecForm;
