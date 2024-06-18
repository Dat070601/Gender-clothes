import React from 'react';
import { Box } from '@chakra-ui/react';
import ListProducts from './ListAllProductsByCategory';

const ProductListPage = () => (
  <Box as="section" id="ListProducts" py={20}>
    <ListProducts />
  </Box>
);

export default ProductListPage;