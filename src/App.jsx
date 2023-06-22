import { Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/Home/HomePage.jsx"));
const TweetsPage = lazy(() => import("./pages/Tweets/TweetsPage.jsx"));
const PageNotFound = lazy(() => import("./pages/NotFound/PageNotFound.jsx"));
import { getUsers } from "./redux/users/users-operation";
import { store } from "./redux/store";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <Suspense>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/tweets" element={<TweetsPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Provider>
      </Suspense>
    </>
  );
};

export default App;
