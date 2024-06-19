import { Box, Select } from '@chakra-ui/react';
import ColumnChart from './ColumnChart';
import ProductTable from './ProductTable';
import React, { useEffect, useState } from 'react';

const Statistics = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8000/category/getList', {
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
    <Box as="section" id="Shipping" py={20} backgroundColor="black.100">
      <Box maxW="container.xl" mx="auto">
        <Select value={selectedCategory} w={150} mb={30} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.Category_Id} value={category.Category_Id}>
              {category.Name}
            </option>
          ))}
        </Select>
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
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
