import { Console } from '@woowacourse/mission-utils';
import constant from '../constants/constant.js';
import gameMessage from '../constants/gameMessages.js';
import InputMoney from './InputMoney.js';
import RandomLotto from './RandomLotto.js';
import InputLotto from './InputLotto.js';
import Lotto from './Lotto.js';
import Result from './Result.js';

export default class LottoGame {
  #money;

  #quantity;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.randomLottos = [];
    this.result = {
      3: { match: '3개 일치', reward: '5,000', count: 0 },
      4: { match: '4개 일치', reward: '50,000', count: 0 },
      5: { match: '5개 일치', reward: '1,500,000', count: 0 },
      '5B': {
        match: '5개 일치, 보너스 볼 일치',
        reward: '30,000,000',
        count: 0,
      },
      6: { match: '6개 일치', reward: '2,000,000,000', count: 0 },
    };
  }

  async start() {
    await this.inputMoney();
    await this.outputRandom();
    await this.inputLottos();
    await this.lotto();
    await this.winningResult();
  }

  async inputMoney() {
    this.#money = await new InputMoney().input();
  }

  async outputRandom() {
    this.#quantity = this.#money / constant.THOUSAND;
    Console.print(gameMessage.OUTPUT.QUANTITY(this.#quantity));
    this.randomLottos = new RandomLotto().createRandom(this.#quantity);
    this.randomLottos.forEach((randomLotto) => {
      Console.print(`[${randomLotto.join(', ')}]`);
    });
  }

  async inputLottos() {
    const inputLotto = new InputLotto();
    this.#winningNumbers = await inputLotto.inputWinningNumbers();
    this.#bonusNumber = await inputLotto.inputBonusNumber(this.#winningNumbers);
  }

  async lotto() {
    Console.print(gameMessage.OUTPUT.RESULT_TEXT);
    this.randomLottos.forEach((randomLotto) => {
      const lotto = new Lotto(randomLotto);
      const matchCount = lotto.matchCount(this.#winningNumbers);
      const isBonusMatch = lotto.contains(this.#bonusNumber);
      this.result = lotto.count(this.result, matchCount, isBonusMatch);
    });
  }

  async winningResult() {
    new Result().output(this.result, this.#money);
  }
}
