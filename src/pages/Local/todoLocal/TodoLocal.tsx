/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { MultipleContainers } from "./Kanban/MultipleContainer";
import { Box, Button, Flex } from "@chakra-ui/react";
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
  const [selectedRepo] = useAtom(localSelectedRepo);
  const [listOfTodos, setListOfTodos] = useState<any>(selectedRepo.todo);
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [mutatioLocalTodo, setMutationLocalTodo] = useAtom(mutationLocalRepo);
  const [modalDelete, setModalDelete] = useState<{
    isOpen: boolean;
    data: { item: any; container: string };
  }>({ isOpen: false, data: { item: {}, container: "" } });
  const handleAfterMoveCard = (item: any) => {
    let clone = [...data];
    for (let index = 0; index < clone.length; index++) {
      if (clone[index]?.id === id) {
        clone[index].todo = item;
      }
    }
    setListOfTodos(item);
    setDataEncrypted(clone);
  };
  const handleSubmitDelete = () => {
    const { item, container } = modalDelete.data;
    const selectedItem: FORM_CREATE_NEW_TODO = JSON.parse(item);
    let dataClone: any[] = [...data];
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
    setDataEncrypted(dataClone);
    setModalDelete({ isOpen: false, data: { item: {}, container: "" } });
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
          setModalDelete({ isOpen: false, data: { item: {}, container: "" } })
        }
        isOpen={modalDelete.isOpen}
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
            trashable
            scrollable
            onDropItemTrash={(item, container) =>
              setModalDelete({ isOpen: true, data: { item, container } })
            }
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
