import { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className="m-auto w-fit">
      <div className="h-24 w-24 animate-spin rounded-full border-l-4 border-primary-400"></div>
    </div>
  );
};
