import styled from "styled-components";

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackBtn = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
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

export const UserList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;

  gap: 30px;
  list-style: none;

  @media screen and (min-width: 728px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const UserCard = styled.li`
  position: relative;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
