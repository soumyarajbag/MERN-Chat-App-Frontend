import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");

  const postDetails = () => {};
  const submitHandler = () => {};
  return (
    <VStack spacing={"5px"}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Password"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              h="1.75rem"
              size={"sm"}
              onClick={() => {
                setShow(!show);
              }}
            >
              {!show ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Confirm Your Password"
            type={show ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              h="1.75rem"
              size={"sm"}
              onClick={() => {
                setShow(!show);
              }}
            >
              {!show ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Photo</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          value={pic}
          onChange={(e) => {
            postDetails(e.target.files[0]);
          }}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        className="mt-[15px] "
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
