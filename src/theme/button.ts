import { StyleFunctionProps, theme as chakraTheme } from "@chakra-ui/react";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { PickThemeColor } from "src/helper/themeColor";

const { Button: ButtonProps } = chakraTheme.components;
export const Button = {
  ...ButtonProps,
  baseStyle: {
    textTransform: "capitalize",
    borderRadius: styledPropTheme.borderRadius,
    fontFamily: "Poppins",
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
        bg: props?.isDisabled ? "gray.300" : color.getColor() || "primary.main",
        color: textColor(color.getColor()),
        cursor: props?.isDisabled ? "no-drop" : "pointer",
      };
    },
    outline: (props: StyleFunctionProps) => {
      /// JUST TRYING OOP
      const color = new PickThemeColor(props.colorScheme);
      return {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: props?.isDisabled ? "gray.400" : color.getColor(),
        color: props?.isDisabled ? "gray.400" : color.getColor(),
        cursor: props?.isDisabled ? "no-drop" : "pointer",
        transition: "0.3s",
        _hover: {
          bg: color.getColor(),
          color: "#fff",
        },
      };
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary.main",
  },
};
