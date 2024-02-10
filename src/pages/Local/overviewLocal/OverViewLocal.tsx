import { useParams } from "react-router-dom";

function OverViewLocal() {
  const { id } = useParams();
  return <div>OverViewLocal LOCAL {id}</div>;
}

export default OverViewLocal;
