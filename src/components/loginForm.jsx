import { useState } from 'react';
import axios from '../api/axiosInstance';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authReducer';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
export default function LoginForm({
  setShow,
  setMessage,
  setMessageTitle,
  setMessageType,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', formData);
      console.log(response.data.user.isAdmin);
      if (response.data.user.isAdmin === false) {
        setShow(true);
        setMessageTitle('What are you doing here?');
        setMessage('You are not authorized to access this page');
        setMessageType('error');

        setTimeout(() => {
          window.location.href = 'https://ticogrinders.com';
        }, 6000);
      } else {
        Cookies.set('token', response.data.token);

        setShow(true);
        setMessageTitle('Welcome');
        setMessage('You have successfully logged in');
        setMessageType('success');

        setTimeout(() => {
          setShow(!true);
        }, 3000);
        setTimeout(() => {
          dispatch(login(response.data.user));
          window.location.href = '/dashboard';
        }, 6000);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit} onChange={handleChange}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-brandPurple"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            autoComplete="username"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brandPurple sm:text-sm sm:leading-6 pl-2"
          />
        </div>
      </div>

      <div className="max-w-sm">
        <label className="block text-sm mb-2 text-brandPurple">Password</label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={!showPassword ? 'password' : ''}
            autoComplete="current-password"
            required
            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brandPurple sm:text-sm sm:leading-6"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-0 end-0 p-3.5 rounded-e-md text-gray-500 hover:text-brandPurple focus:outline-none"
          >
            {!showPassword ? (
              <EyeIcon className="h-5 w-5" />
            ) : (
              <EyeSlashIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-brandPurple focus:ring-brandPurple"
          />
          <label
            htmlFor="remember-me"
            className="ml-3 block text-sm leading-6 text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm leading-6 ">
          <a
            href="#"
            className="font-semibold text-brandPurple hover:text-brandPurple/80"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-brandPurple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brandPurple/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurple"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
