import Head from 'next/head';
import WelcomeUser from '../components/WelcomeUser';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <Head>
        <title>Home</title>
      </Head>
      <WelcomeUser />
    </div>
  );
}

export default Home;
