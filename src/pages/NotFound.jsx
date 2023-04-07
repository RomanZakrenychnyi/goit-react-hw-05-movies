import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Error! Please check if url address is correct.</h1>
      <p>try this button to go back on home page</p>
      <Link to={'/'}>
        <button>Home page</button>
      </Link>
    </>
  );
};

export default NotFound;
