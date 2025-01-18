import { currentYears } from "../lib/utils";

interface IProps {
  year: string;
  handleYearChange: (value: string) => void;
}

export default function DDLvehicleModel({ year, handleYearChange }: IProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap bg-background rounded-md overflow-clip">
      <label htmlFor="ddlModel" className="pl-2">
        Models:{" "}
      </label>
      <select
        className="py-2 px-4 bg-background"
        id="ddlModel"
        value={year}
        onChange={({ target }) => handleYearChange(target.value)}
      >
        <option value="" defaultChecked>
          Choose a model
        </option>
        {currentYears.map((year) => {
          return (
            <option value={year} key={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
}
