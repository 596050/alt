import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  treeshake: true,
  external: ['react', 'react-dom', '@emotion/react', "country-list"],
  sourcemap: true,
  watch: true,
  // outExtension({ format }) {
  //   return {
  //     js: `.${format}.js`,
  //   };
  // },

  // Add this
  esbuildOptions(options) {
    // '@emotion/*'
    options.external = [];
  },
});
