/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Typography } from "@/components/Typography";
import { Box, Button, Flex, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useEncript } from "src/hooks/useEncript";
import CreateLocalRepo from "./CreateLocalRepo";
import { FORM_INPUT_CREATE_REPO_LOCAL } from "@/interface/index";
import { useNavigate } from "react-router-dom";
import { styledPropTheme } from "src/helper/styledPropTheme";

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
      <VStack mt={5} gap={3}>
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
                borderRadius: styledPropTheme.borderRadius,
                position: "relative",
                overflow: "hidden",
                transition: "0.3s",
                _hover: {
                  transform: "scale(1.01)",
                  boxShadow: styledPropTheme.boxShadow,
                },
                _active: {
                  transform: "scale(1.0)",
                },
              }}
              onClick={() => handleClickRepoItem(item)}
              key={index}
            >
              <Typography
                sx={{
                  color: item?.colorTheme?.color,
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                {item?.repo}
              </Typography>
              <Box
                sx={{
                  bg: item?.colorTheme?.color,
                  width: "450px",
                  height: "450px",
                  borderRadius: "100%",
                  position: "absolute",
                  top: -400,
                  left: -200,
                  opacity: "0.07",
                }}
              />
              <Box
                sx={{
                  bg: item?.colorTheme?.color,
                  width: "450px",
                  height: "450px",
                  borderRadius: "100%",
                  position: "absolute",
                  bottom: -400,
                  right: -200,
                  opacity: "0.07",
                }}
              />
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
}

export default RepoLocal;
