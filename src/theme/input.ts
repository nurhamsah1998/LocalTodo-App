import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);
const baseStyle = definePartsStyle({
  field: {
    fontFamily: "Poppins, sans-serif",
    borderColor: "gray.200",
    borderWidth: "2px",
    borderStyle: "solid",
    padding: "5px 10px",
    borderRadius: "5px",
    width: "100%",
    _focus: {
      borderColor: "primary.main",
      borderWidth: "2px",
      borderStyle: "solid",
      outline: "none",
      transition: "0.3s",
    },
  },
  addon: {
    bg: "primary.main",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  element: {
    height: "100%",
    padding: "5px 10px",
  },
});
const xl = defineStyle({
  fontSize: "xl",
  padding: "5px 10px",
});
const lg = defineStyle({
  fontSize: "lg",
  padding: "5px 10px",
});
const md = defineStyle({
  fontSize: "md",
  padding: "5px 10px",
});
const sm = defineStyle({
  fontSize: "sm",
  padding: "5px 10px",
});
const xs = defineStyle({
  fontSize: "xs",
  padding: "5px 10px",
});
const sizes = {
  xl: definePartsStyle({ field: xl, addon: xl }),
  lg: definePartsStyle({ field: lg, addon: lg }),
  md: definePartsStyle({ field: md, addon: md }),
  sm: definePartsStyle({ field: sm, addon: sm }),
  xs: definePartsStyle({ field: xs, addon: xs }),
};
const error = definePartsStyle({
  field: {
    fontFamily: "Poppins, sans-serif",
    borderColor: "red.200",
    borderWidth: "2px",
    borderStyle: "solid",
    padding: "5px 10px",
    borderRadius: "5px",
    width: "100%",
    _focus: {
      borderColor: "error.main",
      borderWidth: "2px",
      borderStyle: "solid",
      outline: "none",
      transition: "0.3s",
    },
  },
});

export const Input = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: { error },
});
