import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage";

const PhotosPage = lazy(() => import("./pages/PhotosPage"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-airbnb-red border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="*" element={<ListingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
