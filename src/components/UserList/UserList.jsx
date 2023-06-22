import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ScrollToTop from "react-scroll-up";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { HiArrowSmLeft } from "react-icons/hi";
import { BackBtn, UserCard, UserList, BtnWrapper } from "./UserList.styled.jsx";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import UserItem from "../UserItem/UserItem";
import { Loader } from "../Loader/Loader";
import CardFilter from "../CardFilter/CardsFilter.jsx";
import { getUsers } from "../../redux/users/users-operation.js";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  // const [selectValue, setSelectValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (value) => {
    // console.log(value);
    if (value === "all") {
      const findUsers = users;
      // console.log(findUsers);
      setUsers(findUsers);
    }
    if (value === "false") {
      const findUsers = users.filter((user) => user.check === false);
      // console.log(findUsers);
      if (findUsers.length < 3) {
        setShowLoadMoreBtn(false);
      }
      setUsers(findUsers);
    }
    if (value === "true") {
      const findUsers = users.filter((user) => user.check === true);
      // console.log(findUsers);
      if (findUsers.length < 3) {
        setShowLoadMoreBtn(false);
      }
      setUsers(findUsers);
    }
  };

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        setShowLoadMoreBtn(false);
        const response = await getUsers(page);
        setShowLoadMoreBtn(true);

        if (page === 1) {
          setUsers(response);
          setIsLoading(false);
        } else {
          setUsers((prev) => [...prev, ...response]);
          setIsLoading(false);
        }
        if (response.length < 3) {
          setShowLoadMoreBtn(false);
          toast.success(`Tweets Cards are over`);
        }
      } catch (error) {
        toast.error("Sorry, something went wrong, please try again later");
        setIsLoading(false);
      }
    }
    getAllUsers();
  }, [page]);

  const loadMoreCards = () => {
    setPage((prev) => prev + 1);
    setIsLoading(true);
  };

  return (
    <>
      <BtnWrapper>
        <BackBtn onClick={() => navigate("/")}>
          <HiArrowSmLeft size="20" />
          Go back
        </BackBtn>
        <CardFilter handleChange={handleChange} />
      </BtnWrapper>
      <UserList>
        {users.map((user) => (
          <UserCard key={user.id}>
            <UserItem user={user} />
          </UserCard>
        ))}
      </UserList>
      {showLoadMoreBtn && <LoadMoreBtn onClickButton={loadMoreCards} />}
      {isLoading && <Loader />}
      <ScrollToTop
        showUnder={160}
        style={{
          position: "fixed",
          color: "#D318FF",
          bottom: 50,
          right: 30,
          cursor: "pointer",
          transitionDuration: "0.2s",
          transitionTimingFunction: "linear",
          transitionDelay: "0s",
        }}
      >
        <span>
          {" "}
          <TfiArrowCircleUp size="50" />{" "}
        </span>
      </ScrollToTop>
    </>
  );
};

export default UsersList;
