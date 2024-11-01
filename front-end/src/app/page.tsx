"use client";
import { useEffect, useState } from "react";
import AllThePower from "./components/AllThePower";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MakeSomething from "./components/MakeSomething";
import PickTheSun from "./components/PickTheSun";
import Powerful from "./components/Powerful";
import PServices from "./components/PServices";
import LoadingComponent from "./components/LoadingComponent";


export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Header />
          <PickTheSun />
          <PServices />
          <Powerful />
          <MakeSomething />
          <AllThePower />
          <Footer />
        </>
      )}
    </>
  );
}
