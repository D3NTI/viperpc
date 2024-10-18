import Player from '../../components/Player';
import Nav from '../../components/Nav';
import Main from '../../components/Main';
import Gallery from '../../components/Gallery';
import Preview from '../../components/Preview';
import Prices from '../../components/Prices';
import Components from '../../components/Components';
import Reservation from '../../components/Reservation';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Player url="https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H"></Player>
      <Nav></Nav>
      <Main></Main>
      <Gallery></Gallery>
      <Preview></Preview>
      <Prices></Prices>
      <Components></Components>
      <Reservation></Reservation>
      <Footer></Footer>
    </>
  );
}
