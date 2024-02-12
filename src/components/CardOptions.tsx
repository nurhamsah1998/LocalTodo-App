/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, SimpleGrid } from "@chakra-ui/layout";
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
      <SimpleGrid minChildWidth="120px" spacing="10px">
        {options.map((item: any, index: number) => (
          <Box
            onClick={() => handleClickCardOption(item)}
            role="button"
            key={index}
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
      </SimpleGrid>
    </Box>
  );
}

export default CardOptions;
