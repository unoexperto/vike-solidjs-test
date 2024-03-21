import "./tailwind.css";
import type { JSX } from "solid-js";

export const Layout = (props: { children?: JSX.Element; }) => {
  return (
    <div class="flex max-w-5xl m-auto flex-col">
      <div>Page Content:</div>
      <div class="flex-1 border border-red-600 m-2 p-2">{props.children}</div>
    </div>
  );
};
