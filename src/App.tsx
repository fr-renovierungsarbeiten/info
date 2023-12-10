import { FC, useEffect } from "react";
import "./App.module.css";
import AdminPage from "./components/Admin/AdminPage";
import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import ButtonScrollUp from "./components/ButtonScrollUp/ButtonScrollUp";
import { calculateButtonScale } from "./services/scaleService.ts";

const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  document.documentElement.style.setProperty(
    "--button-scale",
    calculateButtonScale() + ""
  );

  return (
    <div>
      <Routes>
        <Route index element={<Hero />} />
        <Route
          path={`/${import.meta.env.VITE_REACT_APP_ROUTE}`}
          element={<AdminPage />}
        />
      </Routes>
      <ButtonScrollUp />
    </div>
  );
};

export default App;
