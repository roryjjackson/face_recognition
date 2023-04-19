import React, { useState } from 'react';

function CelebrityForm() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [appId, setAppId] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const authenticityToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    fetch('/api/v1/celebrities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': authenticityToken
      },
      body: JSON.stringify({ celebrity: { name, value, app_id: appId } })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Value:
        <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      </label>
      <br />
      <label>
        App ID:
        <input type="text" value={appId} onChange={event => setAppId(event.target.value)} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CelebrityForm;
