import React, { useState, useRef } from "react";
import { Button, Container, Input, Span, Title, Wrapper, Text } from "./style";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const pwRef = useRef();
  const usrRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usrRef.current.value,
          email: emailRef.current.value,
          password: pwRef.current.value,
        }),
      });
      const data = await response.json();
      setLoading(false);
      setError(false);
      navigate("/signin");
      if (!data.succes) {
        setError(true);
        return;
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <Container>
      <Wrapper onSubmit={handleSubmit}>
        <Title>Sing Up</Title>
        <Input ref={usrRef} placeholder="username" id="username" />
        <Input ref={emailRef} placeholder="email" id="email" />
        <Input ref={pwRef} placeholder="password" id="password" />
        <Button disabled={loading}>{loading ? "...loading" : "Sing Up"}</Button>
        <Button google="true">Continue with google</Button>
        <Text>
          Have an account?{" "}
          <Span onClick={() => navigate("/signin")}>Sign In</Span>
        </Text>
        <Text red="true">{error && "Something went wrong!"}</Text>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
