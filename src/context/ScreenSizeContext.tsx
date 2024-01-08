import { createContext, useContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { ScreenSize } from "../shared/types";

interface Props {
  children: React.ReactNode;
}

export const ScreenSizeContext = createContext<ScreenSize | undefined>(
  undefined
);

export const ScreenSizeWrapper = ({ children }: Props) => {
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");
  const isMediumScreen = useMediaQuery("(min-width: 770px");

  return (
    <ScreenSizeContext.Provider value={{ isLargeScreen, isMediumScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSizeContext = () => {
  const screenSize = useContext(ScreenSizeContext);

  if (!screenSize) {
    throw new Error(
      "useScreenSizeContext must be used inside the ScreenSizeWrapper"
    );
  }

  return screenSize;
};
