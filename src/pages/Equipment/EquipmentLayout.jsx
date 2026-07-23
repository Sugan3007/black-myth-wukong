import { Outlet } from "react-router-dom";

import Navbar from "../../components/layout/Navbar/Navbar";

function EquipmentLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default EquipmentLayout;
