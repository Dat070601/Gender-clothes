import React from 'react';
import { Box, Image, Text, Badge, SimpleGrid, Button, Flex } from '@chakra-ui/react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const products = [
  {
    Id: "66604a8615910ccbd4e48f3a",
    Product_ID: 274718589,
    Name: "Áo Thun Nam Ngắn Tay 5S FASHION, Chất Cotton Mềm Mát, Thiết Kế Khỏe Khoắn, In Trẻ Trung, Năng Động (ATS24045)",
    Brand: "5S",
    Price: "139.000₫",
    Discount_rate: "33%",
    Sales: "11",
    Rating: 4.3,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/36/48/e6/f4ffdecc61abce770684b0f21a4164dd.jpg.webp",
    Link: "https://tka.tiki.vn/pixel/pixel?data=uoHaSzxHnLczJgyCORWezS82Y9TWpBJU5UkIwpIM1nJtoOi4Y0ajvbl9U37qzdLD_FO6Cj7oWRtEcK7RJBP7_PXYf1quG3mfVoZn5VZRnaAok8gQTm2-bY0IAR0QjAeLK-76pMJMr8Wvbkb-xMRo6L6xPpp8EaM63pEXz68bUc8tbjkqzPgMl-LJUKoI_1PtF17OWm_Nw9dVq6csh1n2acBDxfoIZXE8zXTQZHpE6BiX8t7OFe17E9vmrKVqSJudRhVr5IKWZ5r1jJIsWX1BpS6cUB1ncyjWE_0SltaSfdjsMpwAp73Bx9bANBTqJ_h4imd_Jkq_jXMAafIV5TdFtHdHMbAptkYTc-k8H1_KxrG5ckyeUquvtSY7VwrYbYxbbCNzl_O93LY6lwrq-iaN5TUK8CO3wp2XgQ7euiisFyzRAWafla8BmpPcWz6_yzoWhMH3bk7kT3hDautYMYH0__c7-jyMmLH1UlofrswAIytpnzmSvvlsJR-Y9W1i2ZCGnBs5XTh-ZAbQwlowa0p_A5z8EJtbjGRCPOCHGI5RE65b_F8WMvWsQWzB8lZXxl1k4KYt9nzQbW6acnfeQJr2ggm9FA2zXKZY6QLA4Q9P0WIllZWlGgKEBUvxisK07_A_DCtarMg1vQn48s1UtkdOrYXKnzjf85A4Oe3tZRMb58VGhpDeL-BaFe1oTXX4ACDw0b2irtnQ9A2YhJXRVGpLBKyiWBX9Un89ZauwZQxDPDurYdmhI0QHwelbQJlr6DF3sqtAEry5bB7sRolmZFjCgFTTGzBY3udzhtAZbLRyNIfPg4Bh9zVGFntGGfvXc8VXFqau1k-38ODj01da4MkV3WdTWiTOKf92UNe8UBas8ZCHHWR73mmox2PDmdZjOKj65lS2DXuYZX3I6lCuPaSimFhvvvKGY77con1zh8caE_r25o0-acRWxGuOqYN_G7u4wZ45Va_dWFhWqLF74thTNPCzdLf0GvoBbNOfWx6FF_EnnWrheE3puUHnnDwEL1q3HRNeEcIsh1gsisBH3KvjxTvAFr8hHQ1D6pVyCG8OeoDQEdO2lXjt5dvc53BRRx3OM4ElG5tlazXRkG3fdu9vH7HRn6E4bQi9nBNxt0C_vNSfVfIJnVWDXGvfi6MNgYMLtg&reqid=Nct3EwfrVilK2AqS&type=CLICK&pos=4",
    DateTime: "2024-06-05T18:22:46.998Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3b",
    Product_ID: 138748093,
    Name: "Áo thun nam cổ tim ngắn tay đẹp nhiều màu đủ size ( có size lớn cho người 100 kg )",
    Brand: "OEM",
    Price: "89.000₫",
    Discount_rate: "10%",
    Sales: "346",
    Rating: 4.2,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/07/76/bd/9e4c38b7af8807a44127f7b404cc8083.jpg.webp",
    Link: "https://example.com/product/138748093",
    DateTime: "2024-06-05T18:22:47.114Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3c",
    Product_ID: 74493672,
    Name: "[ Có Ảnh Thật ] Áo thun trơn tay lỡ form rộng unisex - Phông trơn",
    Brand: "OEM",
    Price: "69.000₫",
    Discount_rate: "45%",
    Sales: "144",
    Rating: 5,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/3f/11/62/3dc260b0f407dcf1bb40ac401ec84e86.jpg.webp",
    Link: "https://example.com/product/74493672",
    DateTime: "2024-06-05T18:22:47.214Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3d",
    Product_ID: 176251118,
    Name: "Combo 2 Áo thun nam Cotton Compact Premium trẻ trung thấm hút mồ hôi, co giãn 4 chiều MRM Manlywear",
    Brand: "MRM MANLYWEAR",
    Price: "279.000₫",
    Discount_rate: "44%",
    Sales: "511",
    Rating: 4.8,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/1c/9b/16/cba8a92606d3f41466c89d9f32b6dbe7.jpg.webp",
    Link: "https://example.com/product/176251118",
    DateTime: "2024-06-05T18:22:47.347Z"
  }
];

const ListProducts = () => {
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
  return (
    <Box maxW="container.xl" mx="auto" p={5}>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {products.map(product => (
          <Box key={product.Id} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
            <Image src={product.Image} alt={product.Name} />

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

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
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
    </Box>
  );
};

export default ListProducts;