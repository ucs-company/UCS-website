import { useCallback, useRef, useState } from 'react';
import { CONFIG, CONTACT } from '../data/site.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[\d\s+()-]{7,20}$/;

const FIELDS = [
  { name: 'name', test: (v) => v.trim().length >= 2, message: 'Please enter your name.' },
  { name: 'email', test: (v) => EMAIL_RE.test(v.trim()), message: 'Please enter a valid email address.' },
  { name: 'phone', test: (v) => PHONE_RE.test(v.trim()), message: 'Please enter a valid phone number.' },
  { name: 'service', test: (v) => v !== '', message: 'Please choose a service.' },
  {
    name: 'details',
    test: (v) => v.trim().length >= 10,
    message: 'Please tell us a little about the requirement.',
  },
];

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  details: '',
  website: '',
};

function isLive() {
  return Boolean((CONFIG.FORM_ENDPOINT || '').trim());
}

export function useInquiryForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);
  const fieldRefs = useRef({});

  const setValue = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const onChange = (e) => {
    const t = e.target;
    setValue(t.name, t.value);
  };

  const registerField = (name) => (el) => {
    fieldRefs.current[name] = el;
  };

  const validate = useCallback(
    (all = true) => {
      const next = {};
      for (const f of FIELDS) {
        if (all) {
          if (!f.test(values[f.name] || '')) next[f.name] = f.message;
        } else if (errors[f.name]) {
          next[f.name] = f.message;
        }
      }
      return next;
    },
    [values, errors]
  );

  const validateOne = (name) => {
    const f = FIELDS.find((x) => x.name === name);
    if (!f) return;
    const ok = f.test(values[name] || '');
    setErrors((e) => ({ ...e, [name]: ok ? undefined : f.message }));
  };

  const blur = (name) => () => validateOne(name);

  const showStatus = (type, title, message) => setStatus({ type, title, message });

  const post = async (endpoint, data) => {
    if (CONFIG.FORM_ENDPOINT_IS_JSON) {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      return;
    }
    const body = new FormData();
    Object.keys(data).forEach((k) => body.append(k, data[k]));
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body,
    });
    if (!res.ok) throw new Error('Request failed');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (busy) return;

    if (values.website) {
      showStatus(
        'success',
        'Thanks — your message has been sent.',
        'We will reply ' + CONFIG.RESPONSE_PROMISE + '.'
      );
      return;
    }

    const found = validate(true);
    setErrors(found);

    if (Object.keys(found).length) {
      const first = FIELDS.find((f) => found[f.name]);
      if (first && fieldRefs.current[first.name]) fieldRefs.current[first.name].focus();
      return;
    }

    if (!isLive()) {
      showStatus(
        'success',
        'Demo mode — nothing was sent.',
        `This page is still in demo mode, so nothing was sent. Set FORM_ENDPOINT in src/data/site.js to a Formspree or server URL to start receiving enquiries ${CONFIG.RESPONSE_PROMISE}.`
      );
      return;
    }

    setBusy(true);
    try {
      await post(CONFIG.FORM_ENDPOINT.trim(), values);
      showStatus(
        'success',
        'Thanks — your message has been sent.',
        'We will reply ' + CONFIG.RESPONSE_PROMISE + '.'
      );
      setValues(EMPTY);
    } catch {
      showStatus(
        'error',
        'Something went wrong while sending.',
        `Please email us at ${CONTACT.email} or call ${CONTACT.phoneDisplay} and we will pick it up straight away.`
      );
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setStatus(null);
  };

  return {
    values,
    errors,
    status,
    busy,
    setValue,
    onChange,
    blur,
    onSubmit,
    registerField,
    reset,
    isLive: isLive(),
  };
}
