import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const common = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${common};
  justify-content: space-between;
  background: gainsboro;
  height: 70px;
`;
export const Center = styled.div`
  ${common};
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
`;
export const Logo = styled.div`
  font-size: 25px;
  font-weight: 600;
`;
export const Nav = styled.div`
  ${common};
  gap: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 400;
`;
