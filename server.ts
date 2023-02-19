import { createEventHandler } from "@remix-run/cloudflare-workers";
import * as build from "@remix-run/dev/server-build";

declare global {  
  const FAUNADB_SECRET: string  
}

addEventListener(
  "fetch",
  createEventHandler({ build, mode: process.env.NODE_ENV })
);
