import { Box, Stack, Image, Grid, GridItem } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack pt={"100px"} w={"100%"} alignItems={"center"}>
      <Image
        width={"93%"}
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
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/0ad75db8-98f7-4197-b70b-feb1251879e91697616839441-image_png_1590114644.png" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/16/a4959e60-008e-4296-8118-f25eb689e0511697433850966-Virat-s_Favourite_picks___Min_50_Off-_Wrogn.png" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/58b6b798-cb27-48be-abdb-3a1b72fe49f61697616807624-image_png1095393548.png" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/4ba6c4ec-6254-490e-bd67-fed3cef2a3cf1697616142067-image_jpeg629825908.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/16/0ccdd5af-1fd5-4e2f-8c00-06f478b2bc171697433850788-HOP_anouk_-_More_Min_65.png" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/16/ab8f9d3e-3c0e-4bf7-90c0-ff2c65a7d2a61697433850936-TASVA_FLAT_50.png" />
          </GridItem>
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
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_161,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/533591ee-3135-49e1-bbfe-e02d2ef8a2111697628363149-Shop-by-Category_HP_02.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_161,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/d6d099e6-3973-41f9-9476-e368e90eb2f91697628363002-Shop-by-Category_HP_03.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/677ecf11-ca62-4efc-ad40-268a6968c80f1697628363093-Shop-by-Category_HP_04.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/79699158-f1bf-4dc1-9549-5bf8026677c11697628363112-Shop-by-Category_HP_05.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/a99207a7-0076-4f32-abb2-d6c437f0ea601697628363167-Shop-by-Category_HP_06.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/a0c537bb-21d8-47c6-a5e3-62f7480cc30b1697628363058-Shop-by-Category_HP_07.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/7d5eadbf-0c59-49f3-9f4b-dcf0b7962d881697628363188-Shop-by-Category_HP_08.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/86362de7-5c78-4c8f-91bf-e161461836bf1697628363081-Shop-by-Category_HP_09.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/aea7826e-50d6-4acc-8140-2bc2a9ec75dc1697628363228-Shop-by-Category_HP_10.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/789aa094-5bd8-4466-a835-75d1dd3a77e21697628363014-Shop-by-Category_HP_11.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/aba4bed9-154c-41b4-8337-5b79cff172071697628363177-Shop-by-Category_HP_12.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/55e5b3ef-aaac-4011-bcd6-40fa85245d161697628363200-Shop-by-Category_HP_13.jpg" />
          </GridItem>
        </Grid>
      </Stack>

      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/eb639c23-07c7-470e-b992-fb4304b18e391697628363209-Shop-by-Category_HP_14.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/f88c3e98-2052-4b42-acf2-336aab7fd6ea1697628363288-Shop-by-Category_HP_15.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/f9c77b86-b6a0-49c9-af32-d7f7321b9db71697628363394-Shop-by-Category_HP_16.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/0113c73a-78bb-4384-b43a-e4cce3a49bb21697628363025-Shop-by-Category_HP_17.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/4c7c2415-9bba-449d-9319-f03d8d9ceee31697628363298-Shop-by-Category_HP_19.jpg" />
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/1692e82a-772d-41cf-adb5-3d35be3a231f1697628363138-Shop-by-Category_HP_20.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/7485a4ca-467c-441d-b8cb-f2c8331520d01697628363070-Shop-by-Category_HP_21.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/cf3d3b80-8e6e-4fc9-8f66-3e0cffe7bf3d1697628363049-Shop-by-Category_HP_22.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/57ffec14-ace3-470c-a473-d12aa736d8891697628363103-Shop-by-Category_HP_23.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/657cbeb0-87d1-40da-908c-dc7d317d93c51697628363342-Shop-by-Category_HP_24.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/fbc591dd-393f-4958-a568-dbdcf187dec11697628363267-Shop-by-Category_HP_25.jpg" />
        </GridItem>

        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/0625cd60-f98d-40f6-a874-1e63ec1ce4e11697628363258-Shop-by-Category_HP_26.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/6d6bf582-e96d-452d-8236-5c2e952cc20f1697628363331-Shop-by-Category_HP_27.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/b3395115-e884-489b-851b-3c2b5bf783861697628363353-Shop-by-Category_HP_28.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/f1dbb9fd-7def-4cc9-85d3-fb79d2f44add1697628363126-Shop-by-Category_HP_29.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/87fd621d-7678-4bf5-a588-b9c37df3dcfa1697628363383-Shop-by-Category_HP_30.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/805cd8bd-747b-4e74-bb79-deb3d58877461697628363276-Shop-by-Category_HP_31.jpg" />
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(7, 1fr)" w={"85%"}>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/3712022d-70c0-4ff8-9aa0-f3c09123de201697628363363-Shop-by-Category_HP_32.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/1f98dcd1-1d1c-441f-a47d-3113f7feae371697628363157-Shop-by-Category_HP_33.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/8105bc3c-e539-4c95-bce9-e3867ec974d81697628363316-Shop-by-Category_HP_34.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/f6cf2a65-ac58-487d-bf8a-5273ce544fac1697628363307-Shop-by-Category_HP_35.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/f66533e0-2c2e-4db3-a245-cd9723f4065b1697628363238-Shop-by-Category_HP_36.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/aaf7284e-1ca4-4ded-9e56-9baa4515d7301697628363036-Shop-by-Category_HP_37.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/be3496ee-34bb-4fcc-84cb-26fa9e1f06061697628363248-Shop-by-Category_HP_38.jpg" />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Hero;
