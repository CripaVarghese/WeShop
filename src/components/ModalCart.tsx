import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
  Stack,
  RadioGroup,
  Radio,
  ModalCloseButton,
} from "@chakra-ui/react";

function ModalCart(props: { isOpen: any; onClose: any }) {
  const { isOpen, onClose } = props;
  const [size, setSize] = React.useState("M");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>The Roadster Lifestyle Co. Knitted Ribbed Top</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={4}>₹ 781 ₹ 1699 (54% OFF)</Text>
          <RadioGroup onChange={setSize} value={size}>
            <Stack direction="row">
              <Radio value="XS">XS</Radio>
              <Radio value="S">S</Radio>
              <Radio value="M">M</Radio>
              <Radio value="L">L</Radio>
              <Radio value="XL">XL</Radio>
            </Stack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalCart;
