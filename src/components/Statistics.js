import { Box, Flex, Select, Text } from '@chakra-ui/react';
import ColumnChart from './ColumnChart';
import ProductTable from './ProductTable';
import React, { useEffect, useState } from 'react';
import { URL } from '../constant';
import { CalendarIcon, StarIcon } from '@chakra-ui/icons';

const Statistics = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${URL}/category/getList`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log('Categories:', data);
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0].Category_Id); // Set the first category as the default value
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Box as="section" id="Shipping" py={20}>
      <Flex justifyContent="center" alignItems="center" height="60px" gap={5} mb={3}>
        <Text fontSize={40} fontWeight={"bold"} color={"teal"}>Thống kê</Text>
        <CalendarIcon w={10} h={10} color="blue.500" />
      </Flex>
      <Box maxW="80%" mx="auto">
        <Flex justifyContent="center" mb={30}>
          <Select value={selectedCategory} w={150} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category.Category_Id} value={category.Category_Id}>
                {category.Name}
              </option>
            ))}
          </Select>
        </Flex>
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={10}>
          <Box flex={1}>
            <ColumnChart categoryId={selectedCategory} />
          </Box>
          <Box flex={1}>
            <ProductTable categoryId={selectedCategory} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Statistics;
