import { FC } from "react";

export const Loading: FC = () => {
  return (
    <main className="text-center h-full w-full flex flex-col justify-center items-center bg-primary-900">
      <h1 className="text-8xl font-extrabold text-white">Elon Musk</h1>
      <div className="bg-primary-500 px-2 text-md rounded -rotate-12 absolute">
        This is not
      </div>
      <h6 className="bg-primary-500 text-xs rounded px-1">Hold on, I'm loading things up...</h6>
    </main>
  )
}