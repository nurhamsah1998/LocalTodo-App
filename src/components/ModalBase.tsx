/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
} from "@chakra-ui/react";
import React from "react";

export const ModalBase: React.FunctionComponent<
  ModalProps & {
    isOpen: boolean;
    disabledSubmit?: boolean;
    disabledCancel?: boolean;
    hideSubmitButton?: boolean;
    isLoading?: boolean;
    onClose: () => void;
    handleSubmit?: () => void;
    children?: any;
    labelSubmit?: string;
    labelClose?: string;
    colorSubmitScheme?: string;
    colorCloseScheme?: string;
    title?: string;
  }
> = ({
  isOpen,
  disabledSubmit,
  disabledCancel,
  isLoading,
  onClose,
  handleSubmit,
  children,
  hideSubmitButton = false,
  labelSubmit = "Submit",
  labelClose = "Close",
  colorSubmitScheme = "primary.main",
  colorCloseScheme = "error.main",
  title,
  ...props
}) => {
  return (
    <>
      <Modal
        {...props}
        motionPreset="slideInTop"
        isCentered
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(0deg)" />
        <ModalContent maxWidth={["90%", "80%", "70%"]}>
          <ModalHeader
            sx={{
              fontFamily: "Poppins",
              borderBottomColor: "gray.200",
              borderBottomWidth: "2px",
              borderStyle: "solid",
            }}
          >
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            sx={{
              bg: "gray.50",
            }}
            css={{
              "::-webkit-scrollbar": {
                width: "5px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "#c7c7c7",
              },
              "::-webkit-scrollbar-track": {
                background: "#f3f3f3",
              },
            }}
          >
            {children}
          </ModalBody>

          <ModalFooter
            sx={{
              borderTopColor: "gray.200",
              borderTopWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <Button
              disabled={disabledCancel}
              colorScheme={colorCloseScheme}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              {labelClose}
            </Button>
            {hideSubmitButton ? null : (
              <Button
                colorScheme={colorSubmitScheme}
                isLoading={isLoading}
                isDisabled={disabledSubmit}
                onClick={handleSubmit}
                variant="solid"
              >
                {labelSubmit}
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
