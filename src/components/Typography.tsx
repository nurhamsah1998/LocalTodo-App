import { Text, TextProps } from "@chakra-ui/react";
import { textVariant } from "@/const/textVariant";

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
    <Text fontSize={textVariant[variantText]} {...props}>
      {children}
    </Text>
  );
};
