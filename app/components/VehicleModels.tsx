import { notFound } from "next/navigation";

interface IModels {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
export default async function VehicleModels({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) {
  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const models = await res.json().then((data): IModels[] => data.Results);
    return (
      <ul className="w-72 py-2 flex flex-col gap-2 bg-foreground rounded-lg text-background px-2">
        {models.map((model) => {
          return (
            <li
              key={model.Model_ID}
              className="flex justify-between items-center"
            >
              <p>{model.Model_Name}</p>
            </li>
          );
        })}
      </ul>
    );
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
