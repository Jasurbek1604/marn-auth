import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  gap: 20px;
`;
export const Center = styled.div`
  max-width: 850px;
  margin-top: 40px;
`;
export const Title = styled.div`
  color: black;
  font-size: 30px;
  font-weight: 600;
  line-height: 60px;
`;
export const Words = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  gap: 10px;
`;

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 6px;
  width: 400px;
  height: 40px;
  padding-left: 10px;
  font-size: 15px;
  outline: none;
  background: gainsboro;
  border: 1px solid gainsboro;
  border: none;
  &:focus {
    border: 1px solid rgb(0, 0, 150);
  }
`;

export const Button = styled.button`
  border-radius: 6px;
  width: 400px;
  height: 40px;
  border: none;
  text-transform: uppercase;
  font-size: 17px;
  background-color: ${({ google }) =>
    google ? "rgb(206, 0, 0)" : "rgb(0, 0, 150)"};
  color: #fff;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

export const Text = styled.div`
  color: ${({ red }) => red && "red"};
`;

export const Span = styled.span`
  color: blue;
  cursor: pointer;
  margin-left: 8px;
`;
