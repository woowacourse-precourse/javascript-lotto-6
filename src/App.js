import input from './utils/input.js';
import print from './utils/print.js';

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

  async play() {}
}

export default App;
