import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './isoRegex.js',
      name: 'IsoRegexParser',
      formats: ['es', 'umd'],
    },
    outDir: 'dist',
    sourcemap: true,
  },
  test: {
    environment: 'node',
    include: ['**/*.spec.js'],
  },
});
