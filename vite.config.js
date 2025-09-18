import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'DateRegexParser',
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
