declare module "*.css";

import type { Pool } from "pg";

declare global {
  var pgPool: Pool | undefined;
}

declare module "embla-carousel-autoplay";

export {};
