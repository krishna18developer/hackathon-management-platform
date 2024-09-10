import React, { useState } from 'react';
import './../styles/Register.css';

const Register: React.FC = () => {
  const [teamLength, setTeamLength] = useState<number>(3);
  const [teamMembers, setTeamMembers] = useState<any[]>(Array.from({ length: 3 }, () => ({})));
  const [utr, setUtr] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);

  const teamLengthOptions = [3, 4, 5, 6];

  const handleTeamLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLength = parseInt(e.target.value, 10);
    setTeamLength(newLength);
    setTeamMembers(Array.from({ length: newLength }, () => ({})));
  };

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeamMembers(members =>
      members.map((member, i) => (i === index ? { ...member, [name]: value.toUpperCase() } : member))
    );
  };

  const validateUtr = (utr: string) => /^\d{12}$/.test(utr);
  const validateYear = (year: string) => /^[1-4]$/.test(year);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let validationErrors: string[] = [];
    
    if (!validateUtr(utr)) {
      validationErrors.push('Invalid UTR Number.');
    }

    teamMembers.forEach((member, index) => {
      Object.values(member).forEach(value => {
        if (!value) {
          validationErrors.push(`All fields for team member ${index + 1} must be filled.`);
        }
      });

      if (!validateYear(member.year)) {
        validationErrors.push(`Year for team member ${index + 1} must be between 1 and 4.`);
      }
    });

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccess(null);
      return;
    }

    const formData = { teamLength, teamMembers, utr };
    console.log('Form Data:', JSON.stringify(formData));

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSuccess('Registration successful, payment pending. You will be emailed shortly.');
        setErrors([]);
      } else {
        throw new Error('Registration failed.');
      }
    } catch (error) {
      setErrors(['Failed to submit registration. Please try again.']);
      setSuccess(null);
    }
  };

  return (
    <div className="register-container">
      <h1>Hackathon Registration</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamLength">Team Length</label>
            <select
              id="teamLength"
              value={teamLength}
              onChange={handleTeamLengthChange}
            >
              {teamLengthOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          {teamMembers.map((_, index) => (
            <div key={index} className="team-member-form">
              <h3>Team Member {index + 1}</h3>
              <div className="form-group">
                <label htmlFor={`name-${index}`}>Name</label>
                <input
                  type="text"
                  id={`name-${index}`}
                  name="name"
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`email-${index}`}>Email</label>
                <input
                  type="email"
                  id={`email-${index}`}
                  name="email"
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`phone-${index}`}>Phone Number</label>
                <input
                  type="tel"
                  id={`phone-${index}`}
                  name="phone"
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`institution-${index}`}>Institution</label>
                <input
                  type="text"
                  id={`institution-${index}`}
                  name="institution"
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`branch-${index}`}>Branch</label>
                <input
                  type="text"
                  id={`branch-${index}`}
                  name="branch"
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`year-${index}`}>Year</label>
                <input
                  type="number"
                  id={`year-${index}`}
                  name="year"
                  min="1"
                  max="4"
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
            </div>
          ))}
          <div className="form-group">
            <label htmlFor="utr">Payment QR Code</label>
            <img className="qr-code" src="qrcode.png" alt="QR Code for Payment" />
          </div>
          <div className="form-group">
            <label htmlFor="utr">UTR Number</label>
            <input
              type="text"
              id="utr"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
          {errors.length > 0 && (
            <div className="errors">
              {errors.map((error, index) => <p key={index}>{error}</p>)}
            </div>
          )}
          {success && (
            <div className="success">
              {success}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;