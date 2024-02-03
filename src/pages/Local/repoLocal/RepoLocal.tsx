/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Typography } from "@/components/Typography";
import { Box, Button, Flex, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useEncript } from "src/hooks/useEncript";
import CreateLocalRepo from "./CreateLocalRepo";
import { FORM_INPUT_CREATE_REPO_LOCAL } from "@/interface/index";
import { useNavigate } from "react-router-dom";
import { BORDER_RADIUS } from "@/theme/button";

function RepoLocal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const nav = useNavigate();
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [repo, setRepo] = React.useState(data);
  const handleClickRepoItem = (i: any) => {
    nav(`/local-task/overview/${i?.id}`);
  };
  return (
    <Box>
      <CreateLocalRepo
        isOpen={isOpen}
        onClose={onClose}
        setRepo={setRepo}
        repoList={repo}
        setDataEncrypted={setDataEncrypted}
      />
      <Flex justifyContent="flex-end">
        <Button onClick={onOpen} size="sm">
          Create new Repo
        </Button>
      </Flex>
      <VStack mt={5}>
        {repo?.map((item: FORM_INPUT_CREATE_REPO_LOCAL, index: number) => {
          return (
            <Box
              role="button"
              sx={{
                bg: item?.colorTheme?.bg,
                height: "60px",
                width: "100%",
                py: 1,
                px: 2,
                borderRadius: BORDER_RADIUS,
              }}
              onClick={() => handleClickRepoItem(item)}
              key={index}
            >
              <Typography
                sx={{
                  color: item?.colorTheme?.color,
                  textTransform: "capitalize",
                }}
              >
                {item?.repo}
              </Typography>
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
}

export default RepoLocal;
