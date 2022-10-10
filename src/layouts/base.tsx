import { FC, lazy } from "react";

const LanguageToggler = lazy(() => import("./components/LanguageToggler"));
const Navbar = lazy(() => import("./components/Navbar"));

type BaseLayoutProps = {
  children: JSX.Element;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex py-5 items-center justify-center">
        <LanguageToggler />
      </section>

      <main className="flex flex-1 px-5 py-2.5 md:px-10 md:py-5 lg:px-20 lg:py-8">
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;