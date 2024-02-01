/* eslint-disable prefer-const */
import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEncript } from "src/hooks/useEncript";

function RepoLocal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const inputRef = React.useRef({ name: "" });
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [repo, setRepo] = React.useState(data);

  const handleSubmit = () => {
    let initialDataStorage = [
      {
        container_repo: inputRef.current.name,
        todo: [],
      },
    ];
    if (!repo) {
      setDataEncrypted(initialDataStorage);
      setRepo(initialDataStorage);
    } else {
      let clone = [...repo];
      clone.push({ name: inputRef.current.name, todo: [] });
      setDataEncrypted(clone);
      setRepo(clone);
    }
    onClose();
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
        <Input
          onChange={(i: React.ChangeEvent<HTMLInputElement>) =>
            (inputRef.current.name = i.target.value)
          }
          autoFocus
          placeholder="Repo Name"
        />
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
      <Container overflow="hidden">
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
        asasd <br />
      </Container>
    </Box>
  );
}

export default RepoLocal;
