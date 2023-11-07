import { Main } from './Main.js';
class App {
  async play() {
    const lotto = new Main();
    await lotto.start();
  }
}

export default App;
