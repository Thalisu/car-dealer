import { IResults } from "./types/VehicleData";
import VehicleFilter from "./components/VehicleFilter";
import { poppins } from "./lib/fonts";

export default async function Home() {
  try {
    const res = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    );
    const makes = await res.json().then((data): IResults[] => data.Results);

    return (
      <main className="w-full flex flex-col gap-4">
        <h2 className={`${poppins.className} text-lg text-center`}>
          Search cars:
        </h2>
        <VehicleFilter makes={makes} />
      </main>
    );
  } catch (error) {
    throw new Error("Failed to fetch makes" + error);
  }
}
