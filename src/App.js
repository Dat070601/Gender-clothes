import React from 'react';
import { Box, Button, Flex, Heading, IconButton, Link, CloseButton,Text } from '@chakra-ui/react';
import { SiChatbot, SiGunicorn } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ColumnChart from './components/ColumnChart';
import Chat from './Chat';  
import { useState } from 'react';
import myLogo from "./asset/chatbot.jpg"

function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const sendMessage = (message) => {
    // Placeholder function to simulate sending a message to backend
    setMessages([...messages, { role: 'user', text: message }]);
    // You can implement actual logic here to send message to backend
  };

  return (
    <Box>
      <Box as="nav" bg="gray.800" color="white" p={4}>
        <Flex justify="space-between" align="center">
          <Link href="#home" fontSize="xl" fontWeight="bold">DecisionGenius</Link>
          <Box display={{ base: 'block', md: 'none' }} id="mobile-menu">
            <Box as="span" className="bar"></Box>
            <Box as="span" className="bar"></Box>
            <Box as="span" className="bar"></Box>
          </Box>
          <Flex as="ul" listStyleType="none" display={{ base: 'none', md: 'flex' }} align="center">
            <Box as="li" mx={2}>
              <Link href="#home">Trang chủ</Link>
            </Box>
            <Box as="li" mx={2}>
              <Link href="#Sales">Sales</Link>
            </Box>
            <Box as="li" mx={2}>
              <Link href="#Shipping">Regional Analysis</Link>
            </Box>
            <Box as="li" mx={2}>
              <Link href="#Products">Products</Link>
            </Box>
            <Box as="li" mx={2}>
              <Button as="a" href="/signup.html" colorScheme="teal">Đăng nhập</Button>
            </Box>
            <Box as="li" mx={2}>
              <IconButton
                aria-label="Toggle dark mode"
                icon={<SiGunicorn />}
                variant="outline"
                colorScheme="teal"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box as="section" id="home" bg="gray.100" py={20} textAlign="center">
        <Heading>Decision Genius</Heading>
        <Text fontSize="xl" mt={4}>Công cụ quyết định vượt trội cho thời trang</Text>
        <Button mt={8} colorScheme="teal" as="a" href="#Sales">Khám phá</Button>
      </Box>

      <Box as="section" id="Sales" py={20}>
        <Box maxW="container.xl" mx="auto">
          <iframe
            src="https://datavis-demoapp.herokuapp.com/public/dashboard/835960ba-0914-4fe6-8f6e-dbec70ec3227"
            frameBorder="0"
            width="100%"
            height="800"
            allowTransparency
          ></iframe>
        </Box>
      </Box>

      <Box as="section" id="Shipping" py={20}>
        <Box maxW="container.xl" mx="auto">
          <ColumnChart />
        </Box>
      </Box>

      <Box as="section" id="Products" py={20}>
        <Box maxW="container.xl" mx="auto">
          <iframe
            src="https://datavis-demoapp.herokuapp.com/public/dashboard/dea5d594-c6f3-40f3-9805-afc7075465f8"
            frameBorder="0"
            width="100%"
            height="800"
            allowTransparency
          ></iframe>
        </Box>
      </Box>
      {/* Chat Plugin */}
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        display={showChat ? 'block' : 'none'}
        boxShadow="0 2px 5px rgba(0, 0, 0, 0.2)"
        zIndex="1000"
      >
        <Box
          bg="gray.400"
          color="black"
          p={4}
          borderRadius="md"
        >
          <Flex justify="space-between" align="center">
            <Heading size="sm" color="black">Chatbot</Heading>
            <IconButton 
              aria-label="Close"
              icon= {<CloseButton/>}
              color="black"
              variant="ghost"
              onClick={toggleChat}
            />
          </Flex>
          {/* <Box mt={4} maxHeight="300px" overflowY="auto">
            {messages.map((msg, index) => (
              <Box key={index} textAlign={msg.role === 'user' ? 'right' : 'left'}>
                <Text fontSize="sm" p={2} borderRadius="md" bg={msg.role === 'user' ? 'teal.500' : 'gray.200'} color={msg.role === 'user' ? 'white' : 'black'}>{msg.text}</Text>
              </Box>
            ))}
          </Box> */}
          <Flex mt={2}>
            <Chat /> 
          </Flex>
        </Box>
      </Box>

      {/* Chat Plugin Button */}
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="1000"
      >
        <IconButton
          aria-label="Open chat"
          icon={<SiChatbot />}
          colorScheme="teal"
          onClick={toggleChat}
        />
      </Box>


      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Box maxW="container.xl" mx="auto" textAlign="center">
          <Box mb={4}>
            <Text>Tiến Chung</Text>
            <Flex justify="center" mt={2}>
              <Link href="https://www.linkedin.com/in/chung-h%C3%A0-7531032a3/" isExternal mx={2}>
                <FaLinkedin size="24" />
              </Link>
              <Link href="https://github.com/tienchungbk" isExternal mx={2}>
                <FaGithub size="24" />
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
