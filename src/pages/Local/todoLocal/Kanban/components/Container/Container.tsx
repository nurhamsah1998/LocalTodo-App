/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import { ChakraProps, chakra } from "@chakra-ui/react";
import classNames from "classnames";

// import { Handle, Remove } from "../Item";

import styles from "./Container.module.css";
import { MIN_WIDTH_CONTAINER_CARD } from "@/const/index";
import { Typography } from "@/components/Typography";

export interface Props {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleprops?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  headerContainerProps: ChakraProps;
  unstyled?: boolean;
  onClick?(): void;
  // onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      columns = 1,
      // handleprops,
      horizontal,
      hover,
      onClick,
      // onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      headerContainerProps,
      ...props
    }: Props,
    ref
  ) => {
    const Component = onClick ? chakra.button : chakra.div;

    return (
      <Component
        {...props}
        ref={ref}
        style={
          {
            ...style,
            minWidth: `${MIN_WIDTH_CONTAINER_CARD}px`,
            "--columns": columns,
          } as React.CSSProperties
        }
        className={classNames(
          styles.Container,
          unstyled && styles.unstyled,
          horizontal && styles.horizontal,
          hover && styles.hover,
          placeholder && styles.placeholder,
          scrollable && styles.scrollable,
          shadow && styles.shadow
        )}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
        {label ? (
          <chakra.div
            sx={{
              ...headerContainerProps.sx,
            }}
            className={styles.Header}
          >
            <Typography
              sx={{
                fontWeight: 600,
                ...headerContainerProps.sx,
              }}
            >
              {label}
            </Typography>
            {/* <div className={styles.Actions}>
              {onRemove ? <Remove onClick={onRemove} /> : undefined}
              <Handle {...handleprops} />
            </div> */}
          </chakra.div>
        ) : null}
        {placeholder ? children : <ul>{children}</ul>}
      </Component>
    );
  }
);
