import React from "react";
import { Container, Title, Input, Wrapper, Button, Text, Span } from "./style";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>SignIn</Title>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Button>Sign In</Button>
        <Button google="true">Countinue with google</Button>
        <Text>
          Don't have an account?{" "}
          <Span onClick={() => navigate("/signup")}>Sign Up</Span>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
