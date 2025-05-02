import { Routes, Route } from "react-router-dom";
import Home from "./Pages-Main/Home";
import Mac from "./Pages-Main/Mac";
import Iphone from "./Pages-Main/Iphone";
import Ipad from "./Pages-Main/Ipad";
import Watch from "./Pages-Main/Watch";
import Airpods from "./Pages-Main/Airpods";
import TvHome from "./Pages-Main/TvHome";
import Entertainment from "./Pages-Main/Entertainment";
import Accessories from "./Pages-Main/Accessories";
import Support from "./Pages-Main/Support";
import MacList from "./Slidder/MacList";
import IphoneList from "./Slidder/IphoneList";
import IpadList from "./Slidder/IpadList";
import Watchlist from "./Slidder/Watchlist";
import Airpodslist from "./Slidder/Airpodslist";
import Airtaglist from "./Slidder/Airtaglist";
import Appletvlist from "./Slidder/Appletvlist";
import Homepodlist from "./Slidder/Homepodlist";
import Accessorieslist from "./Slidder/Accessorieslist";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/iphone" element={<Iphone />} />
      <Route path="/ipad" element={<Ipad />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/airpods" element={<Airpods />} />
      <Route path="/tv-home" element={<TvHome />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/support" element={<Support />} />
      <Route path="/maclist" element={<MacList />} />
      <Route path="/iphonelist" element={<IphoneList />} />
      <Route path="/ipadlist" element={<IpadList />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/airpodslist" element={<Airpodslist />} />
      <Route path="/airtaglist" element={<Airtaglist />} />
      <Route path="/appletvlist" element={<Appletvlist />} />
      <Route path="/homepodlist" element={<Homepodlist />} />
      <Route path="/accessorieslist" element={<Accessorieslist />} />
    </Routes>
  );
};

export default AllRoutes;
