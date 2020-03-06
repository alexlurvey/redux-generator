import init, { greet } from './pkg/redux_generator';
const wasm_file = 'redux_generator_bg.wasm';

const app = async () => {
  await init(wasm_file);
  greet('steve');
}

app();