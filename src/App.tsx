import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "./features/Loading";
import BaseLayout from "./layouts/base";

const NotFound = lazy(() => import("./features/NotFound"));
const Home = lazy(() => import("./features/Home"));

const App: FC = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;