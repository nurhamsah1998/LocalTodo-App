/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import CardOptions from "@/components/CardOptions";
import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import { difficultyStatusKanban, priorityStatusKanban } from "@/const/index";
import {
  DIFFICULTY_STATUS_KANBAN,
  FORM_CREATE_NEW_TODO,
  MUTATION_LOCAL_REPO,
} from "@/interface/index";
import { v4 as uuidv4 } from "uuid";
import { Box, Input, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import { useEncript } from "src/hooks/useEncript";
import { localSelectedRepo } from "src/store/store";
import { useEffect } from "react";

function MutationNewTodo({
  onClose,
  isOpen,
  setListOfTodos,
  listOfTodos,
  setMutationLocalTodo,
  mutatioLocalTodo,
}: {
  onClose: () => void;
  setMutationLocalTodo: (...props: MUTATION_LOCAL_REPO[]) => void;
  setListOfTodos: (item: any) => void;
  isOpen: boolean;
  listOfTodos: any;
  mutatioLocalTodo: MUTATION_LOCAL_REPO;
}) {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FORM_CREATE_NEW_TODO>();
  const { difficulty, priority } = watch();
  const [selectedRepo, setSelectedRepo] = useAtom(localSelectedRepo);
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const onSubmit = (item: FORM_CREATE_NEW_TODO) => {
    const isMutationPost = mutatioLocalTodo.mutation === "post";
    const isMutationPatch = mutatioLocalTodo.mutation === "patch";
    const body = {
      ...item,
      createdAt: isMutationPost
        ? moment().format("DD MMM YYYY h:mm a")
        : item.createdAt,
      updatedAt: moment().format("DD MMM YYYY h:mm a"),
      card_id: isMutationPost ? uuidv4() : item.card_id,
    };
    let newValue: any = { ...listOfTodos };
    let cloneDataStorage = [...data];
    let cloneSelectedRepo = { ...selectedRepo };
    if (isMutationPost) {
      try {
        newValue["To Do"].push(JSON.stringify(body));
        for (let index = 0; index < cloneDataStorage.length; index++) {
          if (cloneDataStorage[index]?.id === selectedRepo.id) {
            cloneDataStorage[index].todo = newValue;
          }
        }

        setListOfTodos(newValue);
        onClose();
        setDataEncrypted(cloneDataStorage);
      } catch (error) {
        console.log(error);
      }
    }
    if (isMutationPatch) {
      try {
        let newUpdateValue = newValue[mutatioLocalTodo.container]?.map(
          (item: any) => JSON.parse(item)
        );
        newUpdateValue?.map((newItem: FORM_CREATE_NEW_TODO) => {
          if (newItem?.card_id === body?.card_id) {
            newItem.label = body.label;
            newItem.desc = body.desc;
            newItem.difficulty = body.difficulty;
            newItem.priority = body.priority;
          }
        });
        newValue[mutatioLocalTodo.container] = newUpdateValue?.map(
          (updateStringify: any) => JSON.stringify(updateStringify)
        );
        for (let index = 0; index < cloneDataStorage.length; index++) {
          if (cloneDataStorage[index]?.id === selectedRepo.id) {
            cloneDataStorage[index].todo = newValue;
          }
        }
        cloneSelectedRepo.todo = newValue;
        setListOfTodos(newValue);
        onClose();
        setSelectedRepo(cloneSelectedRepo);
        setDataEncrypted(cloneDataStorage);
      } catch (error) {
        console.log(error);
      }
    }
    reset({ label: "", desc: "", difficulty: "", priority: "" });
  };
  const handleCloseModal = () => {
    setMutationLocalTodo({
      isOpenModal: false,
      mutation: "",
      data: {},
      container: "",
    });
    clearErrors("label");
    reset({ label: "", desc: "", difficulty: "", priority: "" });
    onClose();
  };
  useEffect(() => {
    if (mutatioLocalTodo.mutation === "patch") {
      for (const key in mutatioLocalTodo.data) {
        setValue(key as keyof FORM_CREATE_NEW_TODO, mutatioLocalTodo.data[key]);
      }
    }
  }, [mutatioLocalTodo.mutation]);
  return (
    <>
      <ModalBase
        handleSubmit={handleSubmit(onSubmit)}
        size="3xl"
        title={
          mutatioLocalTodo.mutation === "post"
            ? "Create New Todo"
            : "Update Todo"
        }
        isOpen={isOpen}
        colorSubmitScheme={
          mutatioLocalTodo.mutation === "post" ? "primary.main" : "success.main"
        }
        onClose={handleCloseModal}
        labelSubmit={mutatioLocalTodo.mutation === "post" ? "Submit" : "Save"}
        labelClose="Cancel"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack align="stretch">
            <Box>
              <Typography variantText="sm">Name</Typography>
              <Controller
                defaultValue=""
                rules={{ required: "*Required" }}
                name="label"
                control={control}
                render={({ field }) => <Input autoFocus {...field} />}
              />
              {errors.label && <p>{errors.label.message}</p>}
            </Box>
            <Box>
              <Typography variantText="sm">Description (optional)</Typography>
              <Controller
                defaultValue=""
                name="desc"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              {errors.desc && <p>{errors.desc.message}</p>}
            </Box>
            <Box>
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Controller
                  name="difficulty"
                  control={control}
                  render={() => (
                    <CardOptions
                      options={difficultyStatusKanban}
                      keyEnableCheckbox="name"
                      label="Choose difficulty variant (optional)"
                      keyInitialValue={difficulty as keyof FORM_CREATE_NEW_TODO}
                      handleClickCardOption={(
                        item: DIFFICULTY_STATUS_KANBAN
                      ) => {
                        setValue("difficulty", item.name);
                      }}
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <Controller
                  name="priority"
                  control={control}
                  render={() => (
                    <CardOptions
                      options={priorityStatusKanban}
                      keyEnableCheckbox="name"
                      label="Choose priority variant (optional)"
                      keyInitialValue={priority as keyof FORM_CREATE_NEW_TODO}
                      handleClickCardOption={(item) => {
                        setValue("priority", item.name);
                      }}
                    />
                  )}
                />
              </Box>
            </Box>
          </VStack>
        </form>
      </ModalBase>
    </>
  );
}

export default MutationNewTodo;
