import React, { useState } from 'react';

function CelebrityForm() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [appId, setAppId] = useState('');
  const [photo, setPhoto] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const authenticityToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const formData = new FormData();
    formData.append('celebrity[name]', name);
    formData.append('celebrity[value]', value);
    formData.append('celebrity[app_id]', appId);
    formData.append('celebrity[photo]', photo);

    fetch('/api/v1/celebrities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': authenticityToken
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  function handleFileChange(event) {
    setPhoto(event.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
      <label>
        Photo:
        <input type="file" onChange={handleFileChange} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CelebrityForm;
