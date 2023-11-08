import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const LOTTO_UNIT_PRICE = 1000;
const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;
const LOTTO_LENGTH = 6;
const WINNING_MESSAGES = [
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '6개 일치 (2,000,000,000원) - '
];

class App {
  async getLottoAmount() {
    const lottoAmount = parseInt(await Console.readLineAsync('구입금액을 입력해주세요.\n'));
    return lottoAmount;
  }

  validateLottoAmount(lottoAmount) {
    if (lottoAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1000원 단위로 입력되어야 합니다.');
    }
    return lottoAmount;
  }

  calculateLottoCount(lottoAmount) {
    return lottoAmount / LOTTO_UNIT_PRICE;
  }

  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  generateSingleLotto() {
    const lotto = Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_LENGTH);
    lotto.sort((a, b) => a - b);
    return lotto;
  }

  generateLottoNumbers(lottoCount) {
    this.lottoNumbers = [];
    for (let i = 0; i < lottoCount; i++) {
      const lotto = new Lotto(this.generateSingleLotto());
      this.lottoNumbers.push(lotto);
    }
  }

  printLottoNumbers() {
    for (const lotto of this.lottoNumbers) {
      Console.print(lotto.numbers);
    }
  }

  async getWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winningNumbers = new Lotto(winningNumbersInput.split(',').map(Number));
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = parseInt(await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'));
    if (bonusNumber > MAX_LOTTO_NUMBER || bonusNumbe < MIN_LOTTO_NUMBER) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    return bonusNumber;
  }
  calculateWinningStatistics(winningLotto, bonusNumber){
    let statistics = [0, 0, 0, 0, 0];
    const winningSet = new Set(winningLotto.numbers);
    this.lottoNumbers.forEach(lotto => {
      const intersection = lotto.numbers.filter((item) => winningSet.has(item));
      const intersectionCount = intersection.length;
      if (intersectionCount === 6) {
        statistics[0]++;
      } else if (intersectionCount === 5 && lotto.numbers.includes(bonusNumber)) {
        statistics[1]++;
      } else if (intersectionCount === 5) {
        statistics[2]++;
      } else if (intersectionCount === 4) {
        statistics[3]++;
      } else if (intersectionCount === 3) {
        statistics[4]++;
      }
    });
    return statistics;
  }

  printWinningStatistics(winningStatistics) {
    Console.print('\n당첨 통계');
    Console.print('---');
    for (let i = 0; i < winningStatistics.length; i++) {
      const message = WINNING_MESSAGES[i] + winningStatistics[i] + '개';
      Console.print(message);
    }
  }

async play() {
    const lottoAmount = await this.getLottoAmount();
    this.validateLottoAmount(lottoAmount);
    const lottoCount = this.calculateLottoCount(lottoAmount);
    this.printLottoCount(lottoCount);
    this.generateLottoNumbers(lottoCount);
    this.printLottoNumbers();
    const winningLotto = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();
    const winningStatistics = this.calculateWinningStatistics(winningLotto, bonusNumber);
    this.printWinningStatistics(winningStatistics);
  }
}

export default App;
