import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SinglePost from "./components/SinglePost";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Error404 from "./pages/Error404";
import Comments from "./components/Comments";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/posts/:id/comments" element={<Comments />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
