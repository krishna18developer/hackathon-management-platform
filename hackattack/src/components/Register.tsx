import React from 'react';
import './../styles/RegisterPage.css'; // Import the CSS file for styling

const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <div className="form-container">
        <h2 className="form-title">Register for the Hackathon</h2>
        <form className="register-form">
          <label htmlFor="teamName">Team Name</label>
          <input type="text" id="teamName" name="teamName" required />

          <label htmlFor="teamLength">Team Length (max 4)</label>
          <input type="number" id="teamLength" name="teamLength" min="1" max="4" required />

          <label htmlFor="memberNames">Team Member Names</label>
          <input type="text" id="memberNames" name="memberNames" required />

          <label htmlFor="utrNumber">UTR Number for Payment</label>
          <input type="text" id="utrNumber" name="utrNumber" required />

          <label htmlFor="paymentQR">Payment QR Code</label>
          <input type="text" id="paymentQR" name="paymentQR" required />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;