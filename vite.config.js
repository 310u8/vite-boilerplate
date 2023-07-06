import { defineConfig } from 'vite';
import path from 'path';
import pug from '@macropygia/vite-plugin-pug-static';
import input from '@macropygia/vite-plugin-glob-input';

const basedir = path.resolve(__dirname, 'src');

export default defineConfig({
  root: "src",
  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
      }
    }
  },
  css: {devSourcemap: true},
  plugins: [
    pug({
      buildOptions: { basedir },
      serveOptions: { basedir }
    }),
    input({
      patterns: ["src/**/[^_]*.pug"]
    })
  ]
})