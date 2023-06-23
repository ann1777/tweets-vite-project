import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  PageContainer,
  StyledHeader,
  StyledNav,
  StyledLink,
} from "./Layout.styled";
import { Loader } from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <PageContainer>
        <StyledHeader>
          <StyledNav>
            <StyledLink to="/tweets-vite-project/">Home</StyledLink>
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
      </PageContainer>
    </>
  );
};

export default Layout;
