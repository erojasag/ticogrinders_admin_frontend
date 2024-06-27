import { useEffect } from "react";
import axios from "../api/axiosInstance";

function GoogleCallback() {
  useEffect(() => {
    const sendAccessCodeToBackend = async () => {
      try {
        const urlString = window.location.href;
        const parsedUrl = new URL(urlString);
        const code = parsedUrl.searchParams.get('code');

        console.log('Access code:', code);
        // Make a POST request to your backend server with the access code
        const response = await axios.post('/authGoogle/google/callback', {
          code: code
        });

        console.log('Response from backend:', response.data);

        // Redirect or handle success based on backend response
      } catch (error) {
        console.error('Error sending access code to backend:', error);
        // Handle error
      }
    };

    sendAccessCodeToBackend();
  }, []); // Empty dependency array to run the effect only once
  return <div>GoogleCallback</div>;
}

export default GoogleCallback;
