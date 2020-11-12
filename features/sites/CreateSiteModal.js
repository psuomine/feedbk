import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
} from "@chakra-ui/core";
import { TextInput, TextareaInput } from "@/components/input";

const initState = { name: "", description: "" };

const CreateSiteModal = ({ isOpen, toggleOpen }) => {
  const [values, setValues] = useState(initState);
  const [isNameError, setIsNameError] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const validateName = () => {
    values.name.length === 0 && isDirty
      ? setIsNameError("Site name is required")
      : setIsNameError("");
  };

  const onValueChange = ({ target: { name, value } }) => {
    setIsDirty(true);
    setValues({ ...values, [name]: value });
  };

  const onClose = () => {
    setValues(initState);
    setIsNameError("");
    setIsDirty(false);
    toggleOpen();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent maxW="xl">
        <ModalHeader px={6} pb={1} fontSize="lg">
          New site
        </ModalHeader>
        <Box px={6}>
          <Text fontSize="sm" lineHeight="short" color="text.gray.600">
            Fill out the site information below to get started
          </Text>
        </Box>
        <ModalCloseButton tabIndex="-1" top={6} right={6} onClick={onClose} />
        <ModalBody px={6} my={4}>
          <TextInput
            name="name"
            label="Site name"
            value={values.name}
            required
            onChange={onValueChange}
            error={isNameError ? "Site name is required" : ""}
            onBlur={validateName}
          />
          <Box mt={4}>
            <TextareaInput
              name="description"
              label="Description"
              value={values.description}
              onChange={onValueChange}
            />
          </Box>
        </ModalBody>
        <ModalFooter backgroundColor="bg.gray.100" p={6}>
          <SecondaryButton mr={6} onClick={onClose}>
            Cancel
          </SecondaryButton>
          <PrimaryButton
            disabled={!isDirty || values.name.length === 0}
            type="submit"
          >
            Add this site
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateSiteModal;
