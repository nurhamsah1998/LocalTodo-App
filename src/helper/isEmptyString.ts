export const isEmptyString = (arg: string | number | undefined) => {
  return (
    arg === null || arg === undefined || String(arg).match("^ *$") !== null
  );
};
