import Image from "next/image";
import Header from "./components/Hero/Header";
import NavigationBar from "./components/Navigation/NavigationBar";
import About from "./components/About/About";
import Thanks from "./components/ThanksCarousel/ThanksCarousel";
import PluginPreview from "./components/PluginsInfo/PluginPreview";
import Category from "./components/Category/Category";
import PluginCarousel from "./components/TopSellers/PluginCarousel";
import TopSeller from "./components/TopSellers/TopSeller";
import ReviewCard from "./components/Reviews/ReviewCard";
import PromoReviewCard from "./components/Reviews/PromoReviewCard";
import ReviewCarousel from "./components/Reviews/ReviewCarousel";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen ">
      <NavigationBar />
      <Header />
            <About />

      <PluginPreview />
      <Category />
      <TopSeller />
      <ReviewCarousel />
      <Thanks />
      <Footer/>
      
    </div>
  );
}
