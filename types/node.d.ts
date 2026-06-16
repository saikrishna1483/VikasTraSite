declare module 'node:fs/promises' {
  import type { promises as fsPromises } from 'fs';
  export * from 'fs/promises';
}

declare module 'node:crypto' {
  export * from 'crypto';
}

declare module 'node:path' {
  export * from 'path';
}
