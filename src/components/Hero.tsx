import { Box, Stack, Image, Grid, GridItem } from "@chakra-ui/react";
import hero_grid_data from "./hero_grid_data";

const Hero = () => {
  return (
    <Stack pt={"100px"} w={"100%"} alignItems={"center"}>
      <Image
        // width={"93%"}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/0f2b49dc-83f3-41d6-a534-7e2600c4060c1697639143412-MSB-Coupon--copy-3.jpg"
      />
      <Box display={"flex"}>
        <Image
          width={"50%"}
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/aff9e6bb-98ef-4b42-9be5-01ae5dc699261697628006821-Dussehra_HP_Banner_01.jpg"
        />
        <Image
          width={"50%"}
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/b0935e85-2661-4943-ad03-a787f8829bfa1697628006816-Dussehra_HP_Banner_02.jpg"
        />
      </Box>
      <Stack alignItems={"center"}>
        <Image src="https://assets.myntassets.com/f_webp,w_968,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/312d0046-3218-4e70-a358-02809d4ae0331697631911474-Festive-Crazy-Offers.jpg" />
        <Grid templateColumns="repeat(6, 1fr)">
          {hero_grid_data.grid_one.map((item) => (
            <GridItem>
              <Image src={item.link} />
            </GridItem>
          ))}
        </Grid>
        <Image
          mt={"0"}
          w={"93%"}
          src="https://assets.myntassets.com/f_webp,w_968,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/19/819918a3-e91b-49ce-bc09-7fba08bf227a1697697553126-1280x336--1-.jpg"
        />
      </Stack>
      <Stack alignItems={"center"}>
        <Image src="https://assets.myntassets.com/f_webp,w_968,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/231402ef-3a2b-4733-a353-602721696ebe1697631911484-Category-Specials.jpg" />
        <Grid templateColumns="repeat(6, 1fr)">
          {hero_grid_data.grid_two.map((item) => (
            <GridItem>
              <Image src={item.link} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
      <Grid templateColumns="repeat(5, 1fr)">
        {hero_grid_data.grid_three.map((item) => (
          <GridItem>
            <Image src={item.link} />
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)">
        {hero_grid_data.grid_four.map((item) => (
          <GridItem>
            <Image src={item.link} />
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns="repeat(7, 1fr)" w={{ lg: "80%", "2xl": "60%" }}>
        {hero_grid_data.grid_five.map((item) => (
          <GridItem>
            <Image src={item.link} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default Hero;
