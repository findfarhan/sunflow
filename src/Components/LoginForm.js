import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Message from './Message';

const LoginForm = () => {
  const [message, setMessage] = useState('');
  const nameRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const storedIsChecked = localStorage.getItem('isChecked');
    setIsChecked(storedIsChecked === 'true');
  }, []);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const storeLoginStatus = (isLoggedIn) => {
    localStorage.setItem('isLogin', isLoggedIn ? '1' : '0');
    localStorage.setItem('isChecked', isLoggedIn ? 'true' : 'false');
  };

  localStorage.setItem('email', 'admin@gmail.com');
  localStorage.setItem('password', '12345');
  const authenticateUser = () => {
    const getName = localStorage.getItem('email');
    const getPassword = localStorage.getItem('password');
    const userName = nameRef.current.value;
    const password1 = passRef.current.value;

    if (getName === userName && getPassword === password1) {
      storeLoginStatus(isChecked);
      navigate('/admin/issuePage');
    } else {
      if (getName != userName && getPassword != password1) {
        setMessage("Email or password doesn't exist");
      } else {
        console.log('error');
      }
    }
  };

  useEffect(() => {
    if (isChecked) {
      authenticateUser();
    }
  }, [isChecked]);

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser();
  };

  return (
    <>
      {message ? <Message message={message}>{message}</Message> : ''}
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-5 input-with-icon">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-svg"
          >
            <path
              d="M10.6094 9C9.70312 9 9.29688 9.5 7.82812 9.5C6.32812 9.5 5.92188 9 5.01562 9C2.70312 9 0.828125 10.9062 0.828125 13.2188V14.5C0.828125 15.3438 1.48438 16 2.32812 16H13.3281C14.1406 16 14.8281 15.3438 14.8281 14.5V13.2188C14.8281 10.9062 12.9219 9 10.6094 9ZM13.8281 14.5C13.8281 14.7812 13.5781 15 13.3281 15H2.32812C2.04688 15 1.82812 14.7812 1.82812 14.5V13.2188C1.82812 11.4375 3.23438 10 5.01562 10C5.64062 10 6.23438 10.5 7.82812 10.5C9.39062 10.5 10.0156 10 10.6094 10C12.3906 10 13.8281 11.4375 13.8281 13.2188V14.5ZM7.82812 8C10.0156 8 11.8281 6.21875 11.8281 4C11.8281 1.8125 10.0156 0 7.82812 0C5.60938 0 3.82812 1.8125 3.82812 4C3.82812 6.21875 5.60938 8 7.82812 8ZM7.82812 1C9.45312 1 10.8281 2.375 10.8281 4C10.8281 5.65625 9.45312 7 7.82812 7C6.17188 7 4.82812 5.65625 4.82812 4C4.82812 2.375 6.17188 1 7.82812 1Z"
              fill="#666666"
            />
          </svg>

          <input
            type="text"
            className="form-control input-feild shadow-none"
            placeholder="Username"
            ref={nameRef}
          />
        </div>
        <div className="mb-5 position-relative input-with-icon">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-svg"
          >
            <path
              d="M13.3281 7H12.8281V5.0625C12.8281 2.3125 10.5781 0.03125 7.82812 0C5.07812 0 2.82812 2.25 2.82812 5V7H2.32812C1.48438 7 0.828125 7.6875 0.828125 8.5V14.5C0.828125 15.3438 1.48438 16 2.32812 16H13.3281C14.1406 16 14.8281 15.3438 14.8281 14.5V8.5C14.8281 7.6875 14.1406 7 13.3281 7ZM3.82812 5C3.82812 2.8125 5.60938 1 7.82812 1C10.0156 1 11.8281 2.8125 11.8281 5V7H3.82812V5ZM13.3281 15H2.32812C2.04688 15 1.82812 14.7812 1.82812 14.5V8.5C1.82812 8.25 2.04688 8 2.32812 8H13.3281C13.5781 8 13.8281 8.25 13.8281 8.5V14.5C13.8281 14.7812 13.5781 15 13.3281 15Z"
              fill="#666666"
            />
          </svg>
          <input
            className="form-control input-feild shadow-none"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            ref={passRef}
          />
          <div
            onClick={toggleShowPassword}
            className="position-absolute top-0 end-0 mt-2 me-4 "
          >
            {showPassword ? (
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.82812 7C10.9219 7 11.8281 6.125 11.8281 5C11.8281 3.90625 10.9219 3 9.82812 3C9.79688 3 9.76562 3.03125 9.73438 3.03125C9.76562 3.1875 9.79688 3.34375 9.79688 3.53125C9.79688 4.34375 9.14062 5 8.32812 5C8.14062 5 7.98438 4.96875 7.82812 4.9375C7.82812 4.96875 7.82812 5 7.82812 5C7.82812 6.125 8.70312 7 9.82812 7ZM18.7031 5.5625C17.0156 2.25 13.6406 0 9.82812 0C5.98438 0 2.60938 2.25 0.921875 5.5625C0.859375 5.6875 0.828125 5.84375 0.828125 6C0.828125 6.1875 0.859375 6.34375 0.921875 6.46875C2.60938 9.78125 5.98438 12 9.82812 12C13.6406 12 17.0156 9.78125 18.7031 6.46875C18.7656 6.34375 18.7969 6.1875 18.7969 6.03125C18.7969 5.84375 18.7656 5.6875 18.7031 5.5625ZM9.82812 1C12.0156 1 13.8281 2.8125 13.8281 5C13.8281 7.21875 12.0156 9 9.82812 9C7.60938 9 5.82812 7.21875 5.82812 5C5.82812 2.8125 7.60938 1.03125 9.82812 1ZM9.82812 11C6.45312 11 3.39062 9.09375 1.82812 6C2.70312 4.28125 4.10938 2.84375 5.85938 1.96875C5.20312 2.8125 4.82812 3.875 4.82812 5C4.82812 7.78125 7.04688 10 9.82812 10C12.5781 10 14.8281 7.78125 14.8281 5C14.8281 3.875 14.4219 2.8125 13.7656 1.96875C15.5156 2.84375 16.9219 4.28125 17.8281 6C16.2344 9.09375 13.1719 11 9.82812 11Z"
                  fill="#666666"
                />
              </svg>
            ) : (
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.82812 7C10.9219 7 11.8281 6.125 11.8281 5C11.8281 3.90625 10.9219 3 9.82812 3C9.79688 3 9.76562 3.03125 9.73438 3.03125C9.76562 3.1875 9.79688 3.34375 9.79688 3.53125C9.79688 4.34375 9.14062 5 8.32812 5C8.14062 5 7.98438 4.96875 7.82812 4.9375C7.82812 4.96875 7.82812 5 7.82812 5C7.82812 6.125 8.70312 7 9.82812 7ZM18.7031 5.5625C17.0156 2.25 13.6406 0 9.82812 0C5.98438 0 2.60938 2.25 0.921875 5.5625C0.859375 5.6875 0.828125 5.84375 0.828125 6C0.828125 6.1875 0.859375 6.34375 0.921875 6.46875C2.60938 9.78125 5.98438 12 9.82812 12C13.6406 12 17.0156 9.78125 18.7031 6.46875C18.7656 6.34375 18.7969 6.1875 18.7969 6.03125C18.7969 5.84375 18.7656 5.6875 18.7031 5.5625ZM9.82812 1C12.0156 1 13.8281 2.8125 13.8281 5C13.8281 7.21875 12.0156 9 9.82812 9C7.60938 9 5.82812 7.21875 5.82812 5C5.82812 2.8125 7.60938 1.03125 9.82812 1ZM9.82812 11C6.45312 11 3.39062 9.09375 1.82812 6C2.70312 4.28125 4.10938 2.84375 5.85938 1.96875C5.20312 2.8125 4.82812 3.875 4.82812 5C4.82812 7.78125 7.04688 10 9.82812 10C12.5781 10 14.8281 7.78125 14.8281 5C14.8281 3.875 14.4219 2.8125 13.7656 1.96875C15.5156 2.84375 16.9219 4.28125 17.8281 6C16.2344 9.09375 13.1719 11 9.82812 11Z"
                  fill="#666666"
                />
              </svg>
            )}
          </div>
        </div>

        <div class="form-check d-flex align-items-center mb-5">
          <input
            className="form-check-input shadow-none"
            type="checkbox"
            value=""
            checked={isChecked}
            onChange={handleCheckbox}
            id="defaultCheck1"
          />
          <label
            class="form-check-label check-label pt-2"
            htmlFor="defaultCheck1"
          >
            Keep me logged in
          </label>
        </div>
        <div className="d-grid">
          <button className="form-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
