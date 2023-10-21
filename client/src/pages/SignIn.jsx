import React, { useState } from "react";
import { Container, Title, Input, Wrapper, Button, Text, Span } from "./style";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (!data.success) {
        setError(true);
        return;
      }
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <Container>
      <Wrapper onSubmit={handleSubmit}>
        <Title>SignIn</Title>
        <Input onChange={handleChange} id="email" placeholder="email" />
        <Input onChange={handleChange} id="password" placeholder="password" />
        <Button disabled={loading}>{loading ? "...loading" : "Sing In"}</Button>
        <Button google="true">Countinue with google</Button>
        <Text>
          Don't have an account?{" "}
          <Span onClick={() => navigate("/signup")}>Sign Up</Span>
        </Text>
        <Text red="true">{error && "Something went wrong!"}</Text>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
