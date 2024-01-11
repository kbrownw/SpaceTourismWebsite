export enum SelectedPage {
  Home = "home",
  Destination = "destination",
  Crew = "crew",
  Technology = "technology",
}

export interface ScreenSize {
  isLargeScreen: boolean;
  isMediumScreen: boolean;
}

export interface Destinations {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
    alt?: string;
  };
  role: string;
  bio: string;
}
