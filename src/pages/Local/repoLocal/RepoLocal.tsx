import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import { Box, Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useEncript } from "src/hooks/useEncript";
import CryptoJS from "crypto-js";

function RepoLocal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [repo, setRepo] = React.useState(window.localStorage.getItem("") || []);
  const { data, setDataEncrypted } = useEncript("repo");
  console.log(data);
  const handleSubmit = () => {
    setDataEncrypted("d");
  };
  return (
    <Box>
      <ModalBase
        handleSubmit={handleSubmit}
        size="3xl"
        title="Create New Repo"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Input autoFocus placeholder="Repo Name" />
        <Box>
          <Typography variantText="xs" color="gray.500">
            this repo will be created and stored in your local storage, so take
            care of it carefully.
          </Typography>
        </Box>
      </ModalBase>
      <Flex justifyContent="flex-end">
        <Button onClick={onOpen} size="sm">
          Create new Repo
        </Button>
      </Flex>
    </Box>
  );
}

export default RepoLocal;
