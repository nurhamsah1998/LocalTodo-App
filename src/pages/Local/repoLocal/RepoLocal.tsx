/* eslint-disable no-extra-boolean-cast */
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
import moment from "moment";
import EmptyItemMessage from "@/components/EmptyItemMessage";

function RepoLocal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const nav = useNavigate();
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [repo, setRepo] = React.useState(data);
  const handleClickRepoItem = (i: any) => {
    nav(`/local-task/overview/${i?.id}`);
  };
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
      <Flex justifyContent="flex-end">
        <Button onClick={onOpen} size="sm">
          Create new Repo
        </Button>
      </Flex>
      <VStack
        sx={{
          mt: 5,
          gap: 3,
        }}
      >
        {!Boolean(repo?.length) ? (
          <EmptyItemMessage
            underlineColor="primary.main"
            title="You don't have any repo"
            desc="create some repo to make todo list"
          />
        ) : (
          repo?.map((item: FORM_INPUT_CREATE_REPO_LOCAL, index: number) => {
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
                    transform: styledPropTheme.scaletoBigger,
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
                <Typography
                  variantText="xs"
                  sx={{
                    color: item?.colorTheme?.color,
                    textTransform: "capitalize",
                    position: "absolute",
                    right: 3,
                    bottom: 2,
                  }}
                >
                  {moment(item?.createdAt).format("LLLL")}
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
                    opacity: "0.1",
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
                    opacity: "0.1",
                  }}
                />
              </Box>
            );
          })
        )}
      </VStack>
    </Box>
  );
}

export default RepoLocal;
