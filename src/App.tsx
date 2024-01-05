import { useContext, useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import { ScreenSizeContext } from "./context/ScreenSizeContext";
import { ScreenSize } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const { isLargeScreen, isMediumScreen } =
    useContext<ScreenSize>(ScreenSizeContext);
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
      <main className={`app bg-cover ${currentBackground}`}>
        <h1>Hello World</h1>
      </main>
    </>
  );
}

export default App;
