import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
  showProfileData: boolean;

}

export function Profile({showProfileData = true}: ProfileProps) {
  return( 
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jefferson Shibuya</Text>
          <Text color="gray.300" fontSize="small">jeffersonshibuya@yahoo.com.br</Text>
        </Box>
      )}
      
      <Avatar size="md" name="Jefferson Shibuya" src="https://avatars.githubusercontent.com/u/10772632?v=4"/>
    </Flex>
  )
}