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
import { IoClipboardSharp } from "react-icons/io5";

function RepoLocal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const nav = useNavigate();
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [repo, setRepo] = React.useState(data);
  const handleClickRepoItem = (i: any) => {
    nav(`/local-task/overview/${i?.id}`);
  };
  const totalTask = React.useMemo(() => {
    return repo?.map((item: any) => {
      const getTotalTask = () => {
        let result = 0;
        for (const key in item?.todo) {
          result += item.todo[key].length;
        }
        console.log(result, "<result");
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
          totalTask?.map(
            (
              item: FORM_INPUT_CREATE_REPO_LOCAL & {
                totalTask: any;
                todo: any;
              },
              index: number
            ) => {
              return (
                <Box
                  role="button"
                  sx={{
                    bg: item?.colorTheme?.bg,
                    borderColor: "gray.200",
                    borderWidth: "1px",
                    borderStyle: "solid",

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
                  <Box>
                    <Typography
                      sx={{
                        color: item?.colorTheme?.color,
                        textTransform: "capitalize",
                        fontWeight: 600,
                      }}
                    >
                      {item?.repo}
                    </Typography>
                    <Flex sx={{ gap: 1, mt: 1, alignItems: "center" }}>
                      <Box sx={{ color: item?.colorTheme?.color }}>
                        <IoClipboardSharp />
                      </Box>
                      <Typography
                        sx={{
                          lineHeight: "8px",
                          color: item?.colorTheme?.color,
                        }}
                        variantText="xs"
                      >
                        {item?.totalTask} Total task
                      </Typography>
                    </Flex>
                    <Flex
                      sx={{
                        flexWrap: "wrap",
                        lineHeight: "6px",
                        gap: 2,
                        mt: 2,
                      }}
                    >
                      <Typography
                        sx={{ color: item?.colorTheme?.color, fontWeight: 600 }}
                        variantText="xs"
                      >
                        Todo : {item?.todo?.["To Do"]?.length}
                      </Typography>
                      <Typography
                        sx={{ color: item?.colorTheme?.color, fontWeight: 600 }}
                        variantText="xs"
                      >
                        Progress : {item?.todo?.["On Progress"]?.length}
                      </Typography>
                      <Typography
                        sx={{ color: item?.colorTheme?.color, fontWeight: 600 }}
                        variantText="xs"
                      >
                        Done : {item?.todo?.["Done"]?.length}
                      </Typography>
                      <Typography
                        sx={{ color: item?.colorTheme?.color, fontWeight: 600 }}
                        variantText="xs"
                      >
                        Pending : {item?.todo?.["Pending"]?.length}
                      </Typography>
                      <Typography
                        sx={{ color: item?.colorTheme?.color, fontWeight: 600 }}
                        variantText="xs"
                      >
                        Cancel : {item?.todo?.["Cancel"]?.length}
                      </Typography>
                    </Flex>
                  </Box>
                  <Flex
                    sx={{
                      gap: 4,
                      mt: 4,
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* <Box>
                    <Typography
                      variantText="xs"
                      sx={{
                        color: item?.colorTheme?.color,
                      }}
                    >
                      created at
                    </Typography>
                    <Typography
                      variantText="xs"
                      sx={{
                        color: item?.colorTheme?.color,
                        textTransform: "capitalize",
                        mt: -1,
                      }}
                    >
                      {moment(item?.createdAt).format("DD MMM YYYY, h:mm a")}
                    </Typography>
                  </Box> */}
                    <Box>
                      <Typography
                        variantText="xs"
                        sx={{
                          color: item?.colorTheme?.color,
                        }}
                      >
                        last updated
                      </Typography>
                      <Typography
                        variantText="xs"
                        sx={{
                          color: item?.colorTheme?.color,
                          textTransform: "capitalize",
                          mt: -1,
                        }}
                      >
                        {moment(item?.updatedAt).fromNow()}
                      </Typography>
                    </Box>
                  </Flex>
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
            }
          )
        )}
      </VStack>
    </Box>
  );
}

export default RepoLocal;
