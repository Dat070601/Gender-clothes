import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Phone:', phone);
  };

  return (
    <Flex align="center" justify="center" height="100vh" bg="gray.100">
      <Box bg="white" p={6} rounded="md" shadow="md" width="400px">
        <Heading mb={6} textAlign="center">Đăng ký</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="firstName" mb={4}>
            <FormLabel>Họ</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="lastName" mb={4}>
            <FormLabel>Tên</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormControl>
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
          <FormControl id="confirmPassword" mb={4}>
            <FormLabel>Nhập lại mật khẩu</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="phone" mb={4}>
            <FormLabel>Điện thoại</FormLabel>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full" mt={4}>
            Đăng ký
          </Button>
        </form>
        <Text mt={4} textAlign="center">
          Đã có tài khoản? <Link color="teal.500" to="/login">Đăng nhập</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default SignupForm;