import { useParams } from "react-router-dom";
import { MultipleContainers } from "./Kanban/MultipleContainer";
import { Box } from "@chakra-ui/react";
import { localSelectedRepo } from "src/store/store";
import { useAtom } from "jotai";
import moment from "moment";

function TodoLocal() {
  const { id } = useParams();
  const [selectedRepo] = useAtom(localSelectedRepo);
  return (
    <Box>
      <MultipleContainers
        itemCount={2}
        hideAddColumn
        columns={0}
        items={{
          ["To Do"]: [
            JSON.stringify({
              label: "Material Config",
              desc: "Fixing main table and fixing bug create items Fixing main table and fixing bug create items Fixing main table and fixing bug create items cut here Fixing main table and fixing bug create items",
              createdAt: moment().format("DD MMM YYYY"),
              difficulty: "complex",
              emotion: "normal",
            }),
            JSON.stringify({
              label: "SUpplier Stock",
              desc: "Fixing main table and fixing bug create items",
              createdAt: moment().format("DD MMM YYYY"),
              difficulty: "medium",
              emotion: "normal",
            }),
            JSON.stringify({
              label: "SUpplier Stock",
              desc: "Fixing main table and fixing bug create items",
              createdAt: moment().format("DD MMM YYYY"),
              difficulty: "easy",
              emotion: "normal",
            }),
            JSON.stringify({
              label: "SUpplier Stock",
              desc: "Fixing main table and fixing bug create items",
              createdAt: moment().format("DD MMM YYYY"),
              difficulty: "much_easy",
              emotion: "normal",
            }),
          ],
        }}
        getItemStyles={() => ({
          backgroundColor: "#fff",
          borderLeftColor: selectedRepo.colorTheme.color,
          borderLeftWidth: "3px",
          borderLeftStyle: "solid",
        })}
        containerStyle={{ backgroundColor: "#f1f1f1" }}
        handle
        grapHandleColor={selectedRepo.colorTheme.bg}
      />
    </Box>
  );
}

export default TodoLocal;
