import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function SendVehicle(props) {
  const vehicle = props.vehicle;
  const [vehicleDetails, setVehicleDetails] = useState(vehicle || null);
  const form = useRef();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [licenseNo, setLicenseNo] = useState('');

  const handleMsg = (e) => {
    setLicenseNo(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const message = `Vehicle Title: ${vehicleDetails.title}\nVehicle Body: ${vehicleDetails.body}\nLicense No: ${licenseNo}`;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_k0m5flo', 'template_nzavckn', templateParams, 'D3HTUOOHbnlJyCNUm')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email, please try again.');
      });
  };

  return (
    <div>
      {vehicleDetails && (
        <div>
          <p>Vehicle Title: {vehicleDetails.title}</p>
          <p>Vehicle Body: {vehicleDetails.body}</p>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="from_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>License No</label>
        <input
          type="text"
          name="license_no"
          value={licenseNo}
          onChange={handleMsg}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
