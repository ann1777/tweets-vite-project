import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { StyledHeader, StyledNav, StyledLink } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </StyledNav>
      </StyledHeader>
      <Suspense>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
