import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import SupplierExperiences from "./components/SupplierExperiences";
import SupplierRewards from "./components/SupplierRewards";
import WhySuppliersLoveCareMe from "./components/WhySuppliersLoveCareMe";

function App() {
  return (
     <>
       <Header/>
       <HeroSection/>
       <StatsSection/>
       <WhySuppliersLoveCareMe/>
       <SupplierRewards/>
       <SupplierExperiences/>
     </>
  );
}

export default App;
