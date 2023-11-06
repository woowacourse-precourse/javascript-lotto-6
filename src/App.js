import { Random, Console } from '@woowacourse/mission-utils';
import LottoError from './LottoError.js';
import Lotto from './Lotto.js';
import { LOTTO_PRIZE } from './constants.js';
import { NUMBERS_REGEX } from './constants.js';

class App {
  #generatRandomLottos(purchaseAmount) {
    if (purchaseAmount % LOTTO_PRIZE != 0)
      throw new GameError(`로또 구입 금액은 ${LOTTO_PRIZE}원 단위입니다.`);

    const lottoAmount = purchaseAmount / 1000;
    Console.print(`${lottoAmount}개를 구매했습니다.`);

    const lottos = [];
    for (let i = 0; i < lottoAmount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const newLotto = new Lotto(lottoNumbers);
      newLotto.printLottoNumbers();
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

  async play() {
    const purchaseAmount = await Console.readLineAsync(
      '로또 구입 금액을 입력해 주세요.\n'
    );
    const lottos = this.#generatRandomLottos(Number(purchaseAmount));
    const winningNumbers = await this.#readWinningNumbers();
    const bonusNumber = await this.#readBonusNumber();

    Console.print(winningNumbers);
    Console.print(bonusNumber);
  }
}

export default App;
