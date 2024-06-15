import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

const ProductTable = ({ data }) => {
  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Product Type</Th>
            <Th>Gender</Th>
            <Th>Material</Th>
            <Th>Color</Th>
            <Th>Pattern</Th>
            <Th>Trend</Th>
            <Th>Rating</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item["Product Type"]}</Td>
              <Td>{item.Gender}</Td>
              <Td>{item.Material}</Td>
              <Td>{item.Color}</Td>
              <Td>{item.Pattern}</Td>
              <Td>{item.Trend}</Td>
              <Td>{item.Rating}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductTable;