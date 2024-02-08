/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxProps, TextProps } from "@chakra-ui/react";

export interface SIDE_BAR_MENU {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  path: string;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: string | any;
  variantText?: string;
}
export interface CANVAS extends BoxProps {
  children?: React.ReactNode;
}
export interface SIGNIN {
  keyToken?: string;
  userData?: any;
  mode?: string;
}
export interface AUTH {
  keyToken?: string | null;
  isAuth?: boolean;
  userData?: any;
  _signIn?: (props: SIGNIN) => void;
  _signOut?: () => void;
  mode?: string;
}

export interface LIST_CARD_COLOR {
  bg: string;
  color: string;
  label: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FORM_INPUT_CREATE_REPO_LOCAL {
  repo: string;
  colorTheme: LIST_CARD_COLOR;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  todo?: any[];
}

export interface FORM_CREATE_NEW_TODO {
  label: string;
  desc?: string;
  difficulty?: string;
  emotion?: string;
  priority?: string;
}
