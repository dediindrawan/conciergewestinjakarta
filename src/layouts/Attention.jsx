import { Link } from 'react-router-dom';

export const Attention = () => {
  return (
    <div className="attention-point">
      <span className="tracking-widest font-semibold">👋 IMPORTANT NOTICE:</span>{' '}
      <span>
        "This website is a trial or demonstration version and does not directly represent the company. All information on this site is for demonstration purposes only and does not reflect the official policies or information of the company.
        For further information, please contact the company through the official website of{' '}
        <Link className="underline text-blue-500 lg:text-base" to={'https://id.westinjakarta.com/'} target="_blank" rel="noopener noreferrrer">
          The Westin Jakarta
        </Link>
        ."
      </span>
    </div>
  );
};
