import { Stack, Text, Box, Image, IconButton } from "@chakra-ui/react"
import online_Data from "../footerData/online_Data"
import usefulLinks_Data from "../footerData/usefulLinks_Data"
import policy from "../footerData/policy_Data"
import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'

const Footer = () => {
  
  return (
    <Box display={'flex'} backgroundColor={'#FBFAFC'} w={'100%'} justifyContent={'center'} >
      <Stack w={'80%'} py={'15'} flexDirection={'row'} >
        <Stack>
          <Stack>
            <Text fontSize={'11'} fontWeight={'bold'}>ONLINE SHOPPING</Text>
            {online_Data.map((onlineData) => 
              <Text color={'#7A7C88'} fontSize={'sm'}>{onlineData.label}</Text>
            )}
          </Stack>
          <Stack>
            <Text>USEFUL LINKS</Text>
            {usefulLinks_Data.map((linksData) => 
              <Text>{linksData.label}</Text>
            )}
          </Stack>
        </Stack>

        <Stack>
              <Text>CUSTOMER POLICIES</Text>
              {policy.map((policyData) => 
                <Text>{policyData.label}</Text>
              )}
        </Stack>

        <Stack>
          <Text>EXPERIENCE MYNTRA APP ON MOBILE</Text>
          <Stack>
            <Image
            src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
            />
            <Image
            src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
            />
          </Stack>
          <Stack>
          <Text>KEEP IN TOUCH</Text>
          <Stack flexDirection={'row'}>
            <IconButton icon={<FaFacebookSquare />} variant={'link'} aria-label={""} />
            <IconButton icon={<FaTwitter />} variant={'link'}  aria-label=""  /> 
            <IconButton icon={<FaYoutube />} variant={'link'}  aria-label=""  /> 
            <IconButton icon={<ImInstagram />} variant={'link'}  aria-label=""  /> 
          </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Stack flexDirection={'row'}>
            <Image
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              />
            <Text>100% ORIGINAL guarantee for all products at myntra.com</Text>
          </Stack>
          <Stack flexDirection={'row'}>
            <Image
              src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
              />
            <Text>Return within 14days of receiving your order</Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
)}

export default Footer