import { TextProps } from "@chakra-ui/react";

export interface SIDE_BAR_MENU {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  name: string;
  label: string;
}
type SUB_VARIANT_COLOR = {
  light: string;
  main: string;
  dark: string;
};
export interface THEME_COLORS_VARIANT {
  primary: SUB_VARIANT_COLOR;
  error: SUB_VARIANT_COLOR;
  success: SUB_VARIANT_COLOR;
  warning: SUB_VARIANT_COLOR;
  info: SUB_VARIANT_COLOR;
}
export interface TEXT_VARIANT {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
  "3xl"?: string;
  "4xl"?: string;
  "5xl"?: string;
  "6xl"?: string;
  "7xl"?: string;
  "8xl"?: string;
  "9xl"?: string;
}

export interface TYPOGRAPHY extends TextProps {
  children?: string;
  variantText?: string;
}
