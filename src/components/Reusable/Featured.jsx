import React from "react";
import { Link } from "react-router-dom";
import NewApi from "../../Api";
import Trending from "../Trending";

export default function Featured() {
  return (
    <div className="featured">
      <Trending title="Latest" />
    </div>
  );
}
