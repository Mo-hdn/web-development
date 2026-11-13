import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setStatus('error');
      return;
    }
    setStatus('sent');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="page">
      <h1>Contact</h1>
      <div className="grid two">
        <div>
          <p><strong>Address</strong><br />12 Market Street</p>
          <p><strong>Phone</strong><br />+961-76957244</p>
          <p><strong>Hours</strong><br />Every day, 11:00 – 23:00</p>
        </div>
        <form onSubmit={handleSubmit}>
          {status === 'sent' && <p className="success">Message sent. We will reply within one working day.</p>}
          {status === 'error' && <p className="error">Please fill in all fields.</p>}
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Message</label>
          <textarea rows="4" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" className="btn">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
