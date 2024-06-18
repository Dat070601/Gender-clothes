import { Box, Button, Image, Flex, Text, Badge, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';

const SmallMenu = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://1c23-118-69-62-49.ngrok-free.app/category/getList', {
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
          fetchTopRatings(data[0].Category_Id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    
    fetchCategories();
  }, []);

  const fetchTopRatings = async (categoryId) => {
    try {
      const response = await fetch(
        'https://1c23-118-69-62-49.ngrok-free.app/product/getTopRating',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category_id: categoryId,
          }),
        }
      );
      const data = await response.json();
      console.log('Products:', data);
      setProducts(data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchTopRatings(categoryId);
  };

  return (
    <Flex maxW="container.xl" mx="auto" p={5}>
      <VStack align="flex-start" w="200px" p={5} borderWidth="1px" borderRadius="lg" bg="white">
        {categories.map((category) => (
          <Button
            key={category.Category_Id}
            variant={selectedCategory === category.Category_Id ? 'solid' : 'ghost'}
            colorScheme={selectedCategory === category.Category_Id ? 'teal' : 'gray'}
            onClick={() => handleCategoryChange(category.Category_Id)}
            w="100%"
            textAlign="left"
          >
            {category.Name}
          </Button>
        ))}
      </VStack>
      <Box flex="1" mx="auto" mt="4">
        <Carousel>
          {products.map((product) => (
            <VStack key={product.Id} spacing="24px" alignItems={'center'} justifyContent={'center'}>
              <ProductCard product={product} />
            </VStack>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className={className}
      style={{ ...style, display: "block", background: "black", position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className={className}
      style={{ ...style, display: "block", background: "black", position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
      onClick={onClick}
    />
  );
};

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Box maxW="1250px" mx="auto" mt="4">
      <Slider {...settings}>
        {children}
      </Slider>
    </Box>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" width="250px" height="400px">
      <Image 
        src="https://salt.tikicdn.com/cache/750x750/ts/product/1c/9b/16/cba8a92606d3f41466c89d9f32b6dbe7.jpg.webp"
        alt={product.Name} 
        boxSize="200px"
        objectFit="cover"
      />      
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.Brand}
          </Badge>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {product.Name}
        </Box>
        <Box>
          {product.Price}
          <Box as="span" color="gray.600" fontSize="sm">
            {` - ${product.Discount_rate} off`}
          </Box>
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          <Text as="span" ml="2" color="gray.600" fontSize="sm">
            {product.Rating} stars
          </Text>
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          <Text as="span" ml="2" color="gray.600" fontSize="sm">
            Đã bán: {product.Sales} sản phẩm
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SmallMenu;
