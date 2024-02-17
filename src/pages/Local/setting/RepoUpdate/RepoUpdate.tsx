/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import {
  FORM_INPUT_CREATE_REPO_LOCAL,
  LIST_CARD_COLOR,
} from "@/interface/index";
import {
  Box,
  Button,
  Flex,
  Input,
  useDisclosure,
  chakra,
  createStandaloneToast,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { RepoCard } from "../../repoLocal/RepoLocalItem";
import CardOptions from "@/components/CardOptions";
import { cardColor } from "@/const/cardColor";
import moment from "moment";

function RepoUpdate({
  selectedRepo,
  setSelectedRepo,
  setDataEncrypted,
  dataEncript,
}: {
  dataEncript: any;
  setDataEncrypted: (newItem: any) => Promise<void>;
  selectedRepo: FORM_INPUT_CREATE_REPO_LOCAL;
  setSelectedRepo: any;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    control,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FORM_INPUT_CREATE_REPO_LOCAL>({
    defaultValues: {
      repo: selectedRepo?.repo,
      colorTheme: selectedRepo?.colorTheme,
    },
  });
  const { repo: repoName, colorTheme } = watch();
  const { toast } = createStandaloneToast();
  const onSubmit = () => {
    let cloneDataEncript = [...dataEncript];
    for (let index = 0; index < cloneDataEncript.length; index++) {
      if (cloneDataEncript[index]?.id === selectedRepo?.id) {
        cloneDataEncript[index].updatedAt = moment(new Date()).toISOString();
        cloneDataEncript[index].repo = repoName;
        cloneDataEncript[index].colorTheme = colorTheme;
      }
    }
    setSelectedRepo({
      ...selectedRepo,
      repo: repoName as string,
      colorTheme: colorTheme as LIST_CARD_COLOR,
    });
    setDataEncrypted(cloneDataEncript);
    clearErrors("repo");
    reset({ repo: repoName, colorTheme });
    onClose();
    toast({
      title: "Repo Updated",
      description: "successfully updated repo",
      status: "success",
      isClosable: true,
    });
  };
  const handleCloseModal = () => {
    reset({ repo: selectedRepo?.repo, colorTheme: selectedRepo?.colorTheme });
    onClose();
  };
  return (
    <>
      <ModalBase
        handleSubmit={handleSubmit(onSubmit)}
        size="3xl"
        title="Update Repo"
        isOpen={isOpen}
        onClose={handleCloseModal}
        labelSubmit="Update"
        labelClose="Cancel"
        colorCloseScheme="error.main"
        colorSubmitScheme="success.main"
      >
        <Box>
          <RepoCard
            item={{
              ...selectedRepo,
              repo: repoName as string,
              colorTheme: colorTheme as LIST_CARD_COLOR,
            }}
          />
        </Box>
        <chakra.form sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            defaultValue=""
            rules={{ required: "*Required" }}
            name="repo"
            control={control}
            render={({ field }) => (
              <Input
                variant={errors.repo && "error"}
                autoFocus
                placeholder="Repo Name"
                {...field}
              />
            )}
          />
          {errors.repo && (
            <Typography variantText="xs" sx={{ color: "error.main" }}>
              {errors.repo.message}
            </Typography>
          )}
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
        </chakra.form>
      </ModalBase>
      <Flex
        sx={{ alignItems: "center", justifyContent: "space-between", mt: 5 }}
      >
        <Box>
          <Typography>Update Repo</Typography>
          <Typography
            variantText="xs"
            sx={{ color: "gray.600", maxWidth: 350 }}
          >
            Changed the repo name and theme
          </Typography>
        </Box>
        <Button
          onClick={onOpen}
          sx={{ bg: selectedRepo.colorTheme.color }}
          size="sm"
        >
          Update
        </Button>
      </Flex>
    </>
  );
}

export default RepoUpdate;
