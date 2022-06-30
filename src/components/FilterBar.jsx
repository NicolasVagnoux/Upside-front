/* eslint-disable react/prop-types */
import React from "react";

const FilterBar = ({ containsWord, handleContainsWord }) => {
  const companies = [
    "Carrefour",
    "Orange",
    "Pellenc",
    "Ariane group",
    "Saft",
    "Hololens",
    "Wild Code Scool",
    "SNCF",
    "EDF",
    "Quality Assurances",
    "Saft",
    "Verkor",
  ];

  return (
    <div className="fixed z-10 flex justify-around w-full ml-20 bg-white h-14 drop-shadow font-title">
      {/* Search bar */}
      <div className="flex items-center rounded ">
        <input
          type="text"
          placeholder=" Search a project"
          className="w-56 align-middle rounded bg-slate-200"
          value={containsWord}
          onChange={(e) => handleContainsWord(e)}
        />
      </div>
      {/* Filter bar */}
      <div className="flex items-center justify-around gap-5">
        {/* Sort by */}
        <div className="flex items-center justify-center bg-white border-2 rounded h-7">
          <p className="px-3 text-slate-400"> Sort by </p>
          <select
            type="text"
            placeholder="Select"
            className="text-center rounded"
          >
            <option value="">anything</option>
            <option value="daysleft">days left</option>
            <option value="progression">progression</option>
          </select>
        </div>
        {/* Filter by company */}
        <div className="flex items-center justify-center bg-white border-2 rounded h-7">
          <p className="px-3 text-slate-400"> Filter by </p>
          <select placeholder="Select" className="text-center rounded w-28">
            <option value="">anything</option>
            {companies &&
              companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
