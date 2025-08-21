import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/index.ts',
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Lc-UI',
  },
  presets: [require.resolve('@dumijs/preset-vue')],
});
