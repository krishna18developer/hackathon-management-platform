import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../styles/Register.css';

const Register: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(3);
  const [teamMembers, setTeamMembers] = useState<any[]>(Array.from({ length: 3 }, () => ({})));
  const [utr, setUtr] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [hackathons, setHackathons] = useState<{ id: string; name: string }[]>([]);
  const [selectedHackathon, setSelectedHackathon] = useState<string>('');
  const baseAmount = 600;
  const [amount, setAmount] = useState<number>(3 * baseAmount);
  const teamSizeOptions = [3, 4, 5, 6];

  useEffect(() => {
    // Fetch hackathons from the API
    const fetchHackathons = async () => {
      try {
        const response = await axios.get('/api/hackathons/names');
        
        if (response.status === 200) {
          const data = response.data;
          if (Array.isArray(data) && data.length > 0) {
            setHackathons(data);
            setSelectedHackathon(data[0].id); // Set the first hackathon as default
          } else {
            throw new Error('Unexpected data format');
          }
        } else {
          throw new Error('Failed to fetch hackathons');
        }
      } catch (error) {
        // Fallback to default hackathon if there’s an error
        const fallbackHackathon = { id: 'default', name: 'Hackattack 2024' };
        setHackathons([fallbackHackathon]);
        setSelectedHackathon(fallbackHackathon.id);
       // setErrors(['Failed to load hackathons. Showing default hackathon.']);
      }
    };

    fetchHackathons();
  }, []);

  const handleTeamSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value, 10);
    setTeamSize(newSize);
    setAmount(newSize * baseAmount);
    setTeamMembers(Array.from({ length: newSize }, () => ({})));
  };

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeamMembers(members =>
      members.map((member, i) => (i === index ? { ...member, [name]: value.toUpperCase() } : member))
    );
  };

  const validateUtr = (utr: string) => /^\d{12}$/.test(utr);
  const validateYear = (year: string) => /^[1-4]$/.test(year);
  const validatePhoneNumber = (phone: string) => /^[0-9]{10,15}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let validationErrors: string[] = [];
    
    if (!validateUtr(utr)) {
      validationErrors.push('Invalid UTR Number.');
    }

    teamMembers.forEach((member, index) => {
      Object.entries(member).forEach(([key, value]) => {
        if (!value) {
          validationErrors.push(`All fields for team member ${index + 1} must be filled.`);
        }
      });

      if (!validateYear(member.year)) {
        validationErrors.push(`Year for team member ${index + 1} must be between 1 and 4.`);
      }

      if (!validatePhoneNumber(member.phone)) {
        validationErrors.push(`Phone number for team member ${index + 1} is invalid.`);
      }
    });

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccess(null);
      return;
    }

    const formData = { teamSize, teamMembers, utr, hackathonId: selectedHackathon };
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:3001/api/register', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.status === 200) {
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
      <h1>Hackattack Registration</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='selectHackathon-label' htmlFor="hackathon">Select Hackathon</label>
            <select
              id="hackathon"
              value={selectedHackathon}
              onChange={e => setSelectedHackathon(e.target.value)}
            >
              {hackathons.map(hackathon => (
                <option key={hackathon.id} value={hackathon.id}>
                  {hackathon.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="teamName">Team Name</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              onChange={e => handleInputChange(0, e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="teamSize">Team Size</label>
            <select
              id="teamSize"
              value={teamSize}
              onChange={handleTeamSizeChange}
            >
              {teamSizeOptions.map(option => (
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
            <label htmlFor="utr">Amount : ₹{amount}</label>
          </div>
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