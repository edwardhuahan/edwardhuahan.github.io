import { Box, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Image } from '@chakra-ui/react'

export default function Portfolio() {


  return (
    <Box mt={100} ml={{base: 0, md: "15%"}} mr={{base: 0, md: "15%"}}>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <Box bg="grey" height="20rem"
            _hover={{
                textDecoration: "none",
                backgroundColor: "black",
            }}
        >
            <Link
                href={"https://github.com/uoftblueprint/the-period-purse"}
            >
                <Image width={"100%"} height={"100%"} objectFit={"cover"} src="assets/tpp.png" alt='The Period Purse' />
            </Link>
        </Box>
        <Box bg="grey" height="20rem">
            <Link
                href={"https://edwardhan.ca/atomic-model/"}
            >
                <Image width={"100%"} height={"100%"} objectFit={"cover"} src="assets/atomic-model.png" alt='Atomic Model' />
            </Link>
        </Box>
        <Box bg="grey" height="20rem">
            <Link
                href={"https://github.com/edwardhuahan/csc110-project"}
            >
                <Image width={"100%"} height={"100%"} objectFit={"cover"} src="assets/csc110.png" alt='Sentiment Analysis' />
            </Link>
        </Box>
        <Box bg="grey" height="20rem">
            <Link
                href={"https://github.com/edwardhuahan/little-planet"}
            >
                <Image width={"100%"} height={"100%"} objectFit={"cover"} src="assets/little-planet.png" alt='Little Planet' />
            </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
