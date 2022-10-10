import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Loading: FC = () => {
  const { t } = useTranslation(["loading"]);

  return (
    <div className="flex items-center mx-auto">
      <div className="w-24 h-24 border-l-4 border-primary-400 rounded-full animate-spin"></div>
    </div>
  )
}