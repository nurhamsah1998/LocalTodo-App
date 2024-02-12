import {
  StyleFunctionProps,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/react";

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
export const Textarea = defineStyleConfig({
  variants: {
    outline: (props: StyleFunctionProps) => {
      return {
        fontFamily: "Poppins, sans-serif",
        borderColor: props?.colorScheme || "gray.200",
        borderWidth: "2px",
        borderStyle: "solid",
        padding: "5px 10px",
        borderRadius: "5px",
        width: "100%",
        _focus: {
          borderColor: props?.colorScheme || "primary.main",
          borderWidth: "2px",
          borderStyle: "solid",
          outline: "none",
          transition: "0.3s",
        },
      };
    },
  },
  defaultProps: {
    variant: "outline",
  },
  sizes: { xl, lg, md, sm, xs },
});
