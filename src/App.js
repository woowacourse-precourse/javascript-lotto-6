import input from './utils/input.js';
import print from './utils/print.js';
import Lotto from './Lotto.js';

class App {
  #lottos;

  async getInput(prompt, validateFunc) {
    while (true) {
      try {
        const inputValue = await input(prompt);
        validateFunc(inputValue);
        return inputValue;
      } catch (error) {
        print(error.message);
      }
    }
  }

  createLotto(cost) {
    const lottoNumber = Array.from({ length: cost / 1000 }, (_, i) => i);
    this.#lottos = lottoNumber.map((elem) => {
      const randomNumbers = getRandomUniqueNumbers();
      return new Lotto(randomNumbers);
    });
  }

  async play() {}
}

export default App;
