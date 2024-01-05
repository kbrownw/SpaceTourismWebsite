import { createContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { ScreenSize } from "../shared/types";

interface Props {
  children: React.ReactNode;
}

export const ScreenSizeContext = createContext<ScreenSize | null>(null);

export const ScreenSizeWrapper = ({ children }: Props) => {
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");
  const isMediumScreen = useMediaQuery("(min-width: 770px");

  return (
    <ScreenSizeContext.Provider value={{ isLargeScreen, isMediumScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
