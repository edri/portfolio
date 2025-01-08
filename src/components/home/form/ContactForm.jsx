import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  function sendEmail(event) {
    event.preventDefault();
    event.stopPropagation();

    setSending(true);
    setErrorMessage('');
    setSuccess(false);

    const body = JSON.stringify({ name, email, message });

    fetch(`${import.meta.env.VITE_API_URL}/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then(() => {
            throw new Error();
          });
        }

        return response.json();
      })
      .then(() => {
        setSuccess(true);
        setSending(false);
      })
      .catch(() => {
        setErrorMessage(
          'An error has occurred while sending the message. Have you filled in all the fields?'
        );
        setSending(false);
      });
  }

  return (
    <>
      <form onSubmit={sendEmail}>
        <div className="flex flex-col text-black">
          <input
            className="rounded p-4 mb-6"
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="rounded p-4 mb-6"
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <textarea
            className="rounded p-4 mb-6"
            rows={10}
            name="message"
            placeholder="Your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <input
            className="rounded border border-dark-grey bg-dark-grey text-beige cursor-pointer p-4 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed hover:border-beige disabled:hover:border-dark-grey"
            type="submit"
            value="Send Message"
            disabled={sending}
          />
          {/* TODO Miguel : captcha */}
          {errorMessage && (
            <div className="rounded text-red-600 bg-red-200 border border-red-600 p-4 mt-4">
              {errorMessage}
            </div>
          )}
          {success && (
            <div className="rounded text-green-600 bg-green-200 border border-green-600 p-4 mt-4">
              The message has been sent successfully! I will get back to you as soon as possible :)
            </div>
          )}
        </div>
      </form>
    </>
  );
}
