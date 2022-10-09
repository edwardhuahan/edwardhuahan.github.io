import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import './Landing.css';

export default function Landing() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
      <Flex p={8} flex={1} mt={100} ml={{base: 0, md: "15%"}} align={{base: "center", md: "start"}} justify={{base: "center", md:"left"}}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }}>
            <Text as={"span"} position={"relative"}>
              Hi, I'm Edward <img id={"smile"} width={34} src="assets/smile.svg"></img>
            </Text>
            <br />{" "}
          </Heading>
          <Text 
            fontWeight={"semibold"}

            fontSize={{ base: "md", lg: "lg" }}
          >
            I'm a computer science student at the University of Toronto and a Project Manager (former dev) at UofT Blueprint. We're a team of students that help non-profits by developing free and open source solutions. 
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
