import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import wasm from '@rollup/plugin-wasm';
import typescript from '@rollup/plugin-typescript';

module.exports = {
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve({
      extensions: [ '.js', '.ts', '.wasm' ],
    }),
    commonjs(),
    typescript(),
    wasm(),
  ]
}
