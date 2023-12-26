import { Grid, GridItem, Image, Stack } from "@chakra-ui/react";

const ImageDetails = ({ data }: any) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={3} key={data.id}>
      {data.map((item: { id: number; url: string | undefined }) => (
        <Stack key={item.id}>
          <GridItem>
            <Image src={item?.url} />
          </GridItem>
        </Stack>
      ))}
    </Grid>
  );
};

export default ImageDetails;
