import Head from 'next/head';
import Link from 'next/link';
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
      <div className="cflex cright margin15">
        <Link passHref href="/closet"><h3 className="racing-sans m-3 font30 home-btn">❀  view your closet </h3></Link>
        <Link passHref href="/items/new"><h3 className="racing-sans m-3 font30 home-btn">✻  add item to closet</h3></Link>
        <Link passHref href="/outfits/new"><h3 className="racing-sans m-3 font30 home-btn">✰  create an outfit</h3></Link>
        <Link passHref href="/outfits/all"><h3 className="racing-sans m-3 font30 home-btn">✭  see your outfits</h3></Link>
      </div>
    </div>
  );
}

export default Home;
