import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer position="top-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
