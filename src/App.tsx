import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./features/Home";
import { Loading } from "./features/Loading";
import { NotFound } from "./features/NotFound";

import { BaseLayout } from "./layouts/base";

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