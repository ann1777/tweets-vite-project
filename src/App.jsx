import { Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

import HomePage from "./pages/Home/HomePage.jsx";
import TweetsPage from "./pages/Tweets/TweetsPage.jsx";
import PageNotFound from "./pages/NotFound/PageNotFound.jsx";
import { getUsers } from "./redux/users/users-operation";
import { store } from "./redux/store";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/tweets" element={<TweetsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
};

export default App;
