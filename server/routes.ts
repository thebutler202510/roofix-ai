import type { Express } from "express";
import { createServer } from "http";

export function registerRoutes(app: Express) {
  const server = createServer(app);
  return server;
}
