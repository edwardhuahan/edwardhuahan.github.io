import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Landing() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
      <Flex p={8} flex={1} mt={100} ml={{base: 0, md: "15%"}} align={{base: "center", md: "start"}} justify={{base: "center", md:"left"}}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }}>
            <Text as={"span"} position={"relative"}>
              Hi, I'm Edward 🇨🇦
            </Text>
            <br />{" "}
          </Heading>
          <Text 
            fontWeight={"semibold"}

            fontSize={{ base: "md", lg: "lg" }}
          >
            I'm a computer science student at the University of Toronto, I have great interest in full stack development, artificial intelligence, game development, and all things computers :)
          </Text>
          <Link
            href={"mailto:edwardhuahan@gmail.com"}
            fontSize={{ base: "md", lg: "lg" }}
            fontWeight={"semibold"}
            color={linkColor}
            textDecorationLine={"underline"}
            textUnderlineOffset={10}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            edwardhuahan@gmail.com
          </Link>
        </Stack>
      </Flex>
  );
}
