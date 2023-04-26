import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PostsPage = lazy(() => import("./pages/PostsPage/PostsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const SinglePostPage = lazy(() =>
  import("./pages/SinglePostPage/SinglePostPage")
);
const CommentsPage = lazy(() => import("./pages/CommentsPage/CommentsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />}>
          <Route path="comments" element={<CommentsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
