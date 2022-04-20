/* eslint-disable import/no-default-export */
/* eslint-disable import/group-exports */
declare module 'core-js/stable' {
  export {};
}

declare module 'regenerator-runtime/runtime' {
  export {};
}

declare module 'whatwg-fetch' {
  export {};
}

declare module '*.png' {
  const url: string;
  export default url;
}
