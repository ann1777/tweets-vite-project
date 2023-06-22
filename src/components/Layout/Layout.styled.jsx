import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  width: 100vh;
  /* display: flex; */
  justify-content: center;
  padding: 8px 16px;
  margin: 0 auto;
  margin-bottom: 20px;
  /* background-color: #5cd3a8; */
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  > nav {
    display: flex;
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    max-width: 100vh;
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    /* max-width: 100hv; */
    width: 100vh;
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

  &.active {
    color: white;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
  }
`;
