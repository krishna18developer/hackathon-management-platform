'use client'
import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLength, setTeamLength] = useState(1);
  const [teamMembers, setTeamMembers] = useState([{ name: '', email: '' }]);
  const [utrNumber, setUtrNumber] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([...teamMembers, { name: '', email: '' }]);
    }
  };

  const handleRemoveTeamMember = (index: number) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  const validateForm = () => {
    if (!teamName || !utrNumber) {
      setError('Please fill out all required fields.');
      return false;
    }

    if (teamMembers.length !== teamLength) {
      setError('Team length does not match the number of added members.');
      return false;
    }

    for (let member of teamMembers) {
      if (!member.name || !member.email) {
        setError('Please fill out all team member details.');
        return false;
      }
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }

    const formData = {
      teamName,
      teamLength,
      teamMembers,
      utrNumber,
    };

    console.log(JSON.stringify(formData, null, 2));

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(
          'Registration successful! Payment validation is pending. You will receive an email after verification.'
        );
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.formContainer}>
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className={styles.logo}
              alt="Logo"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className={styles.title}>Hackathon Registration</h1>

            {error && <p className={styles.errorMessage}>{error}</p>}
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Team Name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />

                <input
                  className={styles.input}
                  type="number"
                  placeholder="Team Length (max 4)"
                  value={teamLength}
                  onChange={(e) => setTeamLength(Math.min(4, Math.max(1, Number(e.target.value))))}
                />

                <p className="mt-3">Team Leader:</p>
                {teamMembers.map((member, index) => (
                  <div key={index} className="mt-5">
                    <input
                      className={styles.input}
                      type="text"
                      placeholder={`Team Member ${index + 1} Name`}
                      value={member.name}
                      onChange={(e) =>
                        handleTeamMemberChange(index, 'name', e.target.value)
                      }
                    />
                    <input
                      className={styles.input}
                      type="email"
                      placeholder={`Team Member ${index + 1} Email`}
                      value={member.email}
                      onChange={(e) =>
                        handleTeamMemberChange(index, 'email', e.target.value)
                      }
                    />
                    {index > 0 && (
                      <button
                        className={styles.removeButton}
                        onClick={() => handleRemoveTeamMember(index)}
                      >
                        Remove Team Member
                      </button>
                    )}
                  </div>
                ))}

                {teamMembers.length < 4 && (
                  <button
                    className={styles.button}
                    onClick={handleAddTeamMember}
                  >
                    Add Team Member
                  </button>
                )}

                <div className={styles.qrContainer}>
                  <p>Payment QR Code:</p>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Payment QR Code"
                    className={styles.qrImage}
                  />
                </div>

                <input
                  className={styles.input}
                  type="text"
                  placeholder="UTR Number"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                />

                <button
                  className={styles.button}
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundSection}>
          <div
            className="m-12 xl:m-16 w-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/background-image.jpg)' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;