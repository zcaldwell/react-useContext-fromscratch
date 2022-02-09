import React from 'react';

export default function Message({ message }) {
  const { entry, name } = message;

  return (
    <div>
      <h2>{name}</h2>
      <p>{entry}</p>
    </div>
  );
}
