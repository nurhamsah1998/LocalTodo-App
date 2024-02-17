/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Flex,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { IoClipboardSharp, IoCheckmarkCircleOutline } from "react-icons/io5";
import { styledPropTheme } from "src/helper/styledPropTheme";
import moment from "moment";
import { Typography } from "@/components/Typography";
import { FORM_INPUT_CREATE_REPO_LOCAL } from "@/interface/index";
import { useAtom } from "jotai";
import { localSelectedRepo } from "src/store/store";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useConciseText } from "src/hooks/useConciseText";

const spin = keyframes`
0% {
  bottom: -10px;
  right: 0px;
  opacity:0
}
100% {
  bottom: 0px;
  right: 0px;
  opacity:1
}
`;

export const RepoCard = ({
  animation,
  item,
  handleClickRepoItem = () => {
    return null;
  },
}: {
  animation?: any;
  item: FORM_INPUT_CREATE_REPO_LOCAL & {
    totalTask?: any;
    todo?: any;
  };
  handleClickRepoItem?: () => void;
}) => {
  const { text: repoTitle } = useConciseText({ text: item?.repo, limit: 70 });
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
        py: 3,
        px: 2,
        borderRadius: styledPropTheme.borderRadius,
        position: "relative",
        overflow: "hidden",
        transition: "0.3",
      }}
      onClick={handleClickRepoItem}
    >
      <Box
        display={["none", "block", "block"]}
        sx={{
          color: item?.colorTheme?.color,
          position: "absolute",
          right: 0,
          top: 2,
          zIndex: 2,
        }}
      >
        <IoClipboardSharp size={120} />
        <Box
          sx={{
            color: item?.colorTheme?.bg,
            zIndex: 3,
            position: "absolute",
            top: 10,
            left: 10,
          }}
        >
          <IoCheckmarkCircleOutline size={40} />
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: item?.colorTheme?.color,
            textTransform: "capitalize",
            fontWeight: 600,
          }}
          maxWidth={["100%", "calc(100% - 120px)", "calc(100% - 120px)"]}
        >
          {repoTitle}
        </Typography>
        <Flex sx={{ gap: 1, mt: 1, alignItems: "center" }}>
          <Typography
            sx={{
              lineHeight: "8px",
              color: item?.colorTheme?.color,
              zIndex: 3,
            }}
            variantText="xs"
          >
            {item?.totalTask} Total task
          </Typography>
          <Box
            sx={{
              width: "1px",
              height: "20px",
              bg: "gray.500",
              mx: 1,
            }}
          />
          <Typography
            sx={{
              color: item?.colorTheme?.color,
              zIndex: 3,
            }}
            variantText="xs"
          >
            last updated {moment(item?.updatedAt).fromNow()}
          </Typography>
        </Flex>
        <Box>
          <Flex
            sx={{
              flexWrap: "wrap",
              lineHeight: "6px",
              gap: 1,
              mt: 2.5,
            }}
          >
            <Typography
              sx={{
                color: item?.colorTheme?.bg,
                bg: item?.colorTheme?.color,
                fontWeight: 600,
                zIndex: 3,
                p: 2,
                borderRadius: styledPropTheme.borderRadius,
              }}
              variantText="xs"
            >
              Todo : {item?.todo?.["To Do"]?.length}
            </Typography>
            <Typography
              sx={{
                color: item?.colorTheme?.bg,
                bg: item?.colorTheme?.color,
                fontWeight: 600,
                p: 2,
                borderRadius: styledPropTheme.borderRadius,
                zIndex: 3,
              }}
              variantText="xs"
            >
              Progress : {item?.todo?.["On Progress"]?.length}
            </Typography>
            <Typography
              sx={{
                color: item?.colorTheme?.bg,
                bg: item?.colorTheme?.color,
                fontWeight: 600,
                p: 2,
                borderRadius: styledPropTheme.borderRadius,
                zIndex: 3,
              }}
              variantText="xs"
            >
              Done : {item?.todo?.["Done"]?.length}
            </Typography>
          </Flex>
          <Flex sx={{ gap: 1, mt: 1 }}>
            <Typography
              sx={{
                color: item?.colorTheme?.bg,
                bg: item?.colorTheme?.color,
                fontWeight: 600,
                p: 1,
                borderRadius: styledPropTheme.borderRadius,
                zIndex: 3,
                height: "fit-content",
              }}
              variantText="xs"
            >
              Pending : {item?.todo?.["Pending"]?.length}
            </Typography>
            <Typography
              sx={{
                color: item?.colorTheme?.bg,
                bg: item?.colorTheme?.color,
                fontWeight: 600,
                p: 1,
                borderRadius: styledPropTheme.borderRadius,
                zIndex: 3,
                height: "fit-content",
              }}
              variantText="xs"
            >
              Cancel : {item?.todo?.["Cancel"]?.length}
            </Typography>
          </Flex>
        </Box>
      </Box>

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
          zIndex: 1,
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
          zIndex: 1,
        }}
      />
    </Box>
  );
};
function RepoLocalItem({
  item,
  index,
}: {
  item: FORM_INPUT_CREATE_REPO_LOCAL & {
    totalTask: any;
    todo: any;
  };
  index: number;
}) {
  const [, setSelectedRepo] = useAtom(localSelectedRepo);
  const nav: NavigateFunction = useNavigate();
  const handleClickRepoItem = (i: any) => {
    setSelectedRepo(i);
    nav(`/local-task/todo/${i?.id}`);
  };
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} 1.${index + 1}s  ease-in-out`;

  return (
    <RepoCard
      animation={animation}
      handleClickRepoItem={() => handleClickRepoItem(item)}
      item={item}
    />
  );
}

export default RepoLocalItem;
