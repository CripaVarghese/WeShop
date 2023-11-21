import {
  Stack,
  Divider,
  chakra,
  HStack,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/Hi";
import { CiHeart } from "react-icons/ci";
import { font } from "../../style";

const MainProdDetails = () => {
  return (
    <Stack>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Urbano Fashion
      </Text>
      <Text fontSize={"xl"} fontWeight={"sm"} color={"#868993"} m="0">
        Men Teal Green Slim Fit Tropical Printed Pure Cotton T-shirt
      </Text>
      <Divider />
      <Stack pb="20px" gap={"3"}>
        <Text>
          <chakra.span fontSize={"xl"} fontWeight={"bold"}>
            ₹494{" "}
          </chakra.span>
        </Text>
        <Text fontSize={"xs"} fontWeight={"bold"} color="#04A784">
          inclusive of all taxes
        </Text>
        <Text {...font.smBold}>MORE COLORS</Text>
        <Text {...font.smBold}>SELECT SIZE SIZE CHART</Text>
        <HStack>
          <Button
            colorScheme="teal"
            variant="outline"
            borderRadius="50px"
            p="25px 20px"
          >
            S
          </Button>{" "}
          <Button
            colorScheme="teal"
            variant="outline"
            borderRadius="50px"
            p="25px 20px"
            // #C7C8CC
            _hover={{ colorScheme: "red" }}
          >
            M
          </Button>{" "}
          <Button
            colorScheme="teal"
            variant="outline"
            borderRadius="50px"
            p="25px 20px"
          >
            L
          </Button>{" "}
          <Button
            colorScheme="teal"
            variant="outline"
            borderRadius="50px"
            p="25px 20px"
          >
            XL
          </Button>{" "}
        </HStack>
        <HStack pt={"15px"}>
          <Button
            {...font.smBold}
            bg={"#FE527A"}
            color={"white"}
            p={"27px 65px"}
          >
            <IconButton
              icon={<HiOutlineShoppingBag fontSize="1.2rem" />}
              aria-label=""
              title="bag"
              bg={"ghost"}
            />
            <Text {...font.smBold}>ADD TO BAG</Text>
          </Button>
          <Button bg={"#525767"} color={"white"} p={"27px 40px"}>
            {/* #525767 */}
            <IconButton
              p={"0"}
              m={"0"}
              icon={<CiHeart size={25} />}
              aria-label=""
              title="wishlist"
              bg={"ghost"}
            />
            <Text {...font.smBold}>WISHLIST</Text>
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default MainProdDetails;
