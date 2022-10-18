import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  parentClassName?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  parentClassName,
}) => {
  return (
    <button
      className={`group relative inline-block text-sm font-medium text-primary-500 focus:outline-none focus:ring active:text-primary-500 ${parentClassName}`}
    >
      <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />

      <span
        className={`relative block border border-current bg-primary-900 px-8 py-3 ${className}`}
      >
        {children}
      </span>
    </button>
  );
};
