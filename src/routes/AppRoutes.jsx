import {
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import GeneralInformation from "../pages/GeneralInformation/GeneralInformation";
import Characters from "../pages/Characters/Characters";
import Enemies from "../pages/Enemies/Enemies";
import Locations from "../pages/Locations/Locations";
import LocationDetails from "../pages/Locations/LocationDetails";

import EquipmentLayout from "../pages/Equipment/EquipmentLayout";
import Equipment from "../pages/Equipment/Equipment";
import Weapons from "../pages/Equipment/Weapons/Weapons";
import Relics from "../pages/Equipment/Relics/Relics";
import Armors from "../pages/Equipment/Armors/Armor";
import Gourds from "../pages/Equipment/Gourds/Gourds";
import Curios from "../pages/Equipment/Curios/Curios";
import Vessels from "../pages/Equipment/Vessels/Vessels";
import Spirits from "../pages/Equipment/Spirits/Spirits";
import Armor from "../pages/Equipment/Armors/Armor";

import FinalBosses from "../pages/Bosses/FinalBosses/FinalBosses";
import SecertBosses from "../pages/Bosses/SecertBosses/SecertBosses";
import LoongBosses from "../pages/Bosses/LoongBosses/LoongBosses";
import Ending from "../pages/Ending/Ending";
import Overview from "../pages/Overview/Overview";
import Items from "../pages/Items/Items";
import Medicines from "../pages/Items/Medicines/Medicines";
import KeyItems from "../pages/Items/KeyItems/KeyItems";
import Ingredients from "../pages/Items/Ingredients/Ingredients";
import Materials from "../pages/Items/Materials/Materials";
import Media from "../pages/Media/Media";
import Footer from "../components/Footer/Footer";
function OldEquipmentRedirect() {
  const { category } = useParams();

  return (
    <Navigate
      to={
        category
          ? `/equipment/${category}`
          : "/equipment"
      }
      replace
    />
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Footer />
          </>
        }
      />

      <Route
        path="/explore"
        element={<Explore />}
      />

      <Route
        path="/explore/general"
        element={<GeneralInformation />}
      />
    
      <Route
        path="/explore/general/ending"
        element={<Ending />}
      />

      <Route
        path="/explore/characters"
        element={<Characters />}
      />

      <Route
        path="/explore/enemies"
        element={<Enemies />}
      />

      <Route
        path="/explore/locations"
        element={<Locations />}
      />

      <Route
        path="/explore/locations/:locationId"
        element={<LocationDetails />}
      />

      <Route
        path="/equipment"
        element={<EquipmentLayout />}
      >
        <Route
          index
          element={<Equipment />}
        />

        <Route
          path="relics"
          element={<Relics />}
        />

        <Route
          path="weapons"
          element={<Weapons />}
        />

        <Route
          path="armors"
          element={<Armors />}
        />

        <Route
          path="gourds"
          element={<Gourds />}
        />

        <Route
          path="curios"
          element={<Curios />}
        />

        <Route
          path="vessels"
          element={<Vessels />}
        />

        <Route
          path="spirits"
          element={<Spirits />}
        />
      </Route>

      <Route
        path="/bosses"
        element={
          <Navigate
            to="/#bosses"
            replace
          />
        }
      />

      <Route
        path="/bosses/final"
        element={<FinalBosses />}
      />

      <Route
        path="/bosses/secert"
        element={<SecertBosses />}
      />

      <Route
        path="/bosses/loong"
        element={<LoongBosses />}
      />

      <Route
        path="/explore/equipment"
        element={<OldEquipmentRedirect />}
      />

      <Route
        path="/explore/equipment/:category"
        element={<OldEquipmentRedirect />}
      />

      <Route
  path="/overview"
  element={<Overview />}
/>
<Route
  path="/items"
  element={<Items />}
/>

<Route
  path="/items/medicines"
  element={<Medicines />}
/>

<Route path="/items/key-items" 
element={<KeyItems />}
 />

 <Route
   path="/items/ingredients"
   element={<Ingredients />}
 />

<Route path="/items/materials" 
element={<Materials />} 
/>

<Route
  path="/media"
  element={
    <>
      <Media />
      <Footer />
    </>
  }
/>


    </Routes>

    
  );
}


export default AppRoutes;