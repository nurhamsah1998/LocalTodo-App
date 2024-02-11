/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex } from "@chakra-ui/layout";
import { Typography } from "./Typography";
import { Checkbox } from "@chakra-ui/checkbox";
import { styledPropTheme } from "src/helper/styledPropTheme";

function CardOptions({
  handleClickCardOption,
  options,
  keyInitialValue,
  label,
  keyEnableCheckbox,
}: {
  options: any;
  keyInitialValue: string;
  keyEnableCheckbox: string;
  label: string;
  handleClickCardOption: (item: any) => void;
}) {
  return (
    <Box>
      <Typography variantText="sm">{label}</Typography>
      <Flex
        mt={1}
        sx={{ gap: 2, flexWrap: "wrap" }}
        justifyContent={["center", "center", "flex-start", "flex-start"]}
      >
        {options.map((item: any, index: number) => (
          <Box
            onClick={() => handleClickCardOption(item)}
            role="button"
            key={index}
            w={["100%", "100%", 200, 200]}
            sx={{
              bg: item.bg,
              color: item.color,
              padding: "12px",
              pb: 0,
              textAlign: "right",
              borderRadius: styledPropTheme.borderRadius,
            }}
          >
            <Typography textAlign="center">{item.label}</Typography>
            <Checkbox isChecked={keyInitialValue === item[keyEnableCheckbox]} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default CardOptions;
