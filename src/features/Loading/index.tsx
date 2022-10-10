import { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className="flex items-center mx-auto">
      <div className="w-24 h-24 border-l-4 border-primary-400 rounded-full animate-spin"></div>
    </div>
  )
}