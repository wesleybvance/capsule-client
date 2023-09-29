import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
import Signin from '../components/Signin';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/Forms/RegisterForm';
import CursorForm from '../components/Forms/CursorForm';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading, updateUser } = useAuth();
  const [selectedOption, setSelectedOption] = useState('');

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  const handleRadioChange = (selection) => {
    setSelectedOption(selection);
    console.warn(selectedOption);
  };

  const cursorClassName = `${
    selectedOption === 'cursor' ? 'cursor' : ''
  } ${
    selectedOption === 'cursor1' ? 'cursor1' : ''
  } ${
    selectedOption === 'cursor2' ? 'cursor2' : ''
  } ${
    selectedOption === 'cursor3' ? 'cursor3' : ''
  }`;

  // what the user should see if they are logged in
  if (user) {
    return (
      <div className={cursorClassName}>
        <NavBar /> {/* NavBar only visible if user is logged in and is in every view */}
        <div className="flex center"><CursorForm handleRadioChange={handleRadioChange} /></div>
        <div className="container">{'valid' in user ? <RegisterForm user={user} updateUser={updateUser} /> : <Component {...pageProps} />}</div>
      </div>
    );
  }

  return <Signin />;
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
