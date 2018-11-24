import React from "react";
import "./Loader.css";
import { connect } from "react-redux";
const Loader = props => {
  const loader = props.isLoading ? (
    <div className="loader">Loading...</div>
  ) : null;
  return loader;
};
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};
export default connect(mapStateToProps)(Loader);
