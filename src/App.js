import { LOTTO_MESSAGES } from './constants/lottoMessage.js';
import { asyncFnHandlerWithError } from './utils/asyncFnHandlerWithError.js';
import { InputView } from './views/InputView.js';
import { OutputView } from './views/OutputView.js';
import Money from './domains/Money.js';
import Lotto from './Lotto.js';
import WinningLotto from './domains/WinningLotto.js';
import Reward from './domains/Reward.js';
import { REWARD_MESSAGES } from './constants/rewardMessage.js';

class App {
  /**
   * @type { number } 로또 구입 갯수
   */

  #lottoAmount;

  /**
   * @type { Lotto[] } 구입한 총 로또
   */

  #lottos;

  /**
   * @type { Lotto } 당첨 로또 번호
   */

  #winningLottoNumbers;

  /**
   * @type { WinningLotto } 최종적인 당첨 번호
   */

  #totalWinningLotto;

  /**
   * @type { string[] } 통계 결과
   */

  #statisticsResult;

  async play() {
    await asyncFnHandlerWithError(this.getLottoAmount, this);
    this.printLottos();
    await asyncFnHandlerWithError(this.getWinningNumbers, this);
    await asyncFnHandlerWithError(this.getTotalWinningNumbers, this);
    this.printRewards();
  }

  async getLottoAmount() {
    const money = await InputView.readLine(LOTTO_MESSAGES.input_money);
    this.#lottoAmount = Money.getLottoAmount(money);
    OutputView.divideLine();
  }

  printLottos() {
    OutputView.printLine(LOTTO_MESSAGES.buy_lottos(this.#lottoAmount));
    this.#lottos = Lotto.getPurchasedLottos(this.#lottoAmount);
    this.#lottos.forEach((lotto) => OutputView.printLine(lotto.toStringFromNumbers()));
    OutputView.divideLine();
  }

  async getWinningNumbers() {
    const inputWinningNumbers = await InputView.readLine(LOTTO_MESSAGES.input_winning_numbers);
    this.#winningLottoNumbers = Lotto.fromInputString(inputWinningNumbers);
    OutputView.divideLine();
  }

  async getTotalWinningNumbers() {
    const inputBonusNumber = await InputView.readLine(LOTTO_MESSAGES.input_bonus_number);
    this.#totalWinningLotto = new WinningLotto(this.#winningLottoNumbers, inputBonusNumber);
    OutputView.divideLine();
  }

  printRewards() {
    OutputView.printLine(REWARD_MESSAGES.winning_statistics_start);
    const reward = new Reward(this.#totalWinningLotto);
    this.#statisticsResult = reward.calculateReward(this.#lottos);
    this.#statisticsResult.forEach((result) => OutputView.printLine(result));
  }
}

export default App;
