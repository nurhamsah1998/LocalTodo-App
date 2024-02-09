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
