import Lotto from './Lotto.js';
import BonusLotto from './BonusLotto.js';
import Constants from '../utils/Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class LottoLogic {
  // 로또 로직을 돌린 후에 결과를 반환
  // 결과는 배열 형태로 반환

  #lotto; // 당첨번호
  #bonusLotto; // 보너스번호
  #money; // 구매한 로또 금액
  #generatedLottos;

  constructor(lotto, bonusLotto, money) {
    this.#lotto = lotto;
    this.#bonusLotto = bonusLotto;
    this.#money = money;
  }

  async start() {
    const result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      miss: 0,
    };
    const count = await this.#money.getCount();
    const generatedLottos = await this.#generateLottos(count);
    this.#generatedLottos = generatedLottos;
    const lotto = this.#lotto;
    const bonusNum = await this.#bonusLotto.getNumber();

    for (let i = 0; i < count; i++) {
      await this.#getResult(lotto, generatedLottos, i, result, bonusNum);
    }

    return result;
  }

  async #getResult(lotto, generatedLottos, i, result, bonusNum) {
    const matchCount = await lotto.compare(generatedLottos[i]);
    if (matchCount === 6) {
      result[1]++;
      return;
    }
    if (matchCount === 5) {
      this.#checkBonusNum(generatedLottos, i, result, bonusNum);
      return;
    }
    if (matchCount === 4) {
      result[4]++;
      return;
    }
    if (matchCount === 3) {
      result[5]++;
      return;
    }
    result['miss']++;
    return;
  }

  async #checkBonusNum(generatedLottos, i, result, bonusNum) {
    if (await generatedLottos[i].isBonusInclude(bonusNum)) {
      result[2]++;
      return;
    } else {
      result[3]++;
      return;
    }
  }

  async #generateLotto() {
    const randomArr = await this.#randomArr();
    await randomArr.sort((a, b) => a - b);
    const lotto = new Lotto(randomArr);
    return lotto;
  }

  async #generateLottos(count) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(await this.#generateLotto());
    }
    return result;
  }

  async #randomArr() {
    const constants = new Constants();
    return MissionUtils.Random.pickUniqueNumbersInRange(
      constants.getLottoNumberMin(),
      constants.getLottoNumberMax(),
      constants.getLottoNumberCount()
    );
  }

  async getGeneratedLottosArr() {
    const result = [];
    for (let i = 0; i < this.#generatedLottos.length; i++) {
      result.push(await this.#generatedLottos[i].getNumbers());
    }
    return result;
  }

  async getCount() {
    return await this.#money.getCount();
  }

  async getLotto() {
    return this.#lotto;
  }

  async getBonusLotto() {
    return this.#bonusLotto;
  }

  async getMoney() {
    return await this.#money;
  }
}

// test done!
// const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
// const bonusLotto = new BonusLotto(7, [1, 2, 3, 4, 5, 6]);
// const lottoLogic = new LottoLogic(lotto, bonusLotto, 100000);
// console.log(await lottoLogic.start());

export default LottoLogic;
