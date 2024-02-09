/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

export const useFinding = ({
  value,
  option,
}: {
  value: string;
  option: any[];
}) => {
  const result = option?.find(
    (item) => item?.name === value?.toLocaleLowerCase()
  );

  return { ...result };
};
