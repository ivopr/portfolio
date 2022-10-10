import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "./features/Loading";

const BaseLayout = lazy(() => import("./layouts/base"));
const NotFound = lazy(() => import("./features/NotFound"));
const Home = lazy(() => import("./features/Home"));

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;