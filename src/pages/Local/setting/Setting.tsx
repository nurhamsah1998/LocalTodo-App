import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import { FORM_INPUT_CREATE_REPO_LOCAL } from "@/interface/index";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  useDisclosure,
  createStandaloneToast,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { useEncript } from "src/hooks/useEncript";
import { localSelectedRepo } from "src/store/store";

function Setting() {
  const { toast } = createStandaloneToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const nav: NavigateFunction = useNavigate();
  const [selectedRepo] = useAtom(localSelectedRepo);
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [repoName, setRepoName] = React.useState<string>("");
  const handleDelete = () => {
    const newRepo = data?.filter(
      (item: FORM_INPUT_CREATE_REPO_LOCAL) => item.id !== selectedRepo.id
    );
    setDataEncrypted(newRepo);
    nav("/local/repo");
    toast({
      title: "Success deleting repo",
      description: "repo has been deleting in your browser local storage",
      status: "success",
      isClosable: true,
    });
  };
  return (
    <Box>
      <ModalBase
        handleSubmit={handleDelete}
        size="3xl"
        disabledSubmit={selectedRepo.repo !== repoName}
        title="Delete Repo"
        isOpen={isOpen}
        onClose={onClose}
        labelSubmit="Delete"
        labelClose="Cancel"
        colorCloseScheme="primary.main"
        colorSubmitScheme="error.main"
      >
        <Typography>
          Are you sure you want to delete this repo? A repo that has been
          deleted cannot be restored again!
        </Typography>
        <Center>
          <Typography
            sx={{
              textAlign: "center",
              mt: 3,
              bg: "error.main",
              color: "#fff",
              width: "fit-content",
              px: 3,
              py: 1,
              borderRadius: styledPropTheme.borderRadius,
            }}
          >
            {selectedRepo.repo}
          </Typography>
        </Center>
        <Input
          onChange={(i) => setRepoName(i.target.value)}
          size="sm"
          sx={{
            my: 3,
            borderColor: "red.200",
            textAlign: "center",
            _placeholder: {
              textAlign: "center",
            },
            _focus: {
              borderColor: "red.500",
              outline: "none",
              transition: "0.3s",
            },
          }}
          placeholder="Type your repo name to delete it"
        />
      </ModalBase>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Typography>Delete This Repo</Typography>
          <Typography
            variantText="xs"
            sx={{ color: "gray.600", maxWidth: 350 }}
          >
            This repo will be deleted in your local browser storage and your
            data no longer can be restore!
          </Typography>
        </Box>
        <Button
          onClick={onOpen}
          colorScheme="error.main"
          variant="outline"
          size="sm"
        >
          Delete
        </Button>
      </Flex>
    </Box>
  );
}

export default Setting;
