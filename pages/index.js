import OutfitFormTest from '../components/Forms/OutfitFormTest';
import WelcomeUser from '../components/WelcomeUser';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <WelcomeUser />
      <OutfitFormTest />
    </div>
  );
}

export default Home;
