// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // accessible via context.site ?
  site: "https://example.com",

  integrations: [preact()],
});