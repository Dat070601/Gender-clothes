import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Flex align="center" justify="center" height="100vh" bg="gray.100">
      <Box bg="white" p={6} rounded="md" shadow="md" width="400px">
        <Heading mb={6} textAlign="center">Đăng nhập</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Mật khẩu</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full" mt={4}>
            Đăng nhập
          </Button>
        </form>
        <Text mt={4} textAlign="center">
        Chưa có tài khoản? <Link to="/signup" style={{ color: 'teal' }}>Đăng ký</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginForm;