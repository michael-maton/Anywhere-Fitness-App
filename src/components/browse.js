import React, { useEffect } from "react";
import Map from "./map/map.js";
import Class from "../components/CreateClass/Class";
import { fetchClasses } from "./../actions/index";
import { connect } from "react-redux";

function Browse({ fetchClasses, classes, error, isLoading }) {
  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="browser-container">
      <div className="filter-search-container">
        <div>dropdownFilter1</div>
        <div>dropdownFilter2</div>
        <div>dropdownFilter3</div>
        <div>dropdownFilter4</div>
        <div>dropdownFilter5</div>
      </div>
      <section className="results">
        <div className="results-container">
          <div className="results-card-container">
            <div className="card-container">
              {isLoading ? (
                <p>Loading Classes...</p>
              ) : (
                classes.map((c) => {
                  return <Class key={c.id} details={c} />;
                })
              )}
              {error ? <p>{error.message}</p> : null}
            </div>
          </div>
          <div className="maps-container" id="map">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchClasses })(Browse);
