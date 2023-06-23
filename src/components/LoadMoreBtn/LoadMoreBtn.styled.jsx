import styled from "styled-components";

export const BtnLoadMore = styled.button`
  margin: 10px auto;
  padding: 8px 16px;
  border-radius: 5px;
  /* background-color: #d318ff; */
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  background: linear-gradient(
    114.99deg,
    #471ca9 100%,
    #5736a3 100%,
    #4b2a99 100%
  );
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 130px;
  border-radius: 10px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    scale: 1.05;
    box-shadow: 10px 10px 5px -1px rgba(87, 190, 230, 0.2);
  }
`;
