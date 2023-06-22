import { StyledLogo, WelcomeMsg, StyledHome } from "./HomePage.styled";
import logo from "../../images/logo.png";
const HomePage = () => {
  return (
    <main>
      <StyledHome>
        <WelcomeMsg>Welcome to the Tweets Cards App!</WelcomeMsg>
        <StyledLogo src={logo} alt="logo" />
      </StyledHome>
    </main>
  );
};

export default HomePage;
