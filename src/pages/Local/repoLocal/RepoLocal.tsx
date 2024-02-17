/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

import { Box, Button, Flex, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useEncript } from "src/hooks/useEncript";
import CreateLocalRepo from "./CreateLocalRepo";
import EmptyItemMessage from "@/components/EmptyItemMessage";
import RepoLocalItem from "./RepoLocalItem";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { IoAddSharp } from "react-icons/io5";

function RepoLocal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [repo, setRepo] = React.useState(data);

  const totalTask = React.useMemo(() => {
    return repo?.map((item: any) => {
      const getTotalTask = () => {
        let result = 0;
        for (const key in item?.todo) {
          result += item.todo[key].length;
        }
        return result;
      };
      const totalTask = getTotalTask();
      return { ...item, totalTask };
    });
  }, [repo]);
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <CreateLocalRepo
        isOpen={isOpen}
        onClose={onClose}
        setRepo={setRepo}
        repoList={repo}
        setDataEncrypted={setDataEncrypted}
      />
      <Flex display={["none", "none", "flex"]} justifyContent="flex-end">
        <Button onClick={onOpen} size="sm">
          Create new Repo
        </Button>
      </Flex>
      <Button
        onClick={onOpen}
        display={["block", "block", "none"]}
        sx={{
          borderRadius: "100%",
          width: "70px",
          height: "70px",
          position: "fixed",
          bottom: 7,
          right: 7,
          p: 0,
          boxShadow: styledPropTheme.boxShadow,
          zIndex: 99,
          bg: "primary.main",
        }}
      >
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoAddSharp size={40} />
        </Flex>
      </Button>
      <VStack
        sx={{
          mt: 5,
          gap: 3,
        }}
        pb={["100px", "110px", 3]}
      >
        {!Boolean(repo?.length) ? (
          <EmptyItemMessage
            underlineColor="primary.main"
            title="You don't have any repo"
            desc="create some repo to make todo list"
          />
        ) : (
          totalTask?.map((item: any, index: number) => {
            return <RepoLocalItem key={index} item={item} index={index} />;
          })
        )}
      </VStack>
    </Box>
  );
}

export default RepoLocal;
