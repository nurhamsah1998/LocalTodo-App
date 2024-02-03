import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import { Box, Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";

function Setting() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleDelete = () => {
    console.log("asd");
  };
  return (
    <Box>
      <ModalBase
        handleSubmit={handleDelete}
        size="3xl"
        disabledSubmit
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
        <Input
          size="sm"
          sx={{
            my: 3,
            borderColor: "red.200",
            textAlign: "center",
            _placeholder: {
              textAlign: "center",
              color: "red.300",
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
          <Typography variantText="xs" sx={{ color: "gray.600", mt: -1 }}>
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
