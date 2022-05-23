import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import * as Util from "./src/Util"

export default defineConfig({
  plugins: [solidPlugin()],
  
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