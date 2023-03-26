/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge"
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>&image=<image>
    const hasTitle = searchParams.has("title");
    const hasImage = searchParams.has("image");
    const hasType = searchParams.has("type");

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    const image = hasImage ? searchParams.get("image") : undefined;

    const type = hasType ? searchParams.get("type") : "General";

    if (hasImage) {
      return new ImageResponse(
        (
          <div tw="flex flex-col text-white bg-black/90 heropattern-diagonallines-white/10 w-full h-full">
            <div tw="items-center justify-center flex flex-col w-full h-full p-6">
              <div tw="relative w-1/2 h-1/2 flex overflow-hidden mx-auto rounded-xl bg-white/[2%] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-xl after:border after:border-rose-200/10 after:content-['']">
                <img
                  alt={title}
                  src={`http://localhost:3000/images/${type}/${image}`}
                  tw="w-full h-full"
                />
              </div>
              <div tw="flex flex-col">
                <h1 tw="text-5xl">{title}</h1>
              </div>
              <div tw="flex items-center">
                <svg
                  fill="white"
                  viewBox="0 0 512 512"
                  width="32"
                  height="32"
                >
                  <path
                    d="M0 0h512v512H0z"
                    fill="#000000"
                    fill-opacity="0.01"
                  ></path>
                  <g transform="translate(0,0)">
                    <path
                      d="M194.2 41.72c-26.2 1.32-41.5 8.87-61.3 12.62-18.1 3.45-39.15 2.35-70.36-10.96C57.5 57.27 61.3 72.51 73.9 84.95c28.3 18.75 57.9 22.75 82 18.05l3 17.8c-32.5 6.5-70.62 38.8-89.87 60.4 13.4-1.3 27.54-1.6 40.77-.9 10.8.6 20.8 1.8 29.3 4 8.5 2.1 15.7 4.4 20.9 10.9l8.9 11-13.8 3.3C93.55 224.4 49.64 252.6 27.01 282c40.71-3.3 78.99-2.9 115.19 8.7-8.1 24.6-19 49.7-31 69.9-9.7 23.7-17.62 36.3-24.8 45.2.7-.2 1.29-.2 2.02-.4 9.7-2 21.88-5.9 33.68-10.3 23.5-8.8 45.3-19.2 45.3-19.2l15.5-7.4-2.7 16.9c-4 25.3-4.3 44.1-1.8 57 2.5 12.9 7.1 19.5 13.5 23.5 6.5 3.9 16 5.5 29 4.1 10.9-1.1 24-4.3 38.7-8.9-10.7-33.2-27.9-66-25.9-109.2 1.5-33.5 16.5-70.3 54-87.6 53.2-24.4 111.4-6.9 173.5 2.1.1 0-.1 0 .1-.1.8-.6 2.6-2.2 4.4-4.8 3.6-5.1 7.7-13.4 11.1-22.9 1.3-3.6 2.5-7.3 3.6-11.1-12.3-.2-21.1 0-29.6-5.5-5.2-3.4-8.9-8.7-11.8-15.1-4.5-11.6-6.5-19.2-9.5-29.9-13.5-.4-27.6 1.1-39.9-2.4-15.8-4.5-26.6-20.3-30.5-34.7-3-11.5-4.1-21.1-17.3-34.5-50.7-33.88-95.3-67.04-147.6-63.68zM263.4 129c34.4 22 60.4 37 91.3 45.1-27 10.5-66.4 15.7-87.1 2.2-7.4-5.7-9.3-24-4.2-47.3zM82.21 142.7c-14.31 4-31.75 7.2-56.8 8.9v54.1l14.49-17.9c11.99-14.8 25.36-30.5 42.31-45.1zm372.89 35.8c10.9 6.8 21.7 12.1 31.1 19.2.4-5.2.5-10 .2-14.1-9.9-3.6-22-4.4-31.3-5.1zM48.82 202.3l-23.41 5.1v49c22.81-23 56.2-42.9 98.39-56.7-24.31-2.8-51.27-2.4-74.98 2.6zm293.08 68.1c2 8 2.9 20.4 3.4 27.9 10-7.3 17.4-18.9 23.8-27.2-9.6-.8-18.4-1-27.2-.7zm57.1 4.3c-3.4 25.3-13.5 51.7-25.1 77.7-10.5 23.5-22.2 46.5-31.9 67.2 17.1-12.8 36.8-32.8 53.8-55.6 20.2-27 36.7-57.7 43.6-82.7-14-2.3-27.4-4.6-40.4-6.6zM63.54 297.4c-13.4.1-26.59 1.2-38.13 3.1v122.2c4.11-7.5 8.65-15.5 13.77-23.8 9.04-14.5 19.36-29.1 30.47-40.6 10.12-10.4 20.99-18.8 33.55-20.3 5.6-10.5 11-22.2 15.8-35.2-15.9-3.8-35.9-5.5-55.46-5.4zM314 394.9l-47.1 31.9c2.5 7 5.1 14 7.5 21.2 14.8-17.5 28.5-35.1 39.6-53.1z"
                      fill="#fff"
                      fill-opacity="1"
                    ></path>
                  </g>
                </svg>
                <p tw="ml-2">Ivo Vieira</p>
              </div>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 600
        }
      );
    }

    return new ImageResponse(
      (
        <div tw="flex flex-col text-white bg-black/90 heropattern-diagonallines-white/10 w-full h-full">
          <div tw="items-center justify-center flex flex-col w-full h-full p-6">
            <svg
              fill="white"
              viewBox="0 0 512 512"
              width="256"
              height="256"
            >
              <path
                d="M0 0h512v512H0z"
                fill="#000000"
                fill-opacity="0.01"
              ></path>
              <g transform="translate(0,0)">
                <path
                  d="M194.2 41.72c-26.2 1.32-41.5 8.87-61.3 12.62-18.1 3.45-39.15 2.35-70.36-10.96C57.5 57.27 61.3 72.51 73.9 84.95c28.3 18.75 57.9 22.75 82 18.05l3 17.8c-32.5 6.5-70.62 38.8-89.87 60.4 13.4-1.3 27.54-1.6 40.77-.9 10.8.6 20.8 1.8 29.3 4 8.5 2.1 15.7 4.4 20.9 10.9l8.9 11-13.8 3.3C93.55 224.4 49.64 252.6 27.01 282c40.71-3.3 78.99-2.9 115.19 8.7-8.1 24.6-19 49.7-31 69.9-9.7 23.7-17.62 36.3-24.8 45.2.7-.2 1.29-.2 2.02-.4 9.7-2 21.88-5.9 33.68-10.3 23.5-8.8 45.3-19.2 45.3-19.2l15.5-7.4-2.7 16.9c-4 25.3-4.3 44.1-1.8 57 2.5 12.9 7.1 19.5 13.5 23.5 6.5 3.9 16 5.5 29 4.1 10.9-1.1 24-4.3 38.7-8.9-10.7-33.2-27.9-66-25.9-109.2 1.5-33.5 16.5-70.3 54-87.6 53.2-24.4 111.4-6.9 173.5 2.1.1 0-.1 0 .1-.1.8-.6 2.6-2.2 4.4-4.8 3.6-5.1 7.7-13.4 11.1-22.9 1.3-3.6 2.5-7.3 3.6-11.1-12.3-.2-21.1 0-29.6-5.5-5.2-3.4-8.9-8.7-11.8-15.1-4.5-11.6-6.5-19.2-9.5-29.9-13.5-.4-27.6 1.1-39.9-2.4-15.8-4.5-26.6-20.3-30.5-34.7-3-11.5-4.1-21.1-17.3-34.5-50.7-33.88-95.3-67.04-147.6-63.68zM263.4 129c34.4 22 60.4 37 91.3 45.1-27 10.5-66.4 15.7-87.1 2.2-7.4-5.7-9.3-24-4.2-47.3zM82.21 142.7c-14.31 4-31.75 7.2-56.8 8.9v54.1l14.49-17.9c11.99-14.8 25.36-30.5 42.31-45.1zm372.89 35.8c10.9 6.8 21.7 12.1 31.1 19.2.4-5.2.5-10 .2-14.1-9.9-3.6-22-4.4-31.3-5.1zM48.82 202.3l-23.41 5.1v49c22.81-23 56.2-42.9 98.39-56.7-24.31-2.8-51.27-2.4-74.98 2.6zm293.08 68.1c2 8 2.9 20.4 3.4 27.9 10-7.3 17.4-18.9 23.8-27.2-9.6-.8-18.4-1-27.2-.7zm57.1 4.3c-3.4 25.3-13.5 51.7-25.1 77.7-10.5 23.5-22.2 46.5-31.9 67.2 17.1-12.8 36.8-32.8 53.8-55.6 20.2-27 36.7-57.7 43.6-82.7-14-2.3-27.4-4.6-40.4-6.6zM63.54 297.4c-13.4.1-26.59 1.2-38.13 3.1v122.2c4.11-7.5 8.65-15.5 13.77-23.8 9.04-14.5 19.36-29.1 30.47-40.6 10.12-10.4 20.99-18.8 33.55-20.3 5.6-10.5 11-22.2 15.8-35.2-15.9-3.8-35.9-5.5-55.46-5.4zM314 394.9l-47.1 31.9c2.5 7 5.1 14 7.5 21.2 14.8-17.5 28.5-35.1 39.6-53.1z"
                  fill="#fff"
                  fill-opacity="1"
                ></path>
              </g>
            </svg>
            <div tw="flex flex-col">
              <h1 tw="text-5xl">{title}</h1>
            </div>
            <div tw="flex items-center">
              <svg
                fill="white"
                viewBox="0 0 512 512"
                width="32"
                height="32"
              >
                <path
                  d="M0 0h512v512H0z"
                  fill="#000000"
                  fill-opacity="0.01"
                ></path>
                <g transform="translate(0,0)">
                  <path
                    d="M194.2 41.72c-26.2 1.32-41.5 8.87-61.3 12.62-18.1 3.45-39.15 2.35-70.36-10.96C57.5 57.27 61.3 72.51 73.9 84.95c28.3 18.75 57.9 22.75 82 18.05l3 17.8c-32.5 6.5-70.62 38.8-89.87 60.4 13.4-1.3 27.54-1.6 40.77-.9 10.8.6 20.8 1.8 29.3 4 8.5 2.1 15.7 4.4 20.9 10.9l8.9 11-13.8 3.3C93.55 224.4 49.64 252.6 27.01 282c40.71-3.3 78.99-2.9 115.19 8.7-8.1 24.6-19 49.7-31 69.9-9.7 23.7-17.62 36.3-24.8 45.2.7-.2 1.29-.2 2.02-.4 9.7-2 21.88-5.9 33.68-10.3 23.5-8.8 45.3-19.2 45.3-19.2l15.5-7.4-2.7 16.9c-4 25.3-4.3 44.1-1.8 57 2.5 12.9 7.1 19.5 13.5 23.5 6.5 3.9 16 5.5 29 4.1 10.9-1.1 24-4.3 38.7-8.9-10.7-33.2-27.9-66-25.9-109.2 1.5-33.5 16.5-70.3 54-87.6 53.2-24.4 111.4-6.9 173.5 2.1.1 0-.1 0 .1-.1.8-.6 2.6-2.2 4.4-4.8 3.6-5.1 7.7-13.4 11.1-22.9 1.3-3.6 2.5-7.3 3.6-11.1-12.3-.2-21.1 0-29.6-5.5-5.2-3.4-8.9-8.7-11.8-15.1-4.5-11.6-6.5-19.2-9.5-29.9-13.5-.4-27.6 1.1-39.9-2.4-15.8-4.5-26.6-20.3-30.5-34.7-3-11.5-4.1-21.1-17.3-34.5-50.7-33.88-95.3-67.04-147.6-63.68zM263.4 129c34.4 22 60.4 37 91.3 45.1-27 10.5-66.4 15.7-87.1 2.2-7.4-5.7-9.3-24-4.2-47.3zM82.21 142.7c-14.31 4-31.75 7.2-56.8 8.9v54.1l14.49-17.9c11.99-14.8 25.36-30.5 42.31-45.1zm372.89 35.8c10.9 6.8 21.7 12.1 31.1 19.2.4-5.2.5-10 .2-14.1-9.9-3.6-22-4.4-31.3-5.1zM48.82 202.3l-23.41 5.1v49c22.81-23 56.2-42.9 98.39-56.7-24.31-2.8-51.27-2.4-74.98 2.6zm293.08 68.1c2 8 2.9 20.4 3.4 27.9 10-7.3 17.4-18.9 23.8-27.2-9.6-.8-18.4-1-27.2-.7zm57.1 4.3c-3.4 25.3-13.5 51.7-25.1 77.7-10.5 23.5-22.2 46.5-31.9 67.2 17.1-12.8 36.8-32.8 53.8-55.6 20.2-27 36.7-57.7 43.6-82.7-14-2.3-27.4-4.6-40.4-6.6zM63.54 297.4c-13.4.1-26.59 1.2-38.13 3.1v122.2c4.11-7.5 8.65-15.5 13.77-23.8 9.04-14.5 19.36-29.1 30.47-40.6 10.12-10.4 20.99-18.8 33.55-20.3 5.6-10.5 11-22.2 15.8-35.2-15.9-3.8-35.9-5.5-55.46-5.4zM314 394.9l-47.1 31.9c2.5 7 5.1 14 7.5 21.2 14.8-17.5 28.5-35.1 39.6-53.1z"
                    fill="#fff"
                    fill-opacity="1"
                  ></path>
                </g>
              </svg>
              <p tw="ml-2">Ivo Vieira</p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
