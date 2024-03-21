import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";

const clientRouting = true;
const passToClient = ['pageProps'];

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (!clientRouting) {
  // тут по желанию я просто заморачиваюсь с i18n и проверяю и clientRouting и server-side routing
  passToClient.push('urlPathname', 'urlParsed');
}

/** {@link https://vike.dev/config} */
export default {
  // because [clientRouting can't be overridden](https://github.com/vikejs/vike/discussions/605)
  clientRouting,
  // we can't really abort hydration in client-side, but just in case
  hydrationCanBeAborted: true,
  // See https://vike.dev/data-fetching
  // for server
  passToClient,
  extends: vikeSolid,
} satisfies Config;
