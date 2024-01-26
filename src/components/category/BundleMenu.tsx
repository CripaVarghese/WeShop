import { HStack, Checkbox, Text, Grid, GridItem } from "@chakra-ui/react";

const BundleMenu = ({ data }: any) => {
  return (
    <HStack
      position="absolute"
      top="100%"
      left="0"
      zIndex="1"
      backgroundColor="white"
      px="5px"
      pb="25px"
      boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
      gap={10}
    >
      <Grid templateColumns="repeat(8, 1fr)" width={"1150px"} gap={4}>
        {data.map((item: { label: string }) => (
          <GridItem>
            <Checkbox size="md" borderColor={"#C8C7CD"} colorScheme="red">
              <Text fontSize={"xs"}>{item.label}</Text>
            </Checkbox>
          </GridItem>
        ))}
      </Grid>
    </HStack>
  );
};

export default BundleMenu;
