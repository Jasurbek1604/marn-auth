import React, { useState } from "react";
import { Button, Container, Input, Span, Title, Wrapper, Text } from "./style";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCHange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false);
      if (!data.succes) {
        setError(true);
        return;
      }
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <Container>
      <Wrapper onSubmit={handleSubmit}>
        <Title>Sing Up</Title>
        <Input onChange={handleCHange} placeholder="username" id="username" />
        <Input onChange={handleCHange} placeholder="email" id="email" />
        <Input onChange={handleCHange} placeholder="password" id="password" />
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
