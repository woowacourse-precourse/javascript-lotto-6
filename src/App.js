import { printMessage, readLineAsync } from './utils';
import { 
  isNumber,
  isNaturalNumber,
  isAboveMinCost,
} from './utils';
import { MESSAGE } from './constants';

class App {
  async play() {
    await this.buyLotto();
  }

  async buyLotto() {
    try {
      const cost = await readLineAsync(MESSAGE.input_cost);
      isNumber(cost);
      isNaturalNumber(cost);
      isAboveMinCost(cost);
    } catch (error) {
      printMessage(error.message);
      await this.buyLotto();
    }
  }
}

export default App;
