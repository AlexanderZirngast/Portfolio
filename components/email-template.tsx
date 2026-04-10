import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  name: string;
  email: string;
}

export function EmailTemplate({ email, name, message }: EmailTemplateProps) {
  return (
    <div>
      <h2>Name:</h2>
      <p>{name}</p>
      <h2>Email:</h2>
      <p>{email}</p>
      <h2>Message:</h2>
      <p className='border-2 rounded-xl p-4 '>
        {message}
      </p>
    </div>
  );
}