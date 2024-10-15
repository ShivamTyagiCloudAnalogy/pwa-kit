import React from 'react'
import {Box, Flex, Text} from '@chakra-ui/react'
import Link from '@salesforce/retail-react-app/app/components/link'
const BannerWithImage = () => {
    return (
        <Link to="/category/womens" bg="teal.200">
            <Box py={4} maxH="150px" overflow="hidden" bg="lightblue">
                <Flex maxW="1200px" mx="auto" align="center" justify="center" position="relative">
                    <Text fontSize="2xl" fontWeight="bold" color="black">
                        Flash Sale on Women's Clothes. Up to 50% Off.
                    </Text>
                </Flex>
            </Box>
        </Link>
    )
}

export default BannerWithImage
