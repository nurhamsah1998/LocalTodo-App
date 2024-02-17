/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import React from "react";
import { ModalBase } from "@/components/ModalBase";
import { useForm, Controller } from "react-hook-form";
import { Typography } from "@/components/Typography";
import { Box, Input, createStandaloneToast } from "@chakra-ui/react";
import { cardColor } from "@/const/cardColor";
import {
  FORM_INPUT_CREATE_REPO_LOCAL,
  LIST_CARD_COLOR,
} from "@/interface/index";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { initialValueLocalTodo } from "@/const/index";
import CardOptions from "@/components/CardOptions";

function CreateLocalRepo({
  isOpen,
  setDataEncrypted,
  setRepo,
  repoList,
  onClose,
}: {
  onClose: () => void;
  setRepo: React.Dispatch<any>;
  repoList: any;
  isOpen: boolean;
  setDataEncrypted: (newItem: any) => void;
}) {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FORM_INPUT_CREATE_REPO_LOCAL>();
  const id = uuidv4();
  const { repo: repoName, colorTheme } = watch();
  const { toast } = createStandaloneToast();
  const onSubmit = () => {
    let initialDataStorage = [
      {
        id: `${repoName?.toString()}_${id.toUpperCase()}`,
        repo: repoName,
        colorTheme: {
          bg: colorTheme?.bg || "#fff",
          color: colorTheme?.color || "gray.700",
          label: colorTheme?.label || "Default",
        },
        createdAt: moment(new Date()).toISOString(),
        updatedAt: moment(new Date()).toISOString(),
        todo: initialValueLocalTodo,
      },
    ];
    if (!repoList) {
      setDataEncrypted(initialDataStorage);
      setRepo(initialDataStorage);
    } else {
      let clone = [...repoList];
      clone.push({
        repo: repoName,
        todo: initialValueLocalTodo,
        colorTheme: {
          bg: colorTheme?.bg || "#fff",
          color: colorTheme?.color || "gray.700",
          label: colorTheme?.label || "Default",
        },
        createdAt: moment(new Date()).toISOString(),
        updatedAt: moment(new Date()).toISOString(),
        id: `${repoName}_${id}`,
      });
      setDataEncrypted(clone);
      setRepo(clone);
    }
    toast({
      title: "Repo Created",
      description: "successfully created repo",
      status: "success",
      isClosable: true,
    });
    onClose();
    reset({ repo: "", colorTheme: {} });
  };
  const handleCloseModal = () => {
    clearErrors("repo");
    onClose();
  };
  return (
    <>
      <ModalBase
        handleSubmit={handleSubmit(onSubmit)}
        size="3xl"
        title="Create New Repo"
        isOpen={isOpen}
        onClose={handleCloseModal}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            defaultValue=""
            rules={{ required: "*Required" }}
            name="repo"
            control={control}
            render={({ field }) => (
              <Input autoFocus placeholder="Repo Name" {...field} />
            )}
          />
          {errors.repo && <p>{errors.repo.message}</p>}
          <Typography variantText="xs" color="gray.500">
            this repo will be created and stored in your local storage, so take
            care of it carefully.
          </Typography>
          <Box
            sx={{
              mt: 2,
            }}
          >
            <Controller
              name="colorTheme"
              control={control}
              render={() => (
                <CardOptions
                  options={cardColor}
                  label="Choose difficulty variant (optional)"
                  handleClickCardOption={(item) => setValue("colorTheme", item)}
                  keyEnableCheckbox="label"
                  keyInitialValue={colorTheme?.label as keyof LIST_CARD_COLOR}
                />
              )}
            />
          </Box>
        </form>
      </ModalBase>
    </>
  );
}

export default CreateLocalRepo;
