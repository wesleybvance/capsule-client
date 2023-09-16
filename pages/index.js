import TestSelect from '../components/Items/TestSelect';
import WelcomeUser from '../components/WelcomeUser';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <WelcomeUser />
      <TestSelect />
    </div>
  );
}

export default Home;
