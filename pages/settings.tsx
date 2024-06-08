import { useState } from 'react';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the API key here
    console.log('API Key saved:', apiKey);
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          API Key:
          <input type="text" name="apiKey" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
