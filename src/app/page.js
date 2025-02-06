import Image from "next/image";
import Header from "./components/Hero/Header";
import NavigationBar from "./components/Navigation/NavigationBar";
import About from "./components/About/About";
import Thanks from "./components/ThanksCarousel/ThanksCarousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen ">
      <NavigationBar />
      <Header />
      <About />
      <Thanks />
    </div>
  );
}
