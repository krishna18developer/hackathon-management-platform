"use client";
import React, { useState } from 'react';
import './../styles/reset.css'; // Ensure your reset styles are applied

const Register = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLength, setTeamLength] = useState(3); // Default to 3 members
  const [teamMembers, setTeamMembers] = useState(
    Array.from({ length: 3 }, () => ({ name: '', email: '', phoneNumber: '' })) // Default with 3 members
  );
  const [utrNumber, setUtrNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setTeamMembers(updatedMembers);
  };

  const handleSubmit = () => {
    // Basic form validation
    if (!teamName || utrNumber.length !== 12 || teamMembers.some(member => !member.name || !member.email || !member.phoneNumber)) {
      setError('Please fill all details correctly. UTR number should be 12 digits.');
      return;
    }

    if (teamLength !== teamMembers.length) {
      setError('Number of team members does not match the team length.');
      return;
    }

    const registrationData = {
      teamName,
      teamLength,
      teamMembers,
      utrNumber,
    };

    console.log('Registration Data:', registrationData);

    // Simulate a POST request (this would actually be a fetch call to your API)
    setTimeout(() => {
      setSuccess('Registration successful. Payment validation is pending, you will receive an email after verification.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Hackathon Registration</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          type="number"
          placeholder="Team Length (min 3, max 6)"
          value={teamLength}
          onChange={(e) => {
            const length = Number(e.target.value);
            if (length >= 3 && length <= 6) {
              setTeamLength(length);
              setTeamMembers(prev => [
                ...prev.slice(0, length),
                ...Array.from({ length: length - prev.length }, () => ({ name: '', email: '', phoneNumber: '' }))
              ]);
            }
          }}
          max={6}
          min={3}
        />

        {teamMembers.map((member, index) => (
          <div key={index} className="mb-4">
            <input
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
              type="text"
              placeholder={index === 0 ? 'Team Leader Name' : `Team Member ${index + 1} Name`}
              value={member.name}
              onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
            />
            <input
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
              type="email"
              placeholder="Email"
              value={member.email}
              onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
            />
            <input
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
              type="text"
              placeholder="Phone Number"
              value={member.phoneNumber}
              onChange={(e) => handleTeamMemberChange(index, 'phoneNumber', e.target.value)}
            />
          </div>
        ))}

        {teamMembers.length < teamLength && (
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setTeamMembers([...teamMembers, { name: '', email: '', phoneNumber: '' }])}
          >
            Add Team Member
          </button>
        )}

        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          type="text"
          placeholder="UTR Number (12 digits)"
          value={utrNumber}
          onChange={(e) => setUtrNumber(e.target.value)}
        />

        <div className="mb-4">
          <img
            src="/register/qrcode.png"
            alt="Payment QR Code"
            className="mx-auto"
          />
        </div>

        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          I agree to abide by HackAttack's{' '}
          <a href="#" className="text-blue-500 underline">Terms of Service</a> and its{' '}
          <a href="#" className="text-blue-500 underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Register;