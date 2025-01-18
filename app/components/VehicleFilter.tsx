"use client";

import { useState } from "react";
import DDLvehicleMakes from "./DDLvehicleMakes";
import DDLvehicleModel from "./DDLvehicleModel";
import Link from "next/link";

export default function VehicleFilter() {
  const [filter, setFilter] = useState({ makeId: "", year: "" });
  const handleMakeChange = (value: string) => {
    setFilter((prev) => ({ ...prev, makeId: value }));
  };
  const handleYearChange = (value: string) => {
    setFilter((prev) => ({ ...prev, year: value }));
  };
  const isDisabled = !filter.makeId || !filter.year;

  return (
    <div className="bg-foreground w-full h-80 rounded-lg flex flex-col gap-4 py-4 px-2 items-center">
      <div className="w-full flex gap-2 flex-wrap justify-center mb-auto">
        <DDLvehicleMakes
          make={filter.makeId}
          handleMakeChange={handleMakeChange}
        />
        <DDLvehicleModel
          year={filter.year}
          handleYearChange={handleYearChange}
        />
      </div>
      <Link
        href={`/result/${filter.makeId}/${filter.year}`}
        className={`px-16 py-2  w-fit bg-background rounded-md ${
          isDisabled ? "pointer-events-none" : ""
        } `}
        aria-disabled={isDisabled}
      >
        Next
      </Link>
    </div>
  );
}
