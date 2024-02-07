import { useParams } from "react-router-dom";
import { MultipleContainers } from "./Kanban/MultipleContainer";
import { Box } from "@chakra-ui/react";
import { localSelectedRepo } from "src/store/store";
import { useAtom } from "jotai";

function TodoLocal() {
  const { id } = useParams();
  const [selectedRepo] = useAtom(localSelectedRepo);
  return (
    <Box>
      <MultipleContainers
        itemCount={2}
        columns={0}
        items={{
          N: ["Nurhamsah", "asd"],
          M: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
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
