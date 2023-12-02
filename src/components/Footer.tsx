import {
  Stack,
  HStack,
  Text,
  Box,
  Image,
  IconButton,
  chakra,
} from "@chakra-ui/react";
import online_Data from "../footerData/online_Data";
import usefulLinks_Data from "../footerData/usefulLinks_Data";
import policy from "../footerData/policy_Data";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { fontStyle, footerStyles } from "../style";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      backgroundColor={"#FAFBFC"}
      w={"100%"}
      justifyContent={"center"}
    >
      <Stack
        py={"15"}
        // flexDirection={{ base: "column-reverse", lg: "row" }}
        flexDirection={"row"}
        justifyContent={"space-between"}
        w="75%"
      >
        <Stack
          // flexDirection={{ base: "column-reverse", lg: "row" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          w={{ base: "100%", sm: "27%" }}
        >
          <Stack
            mt={".4rem"}
            // flexDirection={{ base: "column-reverse", lg: "column" }}
            flexDirection={"column"}
          >
            <Stack display={{ base: "none", lg: "block" }}>
              <Text {...footerStyles.headingStyle}>ONLINE SHOPPING</Text>
              {online_Data.map((onlineData, onlineDataIndex) => (
                <Text key={onlineDataIndex} {...footerStyles.listItemStyle}>
                  {onlineData.label}
                </Text>
              ))}
            </Stack>
            <Stack>
              <Text {...footerStyles.headingStyle}>USEFUL LINKS</Text>
              <Stack
                // flexDirection={{ base: "row", lg: "column" }}
                flexDirection={"column"}
              >
                {usefulLinks_Data.map((linksData, linksDataIndex) => (
                  <Text key={linksDataIndex} {...footerStyles.listItemStyle}>
                    {linksData.label}
                  </Text>
                ))}
                //{" "}
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Text {...footerStyles.headingStyle}>CUSTOMER POLICIES</Text>
            <Stack
              // flexDirection={{ base: "row", lg: "column" }}
              flexDirection={"column"}
            >
              {policy.map((policyData, policyDataIndex) => (
                <Text key={policyDataIndex} {...footerStyles.listItemStyle}>
                  {policyData.label}
                </Text>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Stack
          flexDirection={"row"}
          // justifyContent={"space-between"}
          // w={{ base: "100%", lg: "69%" }}
          w={"70%"}
        >
          <Stack w={"45%"}>
            <Stack display={{ base: "none", lg: "block" }} spacing={0}>
              <Text {...footerStyles.headingStyle}>
                EXPERIENCE MYNTRA APP ON MOBILE
              </Text>
              <Stack
                flexDirection={"row"}
                w={"40%"}
                h={"50px"}
                gap={3}
                justifyContent={"space-between"}
              >
                <Image
                  marginTop={"0.5rem"}
                  src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                />
                <Image src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />
              </Stack>
            </Stack>
            <Stack spacing={0}>
              <Text {...footerStyles.headingStyle}>KEEP IN TOUCH</Text>
              <HStack>
                <IconButton
                  icon={<FaFacebookSquare size={"25px"} />}
                  variant={"link"}
                  aria-label={""}
                />
                <IconButton
                  icon={<FaTwitter size={"25px"} />}
                  variant={"link"}
                  aria-label=""
                />
                <IconButton
                  icon={<FaYoutube size={"29px"} />}
                  variant={"link"}
                  aria-label=""
                />
                <IconButton
                  icon={<ImInstagram size={"21px"} />}
                  variant={"link"}
                  aria-label=""
                />
              </HStack>
            </Stack>
          </Stack>

          <Stack w={"37%"} gap={"3"} display={{ base: "none", lg: "block" }}>
            <Stack flexDirection={"row"} gap={"4"}>
              <Image
                w={"48px"}
                h="40px"
                mt={"8px"}
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              />
              <Text {...footerStyles.listItemStyle}>
                <chakra.span color={"black"} {...fontStyle.smBold}>
                  100% ORIGINAL
                </chakra.span>{" "}
                guarantee for all products at myntra.com
              </Text>
            </Stack>
            <Stack flexDirection={"row"} gap={"4"}>
              <Image
                w={"48px"}
                h="40px"
                mt={"8px"}
                src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
              />
              <Text {...footerStyles.listItemStyle}>
                <chakra.span
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize={"sm"}
                >
                  Return within 14 days
                </chakra.span>{" "}
                of receiving your order
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
