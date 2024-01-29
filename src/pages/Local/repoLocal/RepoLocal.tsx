import { ModalBase } from "@/components/ModalBase";
import { Box, Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";

function RepoLocal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <ModalBase
        size="3xl"
        title="Create New Repo"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Input placeholder="Repo Name" />
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
