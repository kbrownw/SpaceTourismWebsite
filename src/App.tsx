import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import { useScreenSizeContext } from "./context/ScreenSizeContext";
import NavBar from "./components/navBar/NavBar";
import { Routes } from "react-router-dom";

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
      <main className={`app bg-cover bg-dark-blue ${currentBackground}`}>
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Routes></Routes>
      </main>
    </>
  );
}

export default App;
