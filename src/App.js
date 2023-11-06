/* eslint-disable no-plusplus */
import { Console } from '@woowacourse/mission-utils';
import { generateRandomLottoNumbers } from './utils/index.js';
import LottoConsole from './view/LottoConsole.js';
import Lotto from './Lotto.js';
import { PRIZE_TABLE } from './constants/lotto.js';

class App {
  #lottos;

  #prize;

  #winningTable;

  constructor() {
    this.#lottos = [];
    this.#prize = 0;
    this.#winningTable = {
      '1등': 0,
      '2등': 0,
      '3등': 0,
      '4등': 0,
      '5등': 0,
    };
  }

  async play() {
    const purchaseAmount = await LottoConsole.getPurchaseAmount();
    const amount = purchaseAmount / 1000;
    LottoConsole.printAmountOfLotto(amount);

    // 로또 생성
    for (let i = 0; i < amount; i++)
      this.#lottos.push(new Lotto(generateRandomLottoNumbers()));

    const lottoNumbers = await LottoConsole.getLottoNumbers();
    const bonusNumber = await LottoConsole.getBonusNumber();

    // 로또 긁기
    this.#lottos.forEach((lotto) => {
      const rank = lotto.getRank(lottoNumbers, bonusNumber);
      if (rank) this.#winningTable[rank]++;
    });

    Object.entries(this.#winningTable).forEach(([key, value]) => {
      this.#prize += PRIZE_TABLE[key] * value;
    });

    LottoConsole.printResult(this.#winningTable);

    Console.print(
      `총 수익률은 ${((this.#prize / purchaseAmount) * 100).toFixed(1)}%입니다.`
    );
  }
}

export default App;
