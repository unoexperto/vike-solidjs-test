import { createEffect, createSignal } from 'solid-js';
import { usePageContext } from 'vike-solid/usePageContext';

export default function Page() {
  const pageCtx = usePageContext();
  const [path, setPath] = createSignal("");
  createEffect(() => {
    console.log("urlPathname:", pageCtx?.urlPathname);
    setPath(pageCtx?.urlPathname);
  });

  return (
    <>
      <span>User page for user with path:</span>
      <pre>
        {path()}
      </pre>
    </>
  );
}
