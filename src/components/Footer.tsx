import { Stack, HStack, Text, Box, Image, IconButton } from "@chakra-ui/react"
import online_Data from "../footerData/online_Data"
import usefulLinks_Data from "../footerData/usefulLinks_Data"
import policy from "../footerData/policy_Data"
import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { footerStyles } from "../style"
 
const Footer = () => {
  
  return (
    <Box display={'flex'} backgroundColor={'#FBFAFC'} w={'100%'} justifyContent={'center'}>
      <Stack w={'75%'} py={'15'} flexDirection={'row'} justifyContent={'space-between'}>

        <Stack flexDirection={'row'} justifyContent={'space-between'} w={'27%'}>
          <Stack mt={'.4rem'}>
            <Stack>
              <Text {...footerStyles.headingStyle}>ONLINE SHOPPING</Text>
              {online_Data.map((onlineData) => 
                <Text {...footerStyles.listItemStyle}>{onlineData.label}</Text>
              )}
            </Stack>
            <Stack gap={'0'}>
              <Text {...footerStyles.headingStyle}>USEFUL LINKS</Text>
              {usefulLinks_Data.map((linksData) => 
              <Text  {...footerStyles.listItemStyle}>{linksData.label}</Text>
              )}
            </Stack>
          </Stack>

          <Stack>
                <Text {...footerStyles.headingStyle}>CUSTOMER POLICIES</Text>
                {policy.map((policyData) => 
                  <Text {...footerStyles.listItemStyle}>{policyData.label}</Text>
                )}
          </Stack>
        </Stack>


        <Stack flexDirection={'row'} w={'69%'}>          
          <Stack w={'40%'}>
            <Stack>
              <Text {...footerStyles.headingStyle}>EXPERIENCE MYNTRA APP ON MOBILE</Text>
              <Stack flexDirection={'row'}>
                <Image
                marginTop={'0.5rem'}

                w={'20%'}
                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                />
                <Image
                w={'25%'}
                // marginTop={'0rem'}
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                />
              </Stack>
            </Stack>
            <Stack>
              <Text {...footerStyles.headingStyle}>KEEP IN TOUCH</Text>
              <HStack>
                <IconButton icon={<FaFacebookSquare />} variant={'link'} aria-label={""} />
                <IconButton icon={<FaTwitter />} variant={'link'}  aria-label=""  /> 
                <IconButton icon={<FaYoutube />} variant={'link'}  aria-label=""  /> 
                <IconButton icon={<ImInstagram />} variant={'link'}  aria-label=""  /> 
              </HStack>
            </Stack>
          </Stack>

          <Stack w={'40%'}>
            <Stack flexDirection={'row'}>
              <Image
                boxSize={'14'}
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                />
              <Text>100% ORIGINAL guarantee for all products at myntra.com</Text>
            </Stack>
            <Stack flexDirection={'row'}>
              <Image
              boxSize={'14'}
                src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                />
              <Text>Return within 14days of receiving your order</Text>
            </Stack>
          </Stack>
        </Stack>

      </Stack>
    </Box>
)}

export default Footer