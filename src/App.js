import Lotto from './Lotto.js';

class App {
  async play() {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const user = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 6, 7, 8, 9],
    ];
    const result = lotto.getResult(user, 7);
    lotto.printResult(result);
  }
}

const app = new App();
app.play();

export default App;
