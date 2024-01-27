import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { fontStyle } from "../constants/style";

const EmptyPage = (props: { isOpen: any; onClose: any }) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#ff3f6c"} fontSize={"sm"} fontWeight={"bold"}>
          THIS PAGE IS TO BE IMPLEMENTED
        </ModalHeader>
        <ModalCloseButton />

        <ModalFooter>
          <Button
            color={"#ff3f6c"}
            variant="outline"
            {...fontStyle.xsBold}
            border="1px solid "
            borderRadius={"none"}
            letterSpacing={1}
            onClick={onClose}
          >
            CLOSE
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EmptyPage;
