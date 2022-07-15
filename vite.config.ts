import { defineConfig } from 'vite';
import * as Util from "./src/Util";

import solidPlugin from 'vite-plugin-solid';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCSP from "vite-plugin-csp";

export default defineConfig({
  plugins: [
    solidPlugin(),

    createHtmlPlugin({
      minify: true,
      template: "/index.html"
    }),

    viteCSP({
      policy: {
        "default-src": "self",
        "script-src": "self",
        "frame-src": ["none"],
        "img-src": ["self"],
        "connect-src": ["self"],
        "font-src": [
          "self",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/",
          "https://fonts.gstatic.com/s/",
        ],
        "style-src": [
          "self", "unsafe-inline",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/",
          "https://fonts.googleapis.com/"
        ]
      }
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
          return "__e__/" + Util.generateString(32) + "[extname]";
        },

        chunkFileNames: () => {
          return "__e__/" + Util.generateString(32) + ".js";
        },

        entryFileNames: () => {
          return "__e__/" + Util.generateString(32) + ".js";
        }
      }
    }
  }
});