import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className="relative inline-block text-sm font-medium text-primary-500 group active:text-primary-500 focus:outline-none focus:ring">
      <span
        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary-500 group-hover:translate-y-0 group-hover:translate-x-0"
      />

      <span className={`relative block px-8 py-3 bg-primary-900 border border-current ${className}`}>
        {children}
      </span>
    </button>
  )
}