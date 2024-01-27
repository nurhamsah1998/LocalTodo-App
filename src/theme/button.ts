import { StyleFunctionProps, theme as chakraTheme } from "@chakra-ui/react";
import { PickThemeColor } from "src/helper/themeColor";

const { Button: ButtonProps } = chakraTheme.components;
export const Button = {
  ...ButtonProps,
  baseStyle: {
    textTransform: "capitalize",
    borderRadius: "5px",
    _focus: {
      outline: "none",
    },
    _hover: {
      borderColor: "unset",
    },
  },
  variants: {
    // 4. We can override existing variants
    solid: (props: StyleFunctionProps) => {
      /// JUST TRYING OOP
      const color = new PickThemeColor(props.colorScheme);
      const textColor = (arg: string | undefined) => {
        if (arg) return !arg.includes("light") ? "#fff" : undefined;
      };
      return {
        bg: color.getColor() || "primary.main",
        color: textColor(color.getColor()),
      };
    },
    outline: (props: StyleFunctionProps) => {
      /// JUST TRYING OOP
      const color = new PickThemeColor(props.colorScheme);
      return {
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: color.getColor(),
        color: color.getColor(),
      };
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary.main",
  },
};
