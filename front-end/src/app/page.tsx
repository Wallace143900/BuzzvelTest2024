import AllThePower from "./components/AllThePower";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MakeSomething from "./components/MakeSomething";
import PickTheSun from "./components/PickTheSun";
import Powerful from "./components/Powerful";
import PServices from "./components/PServices";


export default function Home() {
  return (
    <>
      <Header />
      <PickTheSun />
      <PServices />
      <Powerful />
      <MakeSomething />
      <AllThePower />
      <Footer />
    </>
  );
}
