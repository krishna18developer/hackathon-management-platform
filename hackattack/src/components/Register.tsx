import React, { useState, ChangeEvent, FormEvent } from 'react';
import './../styles/Register.css';

interface TeamMember {
  name: string;
  email: string;
  phoneNumber: string;
  institution: string;
  year: string;
}

const Register: React.FC = () => {
  const [teamLength, setTeamLength] = useState<number>(3);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(Array(3).fill({
    name: '',
    email: '',
    phoneNumber: '',
    institution: '',
    year: '',
  }));
  const [utr, setUtr] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const teamLengthOptions = [3, 4, 5, 6];

  const handleTeamLengthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLength = Number(e.target.value);
    setTeamLength(newLength);
    setTeamMembers(Array(newLength).fill({
      name: '',
      email: '',
      phoneNumber: '',
      institution: '',
      year: '',
    }));
  };

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index] = { ...updatedTeamMembers[index], [field]: value };
    setTeamMembers(updatedTeamMembers);
  };

  const handleUtrChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUtr(e.target.value);
  };

  const validateUtr = (utr: string) => /^\d{12}$/.test(utr);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors: string[] = [];

    if (!validateUtr(utr)) validationErrors.push('UTR number must be 12 digits.');
    teamMembers.forEach((member, index) => {
      if (Object.values(member).some(field => !field)) validationErrors.push(`All fields must be filled for team member ${index + 1}`);
    });

    if (validationErrors.length) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    const formData = {
      teamLength,
      teamMembers,
      utr,
    };

    console.log(JSON.stringify(formData));

    try {
      // Replace with actual API request
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setSuccessMessage('Registration successful, payment pending, you will be emailed shortly.');
    } catch (error) {
      setSuccessMessage('Registration failed.');
    }
  };

  return (
    <div className="register-container">
      <h1>Team Registration</h1>
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

        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-form">
            <h3>Team Member {index + 1}</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={member.name}
                onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={member.email}
                onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={member.phoneNumber}
                onChange={(e) => handleTeamMemberChange(index, 'phoneNumber', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Institution</label>
              <input
                type="text"
                value={member.institution}
                onChange={(e) => handleTeamMemberChange(index, 'institution', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Year</label>
              <input
                type="text"
                value={member.year}
                onChange={(e) => handleTeamMemberChange(index, 'year', e.target.value)}
              />
            </div>
          </div>
        ))}


        <div className="form-group">
          <label>Payment QR Code</label>
          <img src="/qrcode.png" alt="QR Code" className="qr-code" />
        </div>

        <div className="form-group">
          <label>UTR Number</label>
          <input
            type="text"
            value={utr}
            onChange={handleUtrChange}
          />
        </div>


        {errors.length > 0 && (
          <div className="errors">
            {errors.map((error, index) => (
              <div key={index} className="error">{error}</div>
            ))}
          </div>
        )}

        {successMessage && <div className="success">{successMessage}</div>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;