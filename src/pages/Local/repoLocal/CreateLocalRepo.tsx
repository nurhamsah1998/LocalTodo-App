/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import React from "react";
import { ModalBase } from "@/components/ModalBase";
import { useForm, Controller } from "react-hook-form";
import { Typography } from "@/components/Typography";
import {
  Box,
  Checkbox,
  HStack,
  Input,
  createStandaloneToast,
} from "@chakra-ui/react";
import { cardColor } from "@/const/cardColor";
import { FORM_INPUT_CREATE_REPO_LOCAL } from "@/interface/index";
import moment from "moment";

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
  const id = Math.random() * 12;
  const { repo: repoName, colorTheme } = watch();
  const { toast } = createStandaloneToast();
  const onSubmit = () => {
    let initialDataStorage = [
      {
        id: `${repoName}_${id}`,
        repo: repoName,
        colorTheme: {
          bg: colorTheme?.bg || "#fff",
          color: colorTheme?.color || "gray.700",
          label: colorTheme?.label || "Default",
        },
        createdAt: moment(new Date()).toISOString(),
        updatedAt: moment(new Date()).toISOString(),
        todo: [],
      },
    ];
    if (!repoList) {
      setDataEncrypted(initialDataStorage);
      setRepo(initialDataStorage);
    } else {
      let clone = [...repoList];
      clone.push({
        repo: repoName,
        todo: [],
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
      title: "Success create repo",
      description: "your repo will be save in your local storage",
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
            <Typography variantText="sm">Choose color theme</Typography>
            <Controller
              name="colorTheme"
              control={control}
              render={() => (
                <HStack mt={1}>
                  {cardColor.map((item, index) => (
                    <Box
                      onClick={() => setValue("colorTheme", item)}
                      role="button"
                      key={index}
                      sx={{
                        bg: item.bg,
                        color: item.color,
                        width: "100%",
                        padding: "12px",
                        pb: 0,
                        textAlign: "right",
                      }}
                    >
                      <Typography textAlign="center">{item.label}</Typography>
                      <Checkbox isChecked={colorTheme?.label === item.label} />
                    </Box>
                  ))}
                </HStack>
              )}
            />
          </Box>
        </form>
      </ModalBase>
    </>
  );
}

export default CreateLocalRepo;
