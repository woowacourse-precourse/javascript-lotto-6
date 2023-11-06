import { Random, Console } from '@woowacourse/mission-utils';
import LottoError from './LottoError.js';
import Lotto from './Lotto.js';
import { LOTTO_PRIZE, NUMBERS_REGEX, REWARD_INFOS } from './constants.js';

class App {
  winningNumbers = [];
  bonusNumber;

  generatRandomLottos(purchaseAmount) {
    if (purchaseAmount % LOTTO_PRIZE != 0)
      throw new LottoError(`로또 구입 금액은 ${LOTTO_PRIZE}원 단위입니다.`);

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

  async #readWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );

    let winningNumbers = winningNumbersInput.split(',');

    winningNumbers = winningNumbers.map((number) => {
      if (number.length == 0 || !NUMBERS_REGEX.test(number)) {
        throw new LottoError('당첨번호의 입력이 잘못되었습니다.');
      }
      if (Number(number) < 1 || Number(number) > 45)
        throw new LottoError('로또 번호는 1~45입니다.');
      return Number(number);
    });

    return winningNumbers;
  }

  async #readBonusNumber() {
    const bonusNumberInput = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
    if (!NUMBERS_REGEX.test(bonusNumberInput))
      throw new LottoError('숫자만 입력해야합니다.');

    const bonusNumber = Number(bonusNumberInput);
    if (bonusNumber < 1 || bonusNumber > 45)
      throw new LottoError('로또 번호는 1~45입니다.');

    return bonusNumber;
  }

  calculatReturnRate(wonStats, purchaseAmount) {
    let lottoReturn = 0;
    wonStats.forEach((wonStat) => {
      const info = REWARD_INFOS.find(
        (rewardInfo) => rewardInfo.RANK === wonStat.rank
      );
      lottoReturn += wonStat.count * info.REWARD;
    });

    return ((lottoReturn / purchaseAmount) * 100).toFixed(2);
  }

  printWinnigStatistics(lottos, purchaseAmount) {
    const wonStats = [
      { rank: 5, count: 0 },
      { rank: 4, count: 0 },
      { rank: 3, count: 0 },
      { rank: 2, count: 0 },
      { rank: 1, count: 0 },
    ];
    lottos.forEach((lotto) => {
      const reward = lotto.findReward(this.winningNumbers, this.bonusNumber);
      if (reward)
        wonStats.find((wonStat) => wonStat.rank === reward.RANK).count++;
    });

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

    Console.print(`${this.calculatReturnRate(wonStats, purchaseAmount)}%`);
  }

  async play() {
    const purchaseAmount = await Console.readLineAsync(
      '로또 구입 금액을 입력해 주세요.\n'
    );
    const lottos = this.generatRandomLottos(Number(purchaseAmount));

    this.winningNumbers = await this.#readWinningNumbers();
    this.bonusNumber = await this.#readBonusNumber();
    if (this.winningNumbers.includes(this.bonusNumber))
      throw new LottoError('로또 번호는 중복 될 수 없습니다.');

    this.printWinnigStatistics(lottos, Number(purchaseAmount));
  }
}

export default App;
