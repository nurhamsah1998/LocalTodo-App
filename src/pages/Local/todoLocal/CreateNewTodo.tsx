import { ModalBase } from "@/components/ModalBase";
import { FORM_CREATE_NEW_TODO } from "@/interface/index";
import { Box, Input, Select, VStack, chakra } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

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
  } = useForm<FORM_CREATE_NEW_TODO>();
  const onSubmit = () => {
    console.log("hai");
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
              <Controller
                defaultValue=""
                rules={{ required: "*Required" }}
                name="label"
                control={control}
                render={({ field }) => (
                  <Input autoFocus placeholder="todo name" {...field} />
                )}
              />
              {errors.label && <p>{errors.label.message}</p>}
            </Box>
            <Box>
              <Controller
                defaultValue=""
                name="desc"
                control={control}
                render={({ field }) => (
                  <Input
                    autoFocus
                    placeholder="description (optional)"
                    {...field}
                  />
                )}
              />
              {errors.desc && <p>{errors.desc.message}</p>}
            </Box>
            <Box>
              <Select placeholder="Select option">
                <chakra.option value="option1">Option 1</chakra.option>
              </Select>
            </Box>
          </VStack>
        </form>
      </ModalBase>
    </>
  );
}

export default CreateNewTodo;
