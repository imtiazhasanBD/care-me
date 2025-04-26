import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import PopularCategories from "./components/PopularCategories";
import StatsSection from "./components/StatsSection";
import SupplierExperiences from "./components/SupplierExperiences";
import SupplierRewards from "./components/SupplierRewards";
import SupplierSupport from "./components/SupplierSupport";
import WhySuppliersLoveCareMe from "./components/WhySuppliersLoveCareMe";

function App() {
  return (
     <div className="max-w-[1500px] mx-auto">
       <Header/>
       <HeroSection/>
       <StatsSection/>
       <WhySuppliersLoveCareMe/>
       <SupplierRewards/>
       <SupplierExperiences/>
       <HowItWorks/>
       <PopularCategories/>
       <SupplierSupport/>
       <Footer/>
     </div>
  );
}

export default App;
