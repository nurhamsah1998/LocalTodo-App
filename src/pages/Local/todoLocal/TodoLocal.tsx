import React from "react";
import { useParams } from "react-router-dom";

function TodoLocal() {
  const { id } = useParams();
  return <div>TodoLocal LOCAL {id}</div>;
}

export default TodoLocal;
