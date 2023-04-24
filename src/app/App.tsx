import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import CitySearch from "../pages/CitySearch";
import CityInfo from "../pages/CityInfo";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<CitySearch />} />
      <Route path=":cityName" element={<CityInfo />} />
      <Route path="404" element={<NotFound />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
