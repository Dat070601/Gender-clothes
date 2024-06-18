import React from 'react';
import { Box, Select } from '@chakra-ui/react';
import ColumnChart from './ColumnChart';
import ProductTable from './ProductTable';

const data = [
    {
      "Product Type": "áo thun",
      "Gender": "nam",
      "Material": "unknown",
      "Color": "xanh",
      "Pattern": "họa tiết",
      "Trend": "unknown",
      "Rating": 5.0
    },
    {
      "Product Type": "áo thun",
      "Gender": "unisex",
      "Material": "unknown",
      "Color": "đen",
      "Pattern": "trơn",
      "Trend": "unknown",
      "Rating": 5.0
    },
    {
      "Product Type": "áo thun",
      "Gender": "nữ",
      "Material": "jeans",
      "Color": "trắng",
      "Pattern": "unknown",
      "Trend": "unknown",
      "Rating": 5.0
    },
    {
      "Product Type": "áo thun",
      "Gender": "unisex",
      "Material": "da",
      "Color": "nhiều màu",
      "Pattern": "trơn",
      "Trend": "unknown",
      "Rating": 5.0
    },
    {
      "Product Type": "áo thun",
      "Gender": "unisex",
      "Material": "cotton",
      "Color": "cam",
      "Pattern": "trơn",
      "Trend": "mùa hè",
      "Rating": 4.9
    },
    {
      "Product Type": "áo thun",
      "Gender": "unisex",
      "Material": "cotton",
      "Color": "xanh",
      "Pattern": "trơn",
      "Trend": "unknown",
      "Rating": 4.9
    },
    {
      "Product Type": "áo thun",
      "Gender": "unisex",
      "Material": "unknown",
      "Color": "nhiều màu",
      "Pattern": "trơn",
      "Trend": "unknown",
      "Rating": 4.9
    },
    {
      "Product Type": "áo thun",
      "Gender": "nam",
      "Material": "unknown",
      "Color": "cam",
      "Pattern": "sọc",
      "Trend": "unknown",
      "Rating": 4.8
    }
  ];

const Statistics = () => (
  <Box as="section" id="Shipping" py={20} backgroundColor={"black.100"}>
    <Box maxW="container.xl" mx="auto">
      <Select placeholder='Select option' w={150} mb={30}>
        <option value="giay">Giay</option>
        <option value="dep">Dep</option>
      </Select>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
        <Box flex={1}>
          <ColumnChart />
        </Box>
        <Box flex={1}>
          <ProductTable data={data} />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Statistics;
