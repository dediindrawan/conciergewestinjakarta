import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone must be numeric')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone is required'),
  message: yup.string().min(10, 'Message should be at least 10 characters').required('Message is required'),
});

export const ContactForm = () => {
  const [startTime, setStartTime] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setStartTime(Date.now()); // Record form load time
  }, []);

  const onSubmit = (data) => {
    const timeTaken = Date.now() - startTime;

    // Honeypot check
    if (data.honeypot) {
      alert('Bot detected.');
      return;
    }

    // Time-based spam prevention
    if (timeTaken < 3000) {
      alert('Form filled too quickly, possibly a bot.');
      return;
    }

    // Open WhatsApp with form data
    const whatsappLink = `https://wa.me/6285879055240?text=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`)}`;
    window.open(whatsappLink, '_blank');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h3 className='mb-4 text-lg text-center font-semibold'>We're Here to Help, Get in Touch!</h3>

      {/* Honeypot field */}
      <input type="text" name="honeypot" style={{ display: 'none' }} {...register('honeypot')} />

      <div className="input-section">
        <label>Name:</label>
        <input {...register('name')} placeholder="Enter your name" />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="input-section">
        <label>Email:</label>
        <input {...register('email')} placeholder="Enter your email" />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="input-section">
        <label>Phone:</label>
        <input {...register('phone')} placeholder="Enter your phone number" />
        {errors.phone && <p className="error-message">{errors.phone.message}</p>}
      </div>

      <div className="input-section">
        <label>Message:</label>
        <textarea {...register('message')} placeholder="Enter your message" />
        {errors.message && <p className="error-message">{errors.message.message}</p>}
      </div>

      <button type="submit" className="submit-button">
        Send via WhatsApp
      </button>
    </form>
  );
};
