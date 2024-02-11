/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { MultipleContainers } from "./Kanban/MultipleContainer";
import { Box, Button, Flex, createStandaloneToast } from "@chakra-ui/react";
import { localSelectedRepo, mutationLocalRepo } from "src/store/store";
import { useAtom } from "jotai";
import { useEncript } from "src/hooks/useEncript";
import MutationTodo from "./MutationTodo";
import { FORM_CREATE_NEW_TODO } from "@/interface/index";
import { useState } from "react";
import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";

function TodoLocal() {
  const { id } = useParams();
  const { toast } = createStandaloneToast();
  const [selectedRepo, setSelectedRepo] = useAtom(localSelectedRepo);
  const [listOfTodos, setListOfTodos] = useState<any>(selectedRepo.todo);
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [mutatioLocalTodo, setMutationLocalTodo] = useAtom(mutationLocalRepo);
  const handleAfterMoveCard = (item: any) => {
    let clone = [...data];
    let cloneSelectedRepo = { ...selectedRepo };
    for (let index = 0; index < clone.length; index++) {
      if (clone[index]?.id === id) {
        clone[index].todo = item;
      }
    }
    setListOfTodos(item);
    cloneSelectedRepo.todo = item;
    setSelectedRepo(cloneSelectedRepo);
    setDataEncrypted(clone);
  };
  const handleSubmitDelete = () => {
    try {
      const { data: item, container } = mutatioLocalTodo;
      const selectedItem: FORM_CREATE_NEW_TODO = { ...item };
      let dataClone: any[] = [...data];
      let cloneSelectedRepo: any = { ...selectedRepo };
      const selectedRepo_Y: any = [...listOfTodos?.[container]];
      const newArray = selectedRepo_Y
        ?.map((parseItem: any) => JSON.parse(parseItem))
        ?.filter(
          (newCard: FORM_CREATE_NEW_TODO) =>
            newCard.card_id !== selectedItem.card_id
        )
        ?.map((stringItem: any) => JSON.stringify(stringItem));
      for (let index = 0; index < dataClone.length; index++) {
        if (dataClone[index].id === selectedRepo.id) {
          dataClone[index].todo[container] = newArray;
        }
      }
      setListOfTodos((prev: any) => {
        let clone = { ...prev };
        clone[container] = newArray;
        return clone;
      });
      setMutationLocalTodo({
        isOpenModal: false,
        mutation: "",
        data: {},
        container: "",
      });
      toast({
        title: "Kanban deleted",
        description: "successfully deleted kanban on your local storage",
        status: "success",
        isClosable: true,
      });
      setDataEncrypted(dataClone);
      cloneSelectedRepo.todo[container] = newArray;
      setSelectedRepo(cloneSelectedRepo);
    } catch (error) {
      toast({
        title: "Something Wrong",
        description: "cannot delete",
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <MutationTodo
        mutatioLocalTodo={mutatioLocalTodo}
        setMutationLocalTodo={setMutationLocalTodo}
        setListOfTodos={setListOfTodos}
        isOpen={mutatioLocalTodo.isOpenModal}
        onClose={() =>
          setMutationLocalTodo({
            isOpenModal: false,
            mutation: "",
            data: {},
            container: "",
          })
        }
        listOfTodos={listOfTodos}
      />
      <ModalBase
        title="Delete card"
        labelSubmit="Delete"
        labelClose="Cancel"
        colorCloseScheme="primary.main"
        colorSubmitScheme="error.main"
        handleSubmit={handleSubmitDelete}
        onClose={() =>
          setMutationLocalTodo({
            isOpenModal: false,
            mutation: "",
            data: {},
            container: "",
          })
        }
        isOpen={mutatioLocalTodo.mutation === "delete"}
      >
        <Typography>Are you sure wanna delete this card ?</Typography>
      </ModalBase>
      <Box>
        <Flex
          sx={{
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button
            onClick={() =>
              setMutationLocalTodo({
                isOpenModal: true,
                mutation: "post",
                data: {},
                container: "",
              })
            }
          >
            Create New Todo
          </Button>
        </Flex>
        <Box sx={{ mt: 10 }}>
          <MultipleContainers
            // trashable
            scrollable
            itemCount={3}
            hideAddColumn
            items={listOfTodos}
            afterMoveCard={handleAfterMoveCard}
            getItemStyles={() => ({
              backgroundColor: "#fff",
              borderLeftColor: selectedRepo.colorTheme.color,
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
            })}
            containerStyle={{ backgroundColor: "#f1f1f1", maxHeight: "700px" }}
            handle
            grapHandleColor={selectedRepo.colorTheme.bg}
          />
        </Box>
      </Box>
    </>
  );
}

export default TodoLocal;
