import styled from "styled-components";

export const Container = styled.section`
  min-width: 480px;
  width: 100vh;
  margin: 0 auto;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
