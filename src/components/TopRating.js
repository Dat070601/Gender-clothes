import React from 'react';
import { Box } from '@chakra-ui/react';
import ProductList from './ProductList';

const TopRating = () => (
  <Box as="section" id="Sales" py={20}>
    <Box maxW="container.xl" mx="auto">
      <ProductList />
    </Box>
  </Box>
);

export default TopRating;