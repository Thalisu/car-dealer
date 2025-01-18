import { IResults } from "../@types/VehicleData";
interface IProps {
  make: string;
  makes: IResults[];
  handleMakeChange: (value: string) => void;
}
export default function DDLvehicleMakes({
  make,
  handleMakeChange,
  makes,
}: IProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap bg-background rounded-md overflow-clip">
      <label htmlFor="ddlMakes" className="pl-2">
        Makes:{" "}
      </label>
      <select
        className="py-2 px-4 bg-background"
        id="ddlMakes"
        value={make}
        onChange={({ target }) => handleMakeChange(target.value)}
      >
        <option value="" defaultChecked>
          Choose a make
        </option>
        {makes.map((result) => {
          return (
            <option value={result.MakeId} key={result.MakeId}>
              {result.MakeName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
