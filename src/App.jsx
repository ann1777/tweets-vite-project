import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/HomePage.jsx";
import Tweets from "./pages/Tweets/TweetsPage.jsx";
import NotFound from "./pages/NotFound/PageNotFound.jsx";
import { getUsers } from "./redux/users/users-operation";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
