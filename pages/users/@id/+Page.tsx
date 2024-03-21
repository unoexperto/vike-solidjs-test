import { usePageContext } from 'vike-solid/usePageContext';

export default function Page() {
  const pageCtx = usePageContext();
  return (
    <>
      <span>User page for user with route params:</span>
      <pre>
        {JSON.stringify(pageCtx?.routeParams ?? {})}
      </pre>
    </>
  );
}
