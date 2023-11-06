import { Console, Random } from '@woowacourse/mission-utils';
import { Validation } from './Validation.js';
import { LOTTO_RULE, INPUT_MESSAGES, ERROR_MESSAGES } from './Constants.js';
import { CustomError } from './CustomError.js';
import LottoList from './LottoList.js';

const LENGTH = LOTTO_RULE.LENGTH;
const { MIN, MAX } = LOTTO_RULE.RANGE;

class App {
  #lottoApp;

  constructor() {
    this.#lottoApp = new LottoList();
  }

  async play() {
    await this.printLottoList();
    const inputNumbers = await this.inputNumbers();
    await this.inputBonusNumber(inputNumbers);
  }

  async printLottoList() {
    const lottoList = await this.#lottoApp.makeLottoList();
    Console.print(lottoList);
  }

  async inputNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.LOTTO_NUMBER);
    return input.split(',').map((num) => Number(num.trim()));
  }

  async inputBonusNumber() {
    const inputBonusNumber = await Console.readLineAsync(
      INPUT_MESSAGES.BONUS_NUMBER,
    );
    const bonusNumber = Number(inputBonusNumber);

    return bonusNumber;
  }
}

export default App;
