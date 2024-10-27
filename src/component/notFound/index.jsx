import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 animate-fadeIn">
        <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 text-8xl mb-4" />
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <p className="text-2xl mb-4">Oops! Page not found</p>
        <p className="text-lg text-gray-600 mb-6 text-center px-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a href="/" className="text-blue-500 hover:underline text-lg">
          Go back to Home
        </a>
      </div>
    );
  };

  export default NotFound;