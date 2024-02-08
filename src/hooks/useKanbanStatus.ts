/* eslint-disable prefer-const */
import { difficultyStatusKanban } from "../const";

export const useKanbanStatus = (difficulty: string) => {
  const result = difficultyStatusKanban.find(
    (item) => item.name === difficulty.toLocaleLowerCase()
  );
  return {
    ...result,
    difficultyColorVariant: result?.color,
    difficultyBgVariant: result?.bg,
  };
};
export const useConciseText = ({
  text,
  limit,
}: {
  text: string;
  limit: number;
}) => {
  let dots: string = "";
  if (String(text).length >= limit) dots = "...";
  return { text: `${text.slice(0, limit || 10)}${dots}` };
};
