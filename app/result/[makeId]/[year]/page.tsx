import { IResults } from "@/app/@types/VehicleData";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import VehicleModels from "@/app/components/VehicleModels";
import { poppins } from "@/app/lib/fonts";
import { currentYears } from "@/app/lib/utils";
import { Suspense } from "react";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    );
    const makes = await res.json().then((data): IResults[] => data.Results);
    const params = makes.flatMap((make) =>
      currentYears.map((year) => ({
        makeId: make.MakeId.toString(),
        year: year.toString(),
      }))
    );
    return params;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Cars({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) {
  const { makeId, year } = await params;

  return (
    <main className="w-full flex flex-col gap-4 items-center">
      <h2 className={`${poppins.className} text-lg`}>Found Models</h2>
      <Suspense fallback={<LoadingSpinner />}>
        <VehicleModels makeId={makeId} year={year} />
      </Suspense>
    </main>
  );
}
