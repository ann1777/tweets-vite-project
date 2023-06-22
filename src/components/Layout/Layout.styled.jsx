import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-bottom: 20px;
  background-color: #5cd3a8;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  > nav {
    display: flex;
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const StyledNav = styled.ul`
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: 700;
`;
