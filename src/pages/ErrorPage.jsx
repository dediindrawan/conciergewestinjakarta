import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="wrapper">
        <h1>Oops! Something went wrong.</h1>
        <p>
          It seems we encountered an unexpected issue. <br className="mb-4" />
          We apologize for the inconvenience and appreciate your patience as we resolve this.
        </p>

        <Button onClick={() => navigate(-1)}>Back to Previous Page</Button>
      </div>
    </div>
  );
};
