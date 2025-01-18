import VehicleFilter from "./components/VehicleFilter";
import { poppins } from "./lib/fonts";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4">
      <h2 className={`${poppins.className} text-lg text-center`}>
        Search cars:
      </h2>
      <VehicleFilter />
    </main>
  );
}
