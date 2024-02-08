/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { MultipleContainers } from "./Kanban/MultipleContainer";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { localSelectedRepo } from "src/store/store";
import { useAtom } from "jotai";
import { useEncript } from "src/hooks/useEncript";
import CreateNewTodo from "./CreateNewTodo";

function TodoLocal() {
  const { id } = useParams();
  const [selectedRepo] = useAtom(localSelectedRepo);
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleAfterMoveCard = (item: any) => {
    let clone = [...data];
    for (let index = 0; index < clone.length; index++) {
      if (clone[index]?.id === id) {
        clone[index].todo = item;
      }
    }
    setDataEncrypted(clone);
  };
  return (
    <>
      <CreateNewTodo isOpen={isOpen} onClose={onClose} />
      <Box>
        <Flex
          sx={{
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button onClick={onOpen}>Create New Todo</Button>
        </Flex>
        <Box sx={{ mt: 10 }}>
          <MultipleContainers
            itemCount={2}
            hideAddColumn
            items={selectedRepo.todo}
            afterMoveCard={handleAfterMoveCard}
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
      </Box>
    </>
  );
}

export default TodoLocal;
