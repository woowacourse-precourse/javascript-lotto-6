import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Price from './Price.js';
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from './constants.js';

class App {
  async getUserPrice() {
    const priceInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.PROMPT_USER_PRICE
    );
    if (!Price.isValidPrice(priceInput)) {
      throw new Error(
        isNaN(priceInput)
          ? ERROR_MESSAGE.FORMAT_ERROR
          : ERROR_MESSAGE.PRICE_UNIT_ERROR
      );
    }
    const price = Number(priceInput);
    return price;
  }

  generateLottos(lottoAmount) {
    let generatedLottos = [];

    for (let i = 0; i < lottoAmount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      generatedLottos.push(numbers);
    }

    return generatedLottos;
  }

  printPurchasedLottos(lottos) {
    Console.print(`${lottos.length}${CONSOLE_MESSAGE.PROMPT_PURCHASED_AMOUNT}`);
    for (let lotto of lottos) {
      Console.print(lotto);
    }
  }

  async getUserLottoNumbers() {
    const lottoNumbersInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.PROMPT_USER_LOTTO_NUMBER
    );
    const numbers = lottoNumbersInput.split(',').map(Number);
    const lottoNumber = new Lotto(numbers);
    return lottoNumber;
  }

  async play() {
    const userPriceInput = await this.getUserPrice();
    const lottoAmount = Price.calculateLottoAmount(userPriceInput);
    Console.print(' ');
    const lottos = this.generateLottos(lottoAmount);
    this.printPurchasedLottos(lottos);
    Console.print(' ');
    const n = await this.getUserLottoNumbers();
  }
}

export default App;
