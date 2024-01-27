import { Text, TextProps } from "@chakra-ui/react";
import { textVariant } from "@/const/textVariant";
import { TEXT_VARIANT } from "../interface";

interface IO extends TextProps {
  children?: string;
  variantText?: string;
}
export const Typography: React.FunctionComponent<IO> = ({
  variantText,
  children,
  ...props
}) => {
  return (
    /// https://stackoverflow.com/a/69198602/18038473
    /// Type 'undefined' cannot be used as an index type
    /// profile answered Vikram Deshmukh : https://stackoverflow.com/users/1990505/vikram-deshmukh
    <Text fontSize={textVariant[variantText as keyof TEXT_VARIANT]} {...props}>
      {children}
    </Text>
  );
};
