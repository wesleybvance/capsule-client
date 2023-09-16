import WelcomeUser from '../components/WelcomeUser';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      // style={{
      //   height: '100vh',
      //   padding: '30px',
      //   maxWidth: '1000px',
      //   margin: 'auto',
      // }}
    >
      <WelcomeUser />
    </div>
  );
}

export default Home;
