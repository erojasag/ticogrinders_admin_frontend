import { useState } from 'react';
import LoginForm from '../components/loginForm';
import Notifications from '../components/notifications';
import LoginFormOauth from '../components/loginFormOauth';

export default function Login() {
  const [show, setShow] = useState(false);
  const [messageTitle, setMessageTitle] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  return (
    <>
      <Notifications
        show={show}
        setShow={setShow}
        messageTitle={messageTitle}
        setMessageTitle={setMessageTitle}
        message={message}
        setMessage={setMessage}
        messageType={messageType}
      />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-32 w-auto"
                src="./logo.png"
                alt="Ticogrinders"
              />
            </div>
            <LoginForm
              setShow={setShow}
              setMessage={setMessage}
              setMessageTitle={setMessageTitle}
              setMessageType={setMessageType}
            />
            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <LoginFormOauth />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
