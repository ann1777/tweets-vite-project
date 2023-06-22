import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { StyledHeader, StyledNav, StyledLink } from "./Layout.styled";
import { Loader } from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </StyledNav>
      </StyledHeader>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
