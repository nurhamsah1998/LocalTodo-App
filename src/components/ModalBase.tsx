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
  labelSubmit = "Submit",
  labelClose = "Close",
  colorSubmitScheme = "primary.main",
  colorCloseScheme = "error.main",
  title,
  ...props
}) => {
  return (
    <>
      <Modal {...props} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader sx={{ fontFamily: "Poppins" }}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button
              disabled={disabledCancel}
              colorScheme={colorCloseScheme}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              {labelClose}
            </Button>
            <Button
              colorScheme={colorSubmitScheme}
              isLoading={isLoading}
              disabled={disabledSubmit}
              onClick={handleSubmit}
              variant="solid"
            >
              {labelSubmit}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
