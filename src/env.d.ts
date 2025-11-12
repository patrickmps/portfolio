/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_USERNAME: string;
  readonly VITE_GITHUB_TOKEN: string;
  readonly VITE_CACHE_DURATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
