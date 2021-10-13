import Head from 'next/head';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ariful Islam || Web Developer</title>
        <link rel="icon" href="/coding1.png" />
      </Head>
      <Header />
    </div>
  );
}
