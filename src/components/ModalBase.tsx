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
    isDisabled?: boolean;
    isLoading?: boolean;
    onClose: () => void;
    handleSubmit?: () => void;
    children?: any;
    labelSubmit?: string;
    labelClose?: string;
    title?: string;
  }
> = ({
  isOpen,
  isDisabled,
  isLoading,
  onClose,
  handleSubmit,
  children,
  labelSubmit = "Submit",
  labelClose = "Close",
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
              variant="outline"
              colorScheme="error.main"
              mr={3}
              onClick={onClose}
            >
              {labelClose}
            </Button>
            <Button
              isLoading={isLoading}
              isDisabled={isDisabled}
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
