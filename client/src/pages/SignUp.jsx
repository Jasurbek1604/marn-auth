import React from "react";
import { Button, Container, Input, Span, Title, Wrapper, Text } from "./style";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>Sing Up</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Button>Sign Up</Button>
        <Button google="true">Continue with google</Button>
        <Text>
          Have an account?{" "}
          <Span onClick={() => navigate("/signin")}>Sign In</Span>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
