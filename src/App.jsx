import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/Homepage/Homepage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Layout />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
