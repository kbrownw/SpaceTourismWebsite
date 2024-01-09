import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import { useScreenSizeContext } from "./context/ScreenSizeContext";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import data from "./assets/data/data.json";
import Home from "./components/home/Home";
import { AnimatePresence } from "framer-motion";
import Destination from "./components/destination/Destination";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const { isLargeScreen, isMediumScreen } = useScreenSizeContext();
  const [currentBackground, setCurrentBackground] = useState<string>("");

  useEffect(() => {
    if (isLargeScreen) {
      setCurrentBackground(`${selectedPage}-desktop`);
    } else if (!isLargeScreen && isMediumScreen) {
      setCurrentBackground(`${selectedPage}-tablet`);
    } else {
      setCurrentBackground(`${selectedPage}-mobile`);
    }
  }, [isLargeScreen, isMediumScreen, selectedPage]);

  return (
    <>
      <main
        className={`bg-cover bg-dark-blue ${currentBackground} h-full pb-20`}
      >
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={<Home setSelectedPage={setSelectedPage} />}
            ></Route>
            <Route
              path={`/${SelectedPage.Destination}`}
              element={<Destination data={data.destinations} />}
            ></Route>
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
