import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./components/Slider/Slider";
import Container6 from "./components/Container6/Container6";
import Container7 from "./components/Container7/Container7";
import Container9 from "./components/Container9/Container9";
import Main from "./components/Main/Main";
import Container3 from "./components/Container3/Container3";
import Container4 from "./components/Container4/Container4";
import Container5 from "./components/Container5/Container5";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Main />
      <Slider />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container9 />
      <Footer />
    </div>
  );
}
