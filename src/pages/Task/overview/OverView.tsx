import React from "react";
import { useParams } from "react-router-dom";

function OverView() {
  const params = useParams();
  console.log(params.id);
  return <div> OverView = {params.id}</div>;
}

export default OverView;
