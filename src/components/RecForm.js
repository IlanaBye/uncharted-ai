function RecForm({ promptData, setPromptData, onRecForm }) {
  console.log('PROMPDATA', promptData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPromptData((promptData) => ({ ...promptData, [name]: value }));
  };

  return (
    <div>
      <h1 className="page-header">Letter of Recommendation Generator</h1>
      <form onSubmit={onRecForm}>
        <div className="whole-page">
          <div className="recommendation-form">
            <label className="input-field">
              This letter is to:
              <input
                type="text"
                name="letterTo"
                value={promptData.letterTo || ''}
                onChange={handleChange}
                placeholder="School/College/University/Company"
              />
            </label>
            <label>
              <input
                type="radio"
                name="institution"
                onChange={handleChange}
                value="School/College/University"
              />
              School/College/University
            </label>
            <label>
              <input
                type="radio"
                name="institution"
                onChange={handleChange}
                value="Company"
              />
              Company
            </label>
            <label className="input-field">
              Person's name:
              <input
                type="text"
                name="personName"
                value={promptData.personName}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </label>
            <label className="input-field">
              Your name:
              <input
                type="text"
                name="yourName"
                value={promptData.yourName}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </label>
            <label>
              <input
                type="radio"
                name="relationship"
                value="Teacher"
                onChange={handleChange}
              />
              Teacher
            </label>
            <label>
              <input
                type="radio"
                name="relationship"
                onChange={handleChange}
                value="Mentor"
              />
              Mentor
            </label>
            <label>
              <input
                type="radio"
                name="relationship"
                onChange={handleChange}
                value="School leader"
              />
              School leader
            </label>
            <label>
              <input
                type="radio"
                name="relationship"
                onChange={handleChange}
                value="Family friend"
              />
              Family friend
            </label>
            <label>
              <input
                type="radio"
                name="relationship"
                onChange={handleChange}
                value="Counselor/Advisor"
              />
              Counselor/Advisor
            </label>
            <label>
              <input
                type="radio"
                name="relationship"
                onChange={handleChange}
                value="Other"
              />
              Other
            </label>
            <label className="input-textarea">
              Important information to include:
              <textarea
                type="text"
                name="importantInfo"
                rows={4}
                cols={75}
                value={promptData.importantInfo}
                onChange={handleChange}
                // placeholder="Full Name"
              />
            </label>
          </div>
          <button type="submit">Generate</button>
        </div>
      </form>
    </div>
  );
}

export default RecForm;
