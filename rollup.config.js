import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts',
  output: {
    'dir': 'dist',
    'format': 'esm',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript()
  ]
};
