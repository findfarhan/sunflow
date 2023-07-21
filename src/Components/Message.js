import React from 'react';

const Message = ({ message }) => {
  return (
    <div
      class="alert alert-primary d-flex align-items-center fs-4"
      role="alert"
    >
      {message}
    </div>
  );
};

export default Message;
