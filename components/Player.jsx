'use client';
import Playerpng from '../assets/player.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// const useAudio = (url) => {
//   const [audio, setAudio] = useState(new Audio(url));
//   // const audio = new Audio(
//   //   'https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H'
//   // );
//   const [playing, setPlaying] = useState(false);
//   const toggle = () => setPlaying(!playing);
//   const autoplay = () => {
//     setPlaying(true);
//   };

//   useEffect(() => {
//     audio.volume = 1;
//     audio.loop = true;
//     playing ? audio.play() : audio.pause();
//   }, [playing]);

//   useEffect(() => {
//     window.addEventListener('click', autoplay, { once: true });
//     audio.addEventListener('ended', () => setPlaying(true));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(true));
//       audio.pause();
//     };
//   }, []);

//   return [playing, toggle];
// };

const Player = ({ url }) => {
  // useEffect(() => {
  //   const audio = new Audio(
  //     'https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H'
  //   );
  // });
  // const [playing, toggle] = useAudio(
  //   'https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H'
  // );
  // const audio = new Audio(
  //   'https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H'
  // );
  const [audio, setAudio] = useState(null);

  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  const autoplay = () => {
    setPlaying(true);
  };

  useEffect(() => {
    setAudio(
      new Audio('https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H')
    );
    audio.volume = 1;
    audio.loop = true;
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    window.addEventListener('click', autoplay, { once: true });
    audio.addEventListener('ended', () => setPlaying(true));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(true));
      audio.pause();
    };
  }, []);

  return (
    <div className="player">
      <p>
        <span>heavy metal </span>
        <span> ice + alabaster</span>
        <span> 9mice, kai angel</span>
      </p>
      <button className="start" onClick={toggle}>
        <Image
          src={Playerpng}
          alt=""
          className={playing ? 'play' : 'notplay'}
        />
      </button>
    </div>
  );
};

export default Player;
