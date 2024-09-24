import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginStyledComponents } from '@rsbuild/plugin-styled-components';
import postcssPxToViewport from 'postcss-px-to-viewport';
import tailwindCss from 'tailwindcss';

export default defineConfig({
  plugins: [pluginReact(), pluginStyledComponents()],
  tools: {
    postcss: () => {
      return {
        postcssOptions: {
          plugins: [postcssPxToViewport, tailwindCss],
        },
      };
    },
  },
});
