import PropTypes from "prop-types";
import { BtnLoadMore } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = ({ onClickButton }) => {
  return (
    <BtnLoadMore type="button" onClick={() => onClickButton()}>
      Load more
    </BtnLoadMore>
  );
};

LoadMoreBtn.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
