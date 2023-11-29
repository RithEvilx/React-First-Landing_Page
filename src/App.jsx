import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  let heroData = [
    {
      text1: "Dive into",
      text2: "what you love",
    },
    {
      text1: "Indulge",
      text2: "Your passions",
    },
    {
      text1: "Give in to",
      text2: "Your passions",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);

  //TODO: Play or Pause Video
  const [playStatus, setPlayStatus] = useState(false);

  //TODO: Background Image will update every 3-seconds
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  //? ^^ This effect will run only first time 
  //? when the webpage loaded use []
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        //TODO: to set the video play or pause
        //? Paste all variable
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </>
  );
};

export default App;
