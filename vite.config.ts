import { defineConfig } from 'vite';
import * as Util from "./src/Util";

import solidPlugin from 'vite-plugin-solid';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCSP from "vite-plugin-csp";

import dotenv from "dotenv";

import autoprefixer from "autoprefixer";

const env = dotenv.config({path: process.cwd() + "/.env"});

const oneTimeRenderCode = Util.generateString(12);

export default defineConfig({
  plugins: [
    solidPlugin(),

    createHtmlPlugin({
      minify: true,
      template: "/index.html"
    }),

    viteCSP({
      policy: {
        "img-src": [ 'self', 'https://cdn.discordapp.com/app-assets/', 'https://cdn.discordapp.com/avatars/331265944363991042/', 'https://cdn.discordapp.com/banners/331265944363991042/', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://cdn.discordapp.com/embed/avatars/1.png', 'https://cdn.discordapp.com/embed/avatars/2.png', 'https://cdn.discordapp.com/embed/avatars/3.png', 'https://cdn.discordapp.com/embed/avatars/4.png', 'https://cdn.discordapp.com/embed/avatars/5.png' ],
        "default-src": "self",
        "script-src": "self",
        "frame-src": ["none"],
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
    rollupOptions: {
      output: {
        assetFileNames: () => {
          return `s/${oneTimeRenderCode}/[hash][extname]`;
        },

        chunkFileNames: () => {
          return `s/${oneTimeRenderCode}/[hash].js`;
        },

        entryFileNames: () => {
          return `s/${oneTimeRenderCode}/[hash].js`;
        }
      }
    }
  },

  preview: {
    port: Number(env.parsed?.["PORT"] || 5173)
  },

  css: {
    postcss: {
      plugins: process.env.npm_lifecycle_event == "dev" ? [] : [ autoprefixer({ supports: true }) ],
    }
  }
});