/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalBase } from "@/components/ModalBase";
import { Typography } from "@/components/Typography";
import { Box, Flex } from "@chakra-ui/react";
import { isEmptyString } from "src/helper/isEmptyString";
import { styledPropTheme } from "src/helper/styledPropTheme";

function ModalItem({
  isOpen,
  onClose,
  label,
  desc,
  updatedAt,
  difficultyBgVariant,
  difficultyColorVariant,
  labelDifficulty,
  bgPriority,
  labelPriority,
  colorPriority,
  handleClickUpdate,
}: {
  isOpen: boolean;
  onClose: () => void;
  handleClickUpdate: () => void;
  label: string;
  desc: string;
  updatedAt: string;
  difficultyBgVariant: any;
  difficultyColorVariant: any;
  labelDifficulty: any;
  bgPriority: any;
  labelPriority: any;
  colorPriority: any;
}) {
  return (
    <>
      <ModalBase
        colorSubmitScheme="success.main"
        handleSubmit={handleClickUpdate}
        size="3xl"
        title=""
        labelSubmit="Update"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Box>
          <Typography variantText="xs" sx={{ color: "gray.600" }}>
            Title
          </Typography>
          <Typography
            variantText="lg"
            sx={{
              textTransform: "capitalize",
              fontWeight: 600,
            }}
          >
            {label}
          </Typography>
        </Box>
        <Box>
          <Typography variantText="xs">Last updated : {updatedAt}</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variantText="xs" sx={{ color: "gray.600" }}>
            Description
          </Typography>
          <Typography variantText="md">{desc}</Typography>
        </Box>
        <Box>
          <Flex sx={{ alignItems: "center", gap: 2, mt: 5 }}>
            {!isEmptyString(labelDifficulty) ? (
              <Box>
                <Typography
                  variantText="xs"
                  sx={{
                    color: "gray.600",
                  }}
                >
                  Difficulty
                </Typography>
                <Typography
                  variantText="xs"
                  sx={{
                    bg: difficultyBgVariant,
                    color: difficultyColorVariant,
                    px: 3,
                    py: 1,
                    mt: 1,
                    borderRadius: styledPropTheme.borderRadius,
                    fontWeight: 700,
                    width: "fit-content",
                  }}
                >
                  {labelDifficulty}
                </Typography>
              </Box>
            ) : null}
            {!isEmptyString(labelPriority) ? (
              <Box>
                <Typography
                  variantText="xs"
                  sx={{
                    color: "gray.600",
                  }}
                >
                  Priority
                </Typography>
                <Typography
                  variantText="xs"
                  sx={{
                    bg: bgPriority,
                    color: colorPriority,
                    px: 3,
                    py: 1,
                    mt: 1,
                    borderRadius: styledPropTheme.borderRadius,
                    fontWeight: 700,
                    width: "fit-content",
                  }}
                >
                  {labelPriority}
                </Typography>
              </Box>
            ) : null}
          </Flex>
        </Box>
      </ModalBase>
    </>
  );
}

export default ModalItem;