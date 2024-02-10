import { useParams } from "react-router-dom";

function Task() {
  const params = useParams();
  console.log(params.id);
  return <div>Task = {params.id}</div>;
}

export default Task;
