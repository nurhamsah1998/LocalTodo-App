/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import CardOptions from "@/components/CardOptions";
import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import { difficultyStatusKanban, priorityStatusKanban } from "@/const/index";
import {
  DIFFICULTY_STATUS_KANBAN,
  FORM_CREATE_NEW_TODO,
} from "@/interface/index";
import { Box, Input, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import { useEncript } from "src/hooks/useEncript";
import { localSelectedRepo } from "src/store/store";

function CreateNewTodo({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FORM_CREATE_NEW_TODO>({
    defaultValues: {
      emotion: "",
      createdAt: moment().format("DD MMM YYYY"),
      difficulty: "",
      priority: "",
    },
  });
  const { difficulty, priority } = watch();
  const [selectedRepo] = useAtom(localSelectedRepo);
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const onSubmit = (item: FORM_CREATE_NEW_TODO) => {
    try {
      const newValue: any = { ...selectedRepo.todo };
      newValue["To Do"].push(JSON.stringify(item));
      let clone = [...data];
      for (let index = 0; index < clone.length; index++) {
        if (clone[index]?.id === selectedRepo.id) {
          clone[index].todo = newValue;
        }
      }
      setDataEncrypted(clone);
      onClose();
      reset({ difficulty: "", desc: "", label: "", priority: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseModal = () => {
    clearErrors("label");
    onClose();
  };
  return (
    <>
      <ModalBase
        handleSubmit={handleSubmit(onSubmit)}
        size="3xl"
        title="Create New Todo"
        isOpen={isOpen}
        onClose={handleCloseModal}
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
                  mt: 2,
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

export default CreateNewTodo;
