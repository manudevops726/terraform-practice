import React, { useState } from 'react';
import api from '../api';

const OTPLogin = ({ onLogin }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    await api.post('/auth/request-otp', { mobile });
    setStep(2);
  };

  const verifyOtp = async () => {
    const res = await api.post('/auth/verify-otp', { mobile, otp });
    localStorage.setItem('token', res.data.token);
    onLogin();
  };

  return (
    <div>
      {step === 1 ? (
        <>
          <input placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input placeholder="OTP" value={otp} onChange={e => setOtp(e.target.value)} />
          <button onClick={verifyOtp}>Verify</button>
        </>
      )}
    </div>
  );
};

export default OTPLogin;
