import styled from "@emotion/styled";
import { BiFilterAlt } from "react-icons/bi";

export const FilterBox = styled.div`
  display: flex;
  /* justify-content: center; */
`;

export const StyledIcon = styled(BiFilterAlt)`
  height: 36px;
  width: 36px;
  color: #d318ff;
  margin-right: 10px;
  :hover,
  :focus {
    color: #303f9f;
  }
`;
