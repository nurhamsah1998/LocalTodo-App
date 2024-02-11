/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import classNames from "classnames";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";

import { Handle, Remove } from "./components";

import styles from "./Item.module.css";
import { Box, Flex, chakra, useDisclosure } from "@chakra-ui/react";
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
import ModalItem from "./ModalItem";
import { useAtom } from "jotai";
import { mutationLocalRepo } from "src/store/store";

export interface Props {
  dragOverlay?: boolean;
  color?: string;
  activeId?: any;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  handleProps?: any;
  height?: number;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  wrapperStyle?: React.CSSProperties;
  value: React.ReactNode | any;
  grapHandleColor?: string;
  onRemove?(): void;
  renderItem?(args: {
    dragOverlay: boolean;
    dragging: boolean;
    sorting: boolean;
    index: number | undefined;
    fadeIn: boolean;
    listeners: DraggableSyntheticListeners;
    ref: React.Ref<HTMLElement>;
    style: React.CSSProperties | undefined;
    transform: Props["transform"];
    transition: Props["transition"];
    value: Props["value"];
  }): React.ReactElement;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        color,
        activeId,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle,
        handleProps,
        height,
        grapHandleColor,
        index,
        listeners,
        onRemove,
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
      const { isOpen, onClose, onOpen } = useDisclosure();
      const handleDelete = () => {
        setMutationLocalTodo({
          isOpenModal: false,
          mutation: "delete",
          data: JSON.parse(value),
          container: activeId,
        });
      };
      const {
        label: kanbanTitle,
        desc,
        createdAt,
        difficulty,
        priority,
        updatedAt,
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
      const [, setMutationLocalTodo] = useAtom(mutationLocalRepo);
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
          <ModalItem
            onClose={onClose}
            handleClickUpdate={() =>
              setMutationLocalTodo({
                isOpenModal: true,
                mutation: "patch",
                data: JSON.parse(value),
                container: activeId,
              })
            }
            label={kanbanTitle}
            desc={desc}
            updatedAt={updatedAt}
            difficultyBgVariant={difficultyBgVariant}
            difficultyColorVariant={difficultyColorVariant}
            labelDifficulty={labelDifficulty}
            bgPriority={bgPriority}
            labelPriority={labelPriority}
            colorPriority={colorPriority}
            isOpen={isOpen}
            handleDelete={handleDelete}
          />
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
              <Box onClick={onOpen} cursor="pointer">
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
              </Box>
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
              onClick={() => alert("ad")}
              sx={{
                bg: grapHandleColor,
              }}
              className={styles.Actions}
            >
              {onRemove ? (
                <Remove className={styles.Remove} onClick={onRemove} />
              ) : null}
              {handle ? (
                <Handle
                  {...handleProps}
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
