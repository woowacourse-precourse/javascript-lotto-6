import Price from './Price.js';

class App {
  async play() {
    await Price.getUserPrice();
  }
}

export default App;
