/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Typography } from "@/components/Typography";
import {
  Box,
  Button,
  Flex,
  VStack,
  useDisclosure,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import React from "react";
import { useEncript } from "src/hooks/useEncript";
import CreateLocalRepo from "./CreateLocalRepo";
import { FORM_INPUT_CREATE_REPO_LOCAL } from "@/interface/index";
import { useNavigate } from "react-router-dom";
import { styledPropTheme } from "src/helper/styledPropTheme";
import moment from "moment";
import EmptyItemMessage from "@/components/EmptyItemMessage";
import { IoClipboardSharp } from "react-icons/io5";
import { useAtom } from "jotai";
import { localSelectedRepo } from "src/store/store";

const spin = keyframes`
0% {
  bottom: -200px;
  right: 0px;
}
100% {
  bottom: 0px;
  right: 0px;
}
`;

function RepoLocal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [, setSelectedRepo] = useAtom(localSelectedRepo);
  const nav = useNavigate();
  const { data, setDataEncrypted } = useEncript("repo", "array");
  const [repo, setRepo] = React.useState(data);
  const handleClickRepoItem = (i: any) => {
    setSelectedRepo(i);
    nav(`/local-task/todo/${i?.id}`);
  };
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
  const prefersReducedMotion = usePrefersReducedMotion();
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
          pb: 3,
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
              const animation = prefersReducedMotion
                ? undefined
                : `${spin} 1.${index}s  ease-in-out`;
              return (
                <Box
                  animation={animation}
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
                    transition: "0.3",
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
                    <Box>
                      <Flex
                        sx={{
                          flexWrap: "wrap",
                          lineHeight: "6px",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            color: item?.colorTheme?.color,
                            fontWeight: 600,
                            bg: "#fff",
                            p: 2,
                            borderRadius: styledPropTheme.borderRadius,
                          }}
                          variantText="xs"
                        >
                          Todo : {item?.todo?.["To Do"]?.length}
                        </Typography>
                        <Typography
                          sx={{
                            color: item?.colorTheme?.color,
                            fontWeight: 600,
                            p: 2,
                            borderRadius: styledPropTheme.borderRadius,
                            bg: "#fff",
                          }}
                          variantText="xs"
                        >
                          Progress : {item?.todo?.["On Progress"]?.length}
                        </Typography>
                        <Typography
                          sx={{
                            color: item?.colorTheme?.color,
                            fontWeight: 600,
                            p: 2,
                            borderRadius: styledPropTheme.borderRadius,
                            bg: "#fff",
                          }}
                          variantText="xs"
                        >
                          Done : {item?.todo?.["Done"]?.length}
                        </Typography>
                      </Flex>
                      <Flex sx={{ gap: 1, mt: 1 }}>
                        <Typography
                          sx={{
                            color: item?.colorTheme?.color,
                            fontWeight: 600,
                            p: 2,
                            borderRadius: styledPropTheme.borderRadius,
                            bg: "#fff",
                          }}
                          variantText="xs"
                        >
                          Pending : {item?.todo?.["Pending"]?.length}
                        </Typography>
                        <Typography
                          sx={{
                            color: item?.colorTheme?.color,
                            fontWeight: 600,
                            p: 2,
                            borderRadius: styledPropTheme.borderRadius,
                            bg: "#fff",
                          }}
                          variantText="xs"
                        >
                          Cancel : {item?.todo?.["Cancel"]?.length}
                        </Typography>
                      </Flex>
                    </Box>
                  </Box>
                  <Flex
                    sx={{
                      gap: 4,
                      mt: 4,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box
                      sx={{
                        bg: "#fff",
                        px: 5,
                        py: 1,
                        borderRadius: styledPropTheme.borderRadius,
                        zIndex: 2,
                      }}
                    >
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
