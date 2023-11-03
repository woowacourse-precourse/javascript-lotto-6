import { Random, Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  async buyLotto() {
    const lottoPurchaseMoney =
      await Console.readLineAsync('구입금액을 입력해 주세요.');

    if (Number.isNaN(+lottoPurchaseMoney))
      throw new Error('[ERROR] 구입 금액이 잘못되었습니다.');

    if (lottoPurchaseMoney % 1000 !== 0)
      throw new Error('[ERROR] 구입 금액이 잘못되었습니다.');

    const lottoPieces = lottoPurchaseMoney / 1000;
    return lottoPieces;
  }

  createLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumber.sort((a, b) => a - b);
  }
}

export default Lotto;
