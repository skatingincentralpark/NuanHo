import React, { useState, useEffect } from "react";

import * as classes from "./yearNavigation.module.css";

const YearNavigation = (props) => {
  const [years, setYears] = useState({});
  const [showYears, setShowYears] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");

  // years array
  useEffect(() => {
    const yearsArrShown = [];
    const yearsArrHidden = [];
    const currYear = new Date().getFullYear();
    const startYearShown = currYear - 3;
    const startYearHidden = 2016;

    for (let i = startYearShown; i < currYear; i++) {
      yearsArrShown.push(i);
    }

    for (let i = startYearHidden; i < startYearShown; i++) {
      yearsArrHidden.push(i);
    }

    yearsArrShown.push(currYear);

    const sortedArrShown = yearsArrShown.sort((a, b) => {
      return b - a;
    });

    const sortedArrHidden = yearsArrHidden.sort((a, b) => {
      return b - a;
    });

    setYears({ sortedArrShown, sortedArrHidden });
  }, []);

  // show more years handler
  const showMoreYearsHandler = (e) => {
    e.preventDefault();
    setShowYears((prev) => !prev);
  };

  // click handler for filter
  const filterClickHandler = (e) => {
    const value = e.target.value;
    props.handleClick(value);
    setSelectedYear(value);
  };

  // const activeYearClass = selectedYear === this.value && "btn";

  return (
    <>
      <div className={classes.archiveBtns}>
        {!years.sortedArrHidden && "[Loading...]"}

        {years.sortedArrHidden && (
          <>
            <button
              className={`btn ${selectedYear === "" && classes.btnActive}`}
              onClick={filterClickHandler}
              value=""
            >
              [All]
            </button>
            {years.sortedArrShown.map((year) => (
              <button
                className={`btn ${
                  parseInt(selectedYear) === year && classes.btnActive
                }`}
                onClick={filterClickHandler}
                value={year}
                key={year}
              >
                [{year}]
              </button>
            ))}
            <div className={classes.archiveBtnsMore}>
              {showYears && (
                <div className={classes.archiveBtnsMoreDropdown}>
                  {years.sortedArrHidden.map((year) => (
                    <button
                      className={`btn ${
                        parseInt(selectedYear) === year && classes.btnActive
                      }`}
                      onClick={filterClickHandler}
                      value={year}
                      key={year}
                    >
                      [{year}]
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={showMoreYearsHandler} className="btn">
              [{showYears ? "-" : "..."}]
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default YearNavigation;
