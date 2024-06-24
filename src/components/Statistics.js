import { Box, Flex, Select, Text, Textarea } from '@chakra-ui/react';
import ColumnChart from './ColumnChart';
import ProductTable from './ProductTable';
import React, { useEffect, useState, useRef } from 'react';
import { URL } from '../constant';
import { CalendarIcon, StarIcon } from '@chakra-ui/icons';

const Statistics = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [textareaValue, setTextareaValue] = useState("Tiếp tục tập trung vào các chất liệu như len, denim, linen và cotton.\nMở rộng bảng màu với các gam màu tươi sáng và trung tính.\nĐa dạng hóa thiết kế với các sản phẩm có họa tiết và trơn.\nTiếp tục phát triển các sản phẩm unisex để mở rộng đối tượng khách hàng");
  const textareaRef = useRef(null);
  const [selectedMonth, setSelectedMonth] = useState(''); 

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
          setSelectedCategory(data[0].Category_Id); 
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

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [textareaValue]);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value); // Update selectedMonth state when month selection changes
  };

  return (
    <Box as="section" id="Shipping" py={20}>
      <Flex justifyContent="center" alignItems="center" height="60px" gap={5} mb={3}>
        <Text fontSize={40} fontWeight={"bold"} color={"teal"}>Thống kê</Text>
        <CalendarIcon w={10} h={10} color="blue.500" />
      </Flex>
      <Box maxW="80%" mx="auto">
        <Flex justifyContent="center" mb={5}>
          <Select value={selectedCategory} w={150} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category.Category_Id} value={category.Category_Id}>
                {category.Name}
              </option>
            ))}
          </Select>
        </Flex>
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={10} mb={10}>
          <div style={{ marginBottom: '10px' }}>
          <label htmlFor="monthSelect">Chọn tháng:</label>
          <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
            <option value="">Chọn tháng</option>
            <option value="01">Tháng 1</option>
            <option value="02">Tháng 2</option>
            <option value="03">Tháng 3</option>
            {/* Add other months as needed */}
          </select>
        </div>
          <Box flex={1}>
            <ColumnChart categoryId={selectedCategory} />
          </Box>
          <Box flex={1}>
            <ProductTable categoryId={selectedCategory} />
          </Box>
        </Box>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Text fontSize={30} fontWeight={"bold"} mb={4} color={"teal"}>Gợi ý xu hướng thời trang tiếp theo:</Text>
          <Textarea
            ref={textareaRef}
            placeholder='Here is a sample placeholder'
            size='lg'
            isDisabled
            value={textareaValue}
            borderColor={"red.500"}
            onChange={(e) => setTextareaValue(e.target.value)}
            sx={{
              fontWeight: 'bold', 
              color: 'black',
              overflow: 'hidden', // Ẩn thanh cuộn
              '::-webkit-scrollbar': {
                display: 'none', // Ẩn thanh cuộn cho trình duyệt Webkit (Chrome, Safari)
              },
            }}
            maxW={"50%"}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Statistics;