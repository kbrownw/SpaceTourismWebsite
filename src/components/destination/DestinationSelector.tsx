import { Destinations } from "../../shared/types";

type Props = {
  data: Destinations[];
  celestialBody: Destinations;
  setCelestialBody: (value: Destinations) => void;
};

const DestinationSelector = ({
  data,
  celestialBody,
  setCelestialBody,
}: Props) => {
  const selected: string = "text-white border-b-white";
  const unSelected: string = "text-light-violet";
  const selectionDefault: string =
    "text-[18px] py-3 border-transparent border-b-2 transition duration-500 hover:border-b-white/50 ";

  const selectors = Object.values(data).map((item) => {
    return (
      <button
        key={`${item.name}-selector`}
        onClick={() => {
          setCelestialBody(item);
        }}
      >
        <h5
          className={`${
            celestialBody.name === item.name ? selected : unSelected
          } ${selectionDefault}`}
        >
          {item.name.toUpperCase()}
        </h5>
      </button>
    );
  });

  return (
    <div className="flex mx-auto justify-between gap-7 my-5 md:gap-10 lg:justify-normal lg:mx-0">
      {selectors}
    </div>
  );
};

export default DestinationSelector;
