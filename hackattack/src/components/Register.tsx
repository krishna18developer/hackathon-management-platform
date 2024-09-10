"use client";
import React, { useState } from 'react';
import './../styles/reset.css';

const Register = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLength, setTeamLength] = useState(3); // Default to 3 members
  const [teamMembers, setTeamMembers] = useState([
    { name: '', email: '', phoneNumber: '' },
    { name: '', email: '', phoneNumber: '' },
    { name: '', email: '', phoneNumber: '' }
  ]); // Default with 3 members
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
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Hackathon Registration</h1>

            <div className="w-full flex-1 mt-8">
              {/* Display Error Message */}
              {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">{error}</div>}
              {/* Display Success Message */}
              {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">{success}</div>}

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Team Name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />

                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="number"
                  placeholder="Team Length (min 3, max 6)"
                  value={teamLength}
                  onChange={(e) => {
                    const length = Number(e.target.value);
                    if (length >= 3 && length <= 6) {
                      setTeamLength(length);
                      setTeamMembers((prev) => [...prev.slice(0, length), ...Array(length - prev.length).fill({ name: '', email: '', phoneNumber: '' })]);
                    }
                  }}
                  max={6}
                  min={3}
                />

                {/* Team Members Section */}
                {teamMembers.map((member, index) => (
                  <div key={index} className="mt-5">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder={index === 0 ? `Team Leader Name` : `Team Member ${index + 1} Name`}
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      placeholder="Email"
                      value={member.email}
                      onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Phone Number"
                      value={member.phoneNumber}
                      onChange={(e) => handleTeamMemberChange(index, 'phoneNumber', e.target.value)}
                    />
                  </div>
                ))}

                {/* Add Member Button */}
                {teamMembers.length < teamLength && (
                  <button
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    onClick={() => setTeamMembers([...teamMembers, { name: '', email: '', phoneNumber: '' }])}
                  >
                    Add Team Member
                  </button>
                )}

                {/* UTR Number Field */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="UTR Number (12 digits)"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                />

                {/* Payment QR Code */}
                <div className="mt-5">
                  <img
                    src="/register/qrcode.png"
                    alt="Payment QR Code"
                    className="w-64 mx-auto"
                  />
                </div>

                {/* Register Button */}
                <button
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handleSubmit}
                >
                  Register
                </button>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by HackAttack's{' '}
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>{' '}
                  and its{' '}
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;