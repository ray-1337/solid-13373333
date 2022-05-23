import { defineConfig } from 'vite';
import * as Util from "./src/Util";

import solidPlugin from 'vite-plugin-solid';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    solidPlugin(),

    createHtmlPlugin({
      minify: true,
      template: "/index.html"
    })
  ],
  
  build: {
    cssCodeSplit: false,
    minify: true,
    target: 'esnext',
    polyfillDynamicImport: false,
    rollupOptions: {
      output: {
        assetFileNames: () => {
          return "firstclass_upinthesky/" + Util.generateString(32) + "[extname]";
        },

        chunkFileNames: () => {
          return "firstclass_upinthesky/" + Util.generateString(32) + ".js";
        },

        entryFileNames: () => {
          return "firstclass_upinthesky/" + Util.generateString(32) + ".js";
        }
      }
    }
  }
});