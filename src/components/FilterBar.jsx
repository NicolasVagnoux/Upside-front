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
    <div className="fixed w-full z-10 h-14 bg-white drop-shadow ml-20 flex justify-around font-title">
      {/* Search bar */}
      <div className="items-center rounded flex ">
        <input
          type="text"
          placeholder=" Search a project"
          className="rounded align-middle w-56 bg-slate-200"
          value={containsWord}
          onChange={(e) => handleContainsWord(e)}
        />
      </div>
      {/* Filter bar */}
      <div className="flex justify-around gap-5 items-center">
        {/* Sort by */}
        <div className="flex justify-center bg-white rounded items-center h-7 border-2">
          <p className="text-slate-400 px-3"> Sort by </p>
          <select
            type="text"
            placeholder="Select"
            className="rounded text-center"
          >
            <option value="">anything</option>
            <option value="daysleft">days left</option>
            <option value="progression">progression</option>
          </select>
        </div>
        {/* Filter by company */}
        <div className="flex justify-center bg-white rounded items-center h-7 border-2">
          <p className="text-slate-400 px-3"> Filter by </p>
          <select placeholder="Select" className="rounded w-28 text-center">
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
