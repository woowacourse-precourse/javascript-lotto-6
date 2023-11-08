import { Random, Console } from '@woowacourse/mission-utils';
import LottoError from './LottoError.js';
import Lotto from './Lotto.js';
import {
  LOTTO_BONUS_NUMBER_REGEX,
  LOTTO_NUMBERS_REGEX,
  LOTTO_PRIZE,
  NUMBERS_REGEX,
  REWARD_INFOS,
} from './constants.js';

class App {
  winningNumbers = [];
  bonusNumber;

  generatRandomLottos(purchaseAmount) {
    const lottoAmount = purchaseAmount / 1000;
    Console.print(`${lottoAmount}개를 구매했습니다.`);

    const lottos = [];
    for (let i = 0; i < lottoAmount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 6, 6);
      const newLotto = new Lotto(lottoNumbers);
      newLotto.printNumbers();
      lottos.push(newLotto);
    }

    return lottos;
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (!NUMBERS_REGEX.test(purchaseAmount))
      throw new LottoError('구입 금액은 숫자만 입력해야합니다.');

    if (Number(purchaseAmount) % LOTTO_PRIZE != 0)
      throw new LottoError(`${LOTTO_PRIZE}원 단위로 입력해야 합니다.`);
  }

  async #readPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await Console.readLineAsync(
          '구입금액을 입력해 주세요.\n'
        );
        this.#validatePurchaseAmount(purchaseAmount);

        return Number(purchaseAmount);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #vaildateWinningNumbers(winningNumbers) {
    if (!LOTTO_NUMBERS_REGEX.test(winningNumbers))
      throw new LottoError('당첨번호를 잘못 입력하셨습니다.');

    const numbers = winningNumbers.split(',');
    if (new Set(numbers).size != numbers.length) {
      throw new LottoError('로또 번호는 중복되지 않아야 합니다.');
    }
  }

  async #readWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await Console.readLineAsync(
          '당첨 번호를 입력해 주세요.\n'
        );

        this.#vaildateWinningNumbers(winningNumbers);
        const winningNumbersArr = winningNumbers.split(',');
        return winningNumbersArr.map((numberString) => Number(numberString));
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #vaildateBonusNumber(bonusNumber, winningNumbers) {
    if (!LOTTO_BONUS_NUMBER_REGEX.test(bonusNumber))
      throw new LottoError('입력이 잘못되었습니다.');

    if (winningNumbers.includes(bonusNumber))
      throw new LottoError('로또 당첨번호와 중복됩니다.');
  }

  async #readBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(
          '보너스 번호를 입력해 주세요.\n'
        );

        this.#vaildateBonusNumber(bonusNumber, winningNumbers);
        return Number(bonusNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  calculatReturnRate(wonStats, purchaseAmount) {
    let lottoReturn = 0;
    wonStats.forEach((wonStat) => {
      const info = REWARD_INFOS.find(
        (rewardInfo) => rewardInfo.RANK === wonStat.rank
      );
      lottoReturn += wonStat.count * info.REWARD;
    });

    return ((lottoReturn / purchaseAmount) * 100).toFixed(1);
  }

  printWinnigStatistics(lottos, purchaseAmount, winningNumbers, bonusNumber) {
    const wonStats = [
      { rank: 5, count: 0 },
      { rank: 4, count: 0 },
      { rank: 3, count: 0 },
      { rank: 2, count: 0 },
      { rank: 1, count: 0 },
    ];
    lottos.forEach((lotto) => {
      const reward = lotto.findReward(winningNumbers, bonusNumber);
      if (reward)
        wonStats.find((wonStat) => wonStat.rank === reward.RANK).count++;
    });

    console.log(wonStats);

    Console.print('당첨 통계\n---');
    wonStats.forEach((wonStat) => {
      const info = REWARD_INFOS.find(
        (rewardInfo) => rewardInfo.RANK === wonStat.rank
      );
      Console.print(
        `${info.MATCH_COUNT}개 일치${
          info.BONUS ? ', 보너스 볼 일치' : ''
        } (${Intl.NumberFormat().format(info.REWARD)}원) - ${wonStat.count}개`
      );
    });

    const returnRate = this.calculatReturnRate(wonStats, purchaseAmount);
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }

  async play() {
    const purchaseAmount = await this.#readPurchaseAmount();
    const lottos = this.generatRandomLottos(purchaseAmount);
    const winningNumbers = await this.#readWinningNumbers();
    const bonusNumber = await this.#readBonusNumber(winningNumbers);

    this.printWinnigStatistics(
      lottos,
      purchaseAmount,
      winningNumbers,
      bonusNumber
    );
  }
}

export default App;
