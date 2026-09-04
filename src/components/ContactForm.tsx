'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'University',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Project description).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'University',
          message: '',
        });
      } else {
        throw new Error(data.error || 'Failed to send inquiry');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Unable to send inquiry.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <label style={{ fontFamily: 'var(--ff-mono)', fontSize: '12px', letterSpacing: '1px', color: 'var(--slate)', display: 'block', marginBottom: '8px' }}>
          NAME *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '14px', border: '1px solid var(--line)', fontFamily: 'var(--ff-body)', fontSize: '15px' }}
        />
      </div>

      <div>
        <label style={{ fontFamily: 'var(--ff-mono)', fontSize: '12px', letterSpacing: '1px', color: 'var(--slate)', display: 'block', marginBottom: '8px' }}>
          EMAIL *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '14px', border: '1px solid var(--line)', fontFamily: 'var(--ff-body)', fontSize: '15px' }}
        />
      </div>

      <div>
        <label style={{ fontFamily: 'var(--ff-mono)', fontSize: '12px', letterSpacing: '1px', color: 'var(--slate)', display: 'block', marginBottom: '8px' }}>
          PHONE
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+44 (0)20 8629 2999"
          style={{ width: '100%', padding: '14px', border: '1px solid var(--line)', fontFamily: 'var(--ff-body)', fontSize: '15px' }}
        />
      </div>

      <div>
        <label style={{ fontFamily: 'var(--ff-mono)', fontSize: '12px', letterSpacing: '1px', color: 'var(--slate)', display: 'block', marginBottom: '8px' }}>
          ORGANISATION
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          style={{ width: '100%', padding: '14px', border: '1px solid var(--line)', fontFamily: 'var(--ff-body)', fontSize: '15px' }}
        />
      </div>

      <div>
        <label style={{ fontFamily: 'var(--ff-mono)', fontSize: '12px', letterSpacing: '1px', color: 'var(--slate)', display: 'block', marginBottom: '8px' }}>
          PROJECT TYPE
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={{ width: '100%', padding: '14px', border: '1px solid var(--line)', fontFamily: 'var(--ff-body)', fontSize: '15px', background: '#fff' }}
        >
          <option value="University">University</option>
          <option value="Hospital">Hospital</option>
          <option value="Airport">Airport</option>
          <option value="Stadium">Stadium</option>
          <option value="Corporate / Commercial">Corporate / Commercial</option>
          <option value="Heritage / Hospitality">Heritage / Hospitality</option>
          <option value="Other institutional building">Other institutional building</option>
        </select>
      </div>

      <div>
        <label style={{ fontFamily: 'var(--ff-mono)', fontSize: '12px', letterSpacing: '1px', color: 'var(--slate)', display: 'block', marginBottom: '8px' }}>
          TELL US ABOUT THE PROJECT *
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '14px', border: '1px solid var(--line)', fontFamily: 'var(--ff-body)', fontSize: '15px', resize: 'vertical' }}
        />
      </div>

      {status === 'success' && (
        <div style={{ padding: '14px', background: '#ECFDF5', color: '#065F46', border: '1px solid #6EE7B7', fontSize: '14px', borderRadius: '2px' }}>
          Thank you. Your inquiry has been sent to our team. We will review your project details and get back to you shortly.
        </div>
      )}

      {status === 'error' && (
        <div style={{ padding: '14px', background: '#FEE2E2', color: '#991B1B', border: '1px solid #F87171', fontSize: '14px', borderRadius: '2px', lineHeight: 1.5 }}>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <p>
              Unable to send inquiry directly right now. Please email us directly at{' '}
              <a href="mailto:info@meridianwayfinding.co.uk" style={{ textDecoration: 'underline', fontWeight: 600 }}>
                info@meridianwayfinding.co.uk
              </a>{' '}
              or call{' '}
              <a href="tel:+442086292999" style={{ textDecoration: 'underline', fontWeight: 600 }}>
                +44 (0)20 8629 2999
              </a>.
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ alignSelf: 'flex-start', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
      >
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent ✓' : 'Send inquiry →'}
      </button>
    </form>
  );
}
