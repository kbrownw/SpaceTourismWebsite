import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import { useScreenSizeContext } from "./context/ScreenSizeContext";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import data from "./assets/data/data.json";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import PageTitle from "./components/pageTitles/PageTitle";
import Crew from "./components/crew/CrewPage";
import TechnologyPage from "./components/technology/TechnologyPage";

interface PageTitle {
  number: string;
  title: string;
}

const pageTitles: PageTitle[] = [
  {
    number: "01",
    title: "PICK YOUR DESTINATION",
  },
  {
    number: "02",
    title: "MEET YOUR CREW",
  },
  {
    number: "03",
    title: "SPACE LAUNCH 101",
  },
];

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const { isLargeScreen, isMediumScreen } = useScreenSizeContext();
  const [currentBackground, setCurrentBackground] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<PageTitle>(pageTitles[0]);
  const location = useLocation();

  //Get current URL and return it
  const getCurrentPath = () => {
    const currentPathData: string[] = window.location.href.split("/");

    return currentPathData[3];
  };

  // Set proper selected page if page is refreshed off of Home page
  useEffect(() => {
    const pathOnLoad = getCurrentPath();
    if (pathOnLoad === "" && selectedPage !== SelectedPage.Home) {
      setSelectedPage(SelectedPage.Home);
    }
    if (pathOnLoad !== "" && pathOnLoad !== selectedPage) {
      setSelectedPage(pathOnLoad as SelectedPage);
    }
  }, []);

  //Set poper backgrounds based on selected page and screen size
  useEffect(() => {
    if (isLargeScreen) {
      setCurrentBackground(`${selectedPage}-desktop`);
    } else if (!isLargeScreen && isMediumScreen) {
      setCurrentBackground(`${selectedPage}-tablet`);
    } else {
      setCurrentBackground(`${selectedPage}-mobile`);
    }
  }, [isLargeScreen, isMediumScreen, selectedPage]);

  //Set page titles
  useEffect(() => {
    if (selectedPage === SelectedPage.Destination) {
      setPageTitle(pageTitles[0]);
    } else if (selectedPage === SelectedPage.Crew) {
      setPageTitle(pageTitles[1]);
    } else if (selectedPage === SelectedPage.Technology) {
      setPageTitle(pageTitles[2]);
    }
  }, [selectedPage]);

  return (
    <>
      <main
        className={`app min-h-[100vh] overflow-x-hidden bg-cover bg-dark-blue ${currentBackground}`}
      >
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {selectedPage !== SelectedPage.Home && (
          <PageTitle number={pageTitle.number} title={pageTitle.title} />
        )}

        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home setSelectedPage={setSelectedPage} />}
          ></Route>
          <Route
            path={`/${SelectedPage.Destination}`}
            element={<Destination data={data.destinations} />}
          ></Route>
          <Route
            path={`/${SelectedPage.Crew}`}
            element={<Crew data={data.crew} />}
          ></Route>
          <Route
            path={`/${SelectedPage.Technology}`}
            element={<TechnologyPage data={data.technology} />}
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
