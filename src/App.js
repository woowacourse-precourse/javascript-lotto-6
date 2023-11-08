import { Console, Random } from '@woowacourse/mission-utils';

const LOTTO_UNIT_PRICE = 1000;

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

  async play() {
    const lottoAmount = await this.getLottoAmount();
    this.validateLottoAmount(lottoAmount);
    const lottoCount = this.calculateLottoCount(lottoAmount);
    this.printLottoCount(lottoCount);
  }
}

export default App;
