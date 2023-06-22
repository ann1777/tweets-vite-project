import goItLogo from "../../images/goit-logo.png";
import appLogo from "../../images/logo.png";
import {
  GoItLogo,
  AppLogo,
  AvatarWrapper,
  UserAvatar,
  TweetsCounter,
  FollowersCounter,
  FollowBtn,
  UserCardDivider,
  UserItemWrapper,
} from "./UserItem.styled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { followUser, getUsers } from "../../redux/users/users-operation";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  console.log("user :", user, followUser, getUsers);
  return (
    <UserItemWrapper>
      <GoItLogo src={goItLogo} alt="GoItLogo" />
      <AppLogo src={appLogo} alt="TweetsApp Logo" />
      <UserCardDivider />
      <AvatarWrapper>
        <UserAvatar src={user.avatar} alt="User Avatar" />
      </AvatarWrapper>
      <TweetsCounter>{user.tweets.toLocaleString()} TWEETS</TweetsCounter>
      <FollowersCounter>
        {user.followers.toLocaleString()} FOLLOWERS{" "}
      </FollowersCounter>
      <FollowBtn
        type="button"
        onClick={() => {
          dispatch(followUser(user))
            .unwrap()
            .then(() => {
              dispatch(getUsers());
            });
        }}
        following={user.check}
      >
        {user.check ? "FOLLOWING" : "FOLLOW"}
      </FollowBtn>
    </UserItemWrapper>
  );
};

export default UserItem;

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    check: PropTypes.bool.isRequired,
  }),
};
