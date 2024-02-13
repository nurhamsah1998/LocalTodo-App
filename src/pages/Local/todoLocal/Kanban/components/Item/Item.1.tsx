import React, { useEffect } from "react";
import classNames from "classnames";
import {
  Handle,
  // Remove
} from "./components";
import styles from "./Item.module.css";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { Typography } from "@/components/Typography";
import {
  MIN_WIDTH_CONTAINER_CARD,
  WIDTH_BUTTON_DRAG_CARD,
  difficultyStatusKanban,
  priorityStatusKanban,
} from "@/const/index";
import { styledPropTheme } from "src/helper/styledPropTheme";
import { useFinding } from "src/hooks/useKanbanStatus";
import { useConciseText } from "src/hooks/useConciseText";
import { DIFFICULTY_STATUS_KANBAN } from "@/interface/index";
import { Props } from "./Item";

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        color,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle,
        handleprops,
        // height,
        grapHandleColor,
        index,
        listeners,
        // onRemove,
        renderItem,
        sorting,
        style,
        transition,
        transform,
        value,
        wrapperStyle,
        ...props
      },
      ref
    ) => {
      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = "grabbing";

        return () => {
          document.body.style.cursor = "";
        };
      }, [dragOverlay]);
      const {
        label: kanbanTitle,
        desc,
        createdAt,
        difficulty,
        priority,
      } = JSON.parse(value);
      const {
        label: labelDifficulty,
        bg: difficultyBgVariant,
        color: difficultyColorVariant,
      }: DIFFICULTY_STATUS_KANBAN = useFinding({
        value: difficulty,
        option: difficultyStatusKanban,
      });
      const {
        label: labelPriority,
        bg: bgPriority,
        color: colorPriority,
      }: DIFFICULTY_STATUS_KANBAN = useFinding({
        value: priority,
        option: priorityStatusKanban,
      });
      const { text: description } = useConciseText({ text: desc, limit: 136 });
      return renderItem ? (
        renderItem({
          dragOverlay: Boolean(dragOverlay),
          dragging: Boolean(dragging),
          sorting: Boolean(sorting),
          index,
          fadeIn: Boolean(fadeIn),
          listeners,
          ref,
          style,
          transform,
          transition,
          value,
        })
      ) : (
        <chakra.li
          className={classNames(
            styles.Wrapper,
            fadeIn && styles.fadeIn,
            sorting && styles.sorting,
            dragOverlay && styles.dragOverlay
          )}
          style={
            {
              ...wrapperStyle,
              transition: [transition, wrapperStyle?.transition]
                .filter(Boolean)
                .join(", "),
              "--translate-x": transform
                ? `${Math.round(transform.x)}px`
                : undefined,
              "--translate-y": transform
                ? `${Math.round(transform.y)}px`
                : undefined,
              "--scale-x": transform?.scaleX
                ? `${transform.scaleX}`
                : undefined,
              "--scale-y": transform?.scaleY
                ? `${transform.scaleY}`
                : undefined,
              "--index": index,
              "--color": color,
            } as React.CSSProperties
          }
          ref={ref}
        >
          <chakra.div
            className={classNames(
              styles.Item,
              dragging && styles.dragging,
              handle && styles.withHandle,
              dragOverlay && styles.dragOverlay,
              disabled && styles.disabled,
              color && styles.color
            )}
            sx={style}
            data-cypress="draggable-item"
            {...(!handle ? listeners : undefined)}
            {...props}
            tabIndex={!handle ? 0 : undefined}
          >
            <Box
              sx={{
                width: `${
                  MIN_WIDTH_CONTAINER_CARD - WIDTH_BUTTON_DRAG_CARD * 3.6
                }px`,
              }}
            >
              <Typography variantText="sm" sx={{ fontWeight: 600 }}>
                {kanbanTitle}
              </Typography>
              <Typography
                variantText="xs"
                sx={{
                  textWrap: "wrap",
                  lineHeight: "15px",
                  color: "gray.600",
                  mt: 1,
                }}
              >
                {description}
              </Typography>
              <Flex
                sx={{
                  flexDirection: "column",
                  mt: 2,
                  pt: 2,
                  borderTopColor: "gray.300",
                  borderTopWidth: "1px",
                  borderTopStyle: "solid",
                  gap: 1,
                }}
              >
                <Flex sx={{ alignItems: "center", gap: 1 }}>
                  <Typography
                    variantText="xs"
                    sx={{
                      bg: difficultyBgVariant,
                      color: difficultyColorVariant,
                      px: 3,
                      py: 1,
                      borderRadius: styledPropTheme.borderRadius,
                      fontWeight: 700,
                      width: "fit-content",
                    }}
                  >
                    {labelDifficulty}
                  </Typography>
                  <Typography
                    variantText="xs"
                    sx={{
                      bg: bgPriority,
                      color: colorPriority,
                      px: 3,
                      py: 1,
                      borderRadius: styledPropTheme.borderRadius,
                      fontWeight: 700,
                      width: "fit-content",
                    }}
                  >
                    {labelPriority}
                  </Typography>
                </Flex>
                <Typography variantText="xs">{createdAt}</Typography>
              </Flex>
            </Box>

            <Box
              sx={{
                bg: grapHandleColor,
              }}
              className={styles.Actions}
            >
              {/* {onRemove ? (
                <Remove className={styles.Remove} onClick={onRemove} />
              ) : null} */}
              {handle ? (
                <Handle
                  {...handleprops}
                  style={{
                    width: `${WIDTH_BUTTON_DRAG_CARD}px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  {...listeners}
                />
              ) : null}
            </Box>
          </chakra.div>
        </chakra.li>
      );
    }
  )
);
