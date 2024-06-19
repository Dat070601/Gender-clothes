import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import { URL } from '../constant';

const ProductTable = ({ categoryId }) => {
  const [features, setFeatures] = useState([]);

  const fetchFeatures = async (categoryId) => {
    try {
      const response = await fetch(
        `${URL}/product/getTopFeature`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category_id: categoryId
          }),
        }
      );
      const responseData = await response.json();
      console.log('Features:', responseData);
      
      const transformedData = transformData(responseData);
      setFeatures(transformedData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchFeatures(categoryId);
    }
  }, [categoryId]);

  const transformData = (data) => {
    const keys = Object.keys(data["Product Type"]);
    return keys.map((key) => ({
      "Product Type": data["Product Type"][key],
      Gender: data.Gender[key] === "unknown" ? "_" : data.Gender[key],
      Material: data.Material[key] === "unknown" ? "_" : data.Material[key],
      Color: data.Color[key] === "unknown" ? "_" : data.Color[key],
      Pattern: data.Pattern[key] === "unknown" ? "_" : data.Pattern[key],
      Trend: data.Trend[key] === "unknown" ? "_" : data.Trend[key],
      Rating: data.Rating[key],
    }));
  };

  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Loại sản phẩm</Th>
            <Th>Giới tính</Th>
            <Th>Chất liệu</Th>
            <Th>Màu</Th>
            <Th>Pattern</Th>
            <Th>Đánh giá</Th>
          </Tr>
        </Thead>
        <Tbody>
          {features.map((item, index) => (
            <Tr key={index}>
              <Td>{item["Product Type"]}</Td>
              <Td>{item.Gender}</Td>
              <Td>{item.Material}</Td>
              <Td>{item.Color}</Td>
              <Td>{item.Pattern}</Td>
              <Td>{item.Rating}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductTable;
