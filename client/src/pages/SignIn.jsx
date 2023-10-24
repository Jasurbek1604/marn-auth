import React, { useRef } from "react";
import { Container, Title, Input, Wrapper, Button, Text, Span } from "./style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice.js";

const SignIn = () => {
  console.log("render signin");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwRef = useRef();
  const { error, loading } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: pwRef.current.value,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <Container>
      <Wrapper onSubmit={handleSubmit}>
        <Title>SignIn</Title>
        <Input ref={emailRef} id="email" placeholder="email" />
        <Input ref={pwRef} id="password" placeholder="password" />
        <Button disabled={loading}>{loading ? "...loading" : "Sing In"}</Button>
        <Button google="true">Countinue with google</Button>
        <Text>
          Don't have an account?{" "}
          <Span onClick={() => navigate("/signup")}>Sign Up</Span>
        </Text>
        <Text red="true">{error ? error || "Something went wrong!" : ""}</Text>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
