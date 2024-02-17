/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { MultipleContainers } from "./Kanban/MultipleContainer";
import {
  Box,
  Button,
  Flex,
  createStandaloneToast,
  useMediaQuery,
} from "@chakra-ui/react";
import { localSelectedRepo, mutationLocalRepo } from "src/store/store";
import { useAtom } from "jotai";
import { useEncript } from "src/hooks/useEncript";
import MutationTodo from "./MutationTodo";
import { FORM_CREATE_NEW_TODO } from "@/interface/index";
import { useState } from "react";
import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import moment from "moment";
import { HEADER_HEIGHT } from "src/layout/drawerLocal/DrawerLocal";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { IoAddSharp } from "react-icons/io5";

function TodoLocal() {
  const { id } = useParams();
  const { toast } = createStandaloneToast();
  const [isLargerThan768Height] = useMediaQuery("(min-height: 768px)");
  const [isLargerThan768Width] = useMediaQuery("(min-width: 768px)");
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
        clone[index].updatedAt = moment(new Date()).toISOString();
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
          dataClone[index].updatedAt = moment(new Date()).toISOString();
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
        title: "Card Deleted",
        description: "the card has been deleted in your local storage",
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
        <Button
          display={["block", "block", "none"]}
          onClick={() =>
            setMutationLocalTodo({
              isOpenModal: true,
              mutation: "post",
              data: {},
              container: "",
            })
          }
          sx={{
            borderRadius: "100%",
            width: "70px",
            height: "70px",
            position: "fixed",
            bottom: 7,
            right: 7,
            p: 0,
            boxShadow: styledPropTheme.boxShadow,
            zIndex: 99,
            bg: selectedRepo.colorTheme.color,
          }}
        >
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoAddSharp size={40} />
          </Flex>
        </Button>
        <Flex
          display={["none", "none", "flex"]}
          sx={{
            justifyContent: "flex-end",
            width: "100%",
            position: "absolute",
            right: 2,
            top: `${HEADER_HEIGHT + 10}px`,
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
            sx={{
              bg: selectedRepo.colorTheme.color,
            }}
          >
            Create New Todo
          </Button>
        </Flex>

        <Box sx={{ mt: 10, pb: isLargerThan768Width ? 0 : 20 }}>
          <MultipleContainers
            // trashable
            scrollable
            headerContainerProps={{
              sx: {
                color: selectedRepo.colorTheme.color,
                bg: selectedRepo.colorTheme.bg,
              },
            }}
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
            containerStyle={{
              backgroundColor: "#f1f1f1",
              maxHeight: isLargerThan768Height ? "700px" : "450px",
            }}
            handle
            grapHandleColor={selectedRepo.colorTheme.bg}
          />
        </Box>
      </Box>
    </>
  );
}

export default TodoLocal;
