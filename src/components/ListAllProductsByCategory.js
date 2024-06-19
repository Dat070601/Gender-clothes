import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Badge,
  SimpleGrid,
  Button,
  Flex,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ListProducts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 20;

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
          setSelectedCategory(data[0].Category_Id);
          fetchProducts(data[0].Category_Id, 1);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const fetchTotalProducts = async (categoryId) => {
    try {
      const response = await fetch(
        'http://localhost:8000/product/getTotalByCategory',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ category_id: categoryId }),
        }
      );
      const data = await response.json();
      setTotalProducts(data);
      const totalPages = Math.ceil(totalProducts / itemsPerPage)
      setTotalPages(totalPages);

    } catch (error) {
      console.error('Error fetching total products:', error);
    }
  };

  const fetchProducts = async (categoryId, page) => {
    try {
      const response = await fetch(
        'http://localhost:8000/product/getAllByCategory',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category_id: categoryId,
            page,
            limit: itemsPerPage,
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
    setCurrentPage(1);
    fetchTotalProducts(categoryId);
    fetchProducts(categoryId, 1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchProducts(selectedCategory, newPage);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <Flex>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} color="gold" />
        ))}
        {halfStar && <FaStarHalfAlt color="gold" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} color="gold" />
        ))}
      </Flex>
    );
  };

  console.log("....", products)

  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" height="60px">
        <Text fontSize={40} fontWeight={"bold"} color={"teal"}>Sản Phẩm</Text>
      </Flex>
      <Flex mx="auto" p={5} ml={10} bgColor={"#EDF2F7"} mr={10}>
        <Box>
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
        </Box>
        <Box flex="1" ml={10}>
          {Array.isArray(products) && products.length > 0 ? (
            <>
              <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="10px">
                {products.map((product) => (
                  <Box key={product.Product_ID} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
                    <Image src={product.Image} alt={product.Name} boxSize="200px" objectFit="cover" />

                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          {product.Brand}
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          {product.Category}
                        </Box>
                      </Box>

                      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                        {product.Name}
                      </Box>

                      <Box>
                        {product.Price}
                        <Box as="span" color="gray.600" fontSize="sm">
                          / {product.Discount_rate} off
                        </Box>
                      </Box>

                      <Box display="flex" mt={2} alignItems="center">
                        {renderStars(product.Rating)}
                        <Box as="span" ml={2} color="gray.600" fontSize="sm">
                          {product.Rating} stars
                        </Box>
                      </Box>

                      <Box d="flex" mt="2" alignItems="center">
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                          Đã bán: {product.Sales} sản phẩm
                        </Box>
                      </Box>

                      <Button
                        mt={4}
                        colorScheme="teal"
                        onClick={() => window.location.href = product.Link}
                      >
                        Xem chi tiết
                      </Button>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
              <Flex justifyContent="center" mt={5} alignItems="center">
                <Button
                  onClick={() => handlePageChange(currentPage - 1)}
                  isDisabled={currentPage === 1}
                  mr={2}
                >
                  Previous
                </Button>
                <Select value={currentPage} onChange={(e) => handlePageChange(Number(e.target.value))} mx={2} w={20}>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </Select>
                <Button
                  onClick={() => handlePageChange(currentPage + 1)}
                  isDisabled={currentPage === totalPages}
                  ml={2}
                >
                  Next
                </Button>
              </Flex>
            </>
          ) : (
            <Box>Không tìm thấy sản phẩm nào.</Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default ListProducts;
