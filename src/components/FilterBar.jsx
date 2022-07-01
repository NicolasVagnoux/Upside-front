/* eslint-disable react/prop-types */
import React from "react";

const FilterBar = ({
  containsWord,
  handleContainsWord,
  handleSetCompany,
  handleSetSorted,
}) => {
  const companies = [
    "Carrefour",
    "Orange",
    "Pellenc",
    "Ariane group",
    "Hololens",
    "Wild Code Scool",
    "SNCF",
    "EDF",
    "Quality Assurances",
    "Verkor",
  ];

  return (
    <div className="fixed z-10 flex justify-around w-full ml-20 bg-white h-14 drop-shadow font-title">
      {/* Search bar */}
      <div className="flex items-center rounded ">
        <input
          type="text"
          placeholder=" 🔍  Search a project"
          className="w-56 align-middle rounded bg-slate-200 h-8"
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
            onChange={(e) => handleSetSorted(e)}
          >
            <option value="">anything</option>
            <option value="daysleftup">⬆️ days left </option>
            <option value="daysleftdown"> ⬇️ days left</option>
            <option value="progressionup"> ⬆️ progression </option>
            <option value="progressiondown">⬇️ progression </option>
          </select>
        </div>
        {/* Filter by company */}
        <div className="flex items-center justify-center bg-white border-2 rounded h-7">
          <p className="px-3 text-slate-400"> Filter by </p>
          <select
            placeholder="Select"
            className="text-center rounded w-28"
            onChange={(e) => handleSetCompany(e)}
          >
            <option value="">anything</option>
            {companies &&
              companies.sort().map((company, index) => (
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
