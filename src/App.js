import {
  printMethod,
  createPurchaseAmount,
  createLottoNumber,
  createBonusNumber,
} from './utils/index.js';
import { RandomNumber } from './lotto/index.js';
import { magicNumber, uiConstants } from './constants/index.js';

class App {
  async play() {
    // 구입비용, 로또 번호, 당첨 번호, 보너스 번호 입력 및 출력
    const [purchaseAmount, randomNumObj, lottoObj, bonusNumber] =
      await this.#printGameNumber();

    // 당첨결과 발표 출력문
    printMethod(uiConstants.WINNING_STATISTICS_MESSAGE);
    printMethod(uiConstants.BORDER_LINE);

    // 당첨결과 구하기 및 출력
    const moneyArr = this.#makeSumWinning(randomNumObj, bonusNumber, lottoObj);
    lottoObj.printWinningMoney(moneyArr);

    // 수익률 계산 및 출력
    const resultNum = this.calculateReturn(purchaseAmount, moneyArr);
    printMethod(uiConstants.RETURN + resultNum + uiConstants.END);
  }

  async #printGameNumber() {
    const [purchaseAmount, purchaseCnt] = await this.#makePurchaseAmount();

    // 랜덤 로또 번호들
    const randomNumObj = this.#makeRandomNumber(purchaseCnt);

    // 당첨 번호 및 보너스 번호
    const [lottoObj, lottoNumber] = await this.#makeLotto();
    const bonusNumber = await this.#makeBonus(lottoNumber);

    return [purchaseAmount, randomNumObj, lottoObj, bonusNumber];
  }

  async #makePurchaseAmount() {
    const purchaseAmount = await this.#createObj(
      magicNumber.PURCHASE_AMOUNT,
      null,
    );
    const purchaseCnt = purchaseAmount.getPurchaseCnt();
    printMethod(`\n${purchaseCnt}${uiConstants.RANDOM_NUMBER_CNT_MESSAGE}`);
    return [purchaseAmount, purchaseCnt];
  }

  #makeRandomNumber(purchaseCnt) {
    const randomNumber = new RandomNumber(purchaseCnt);
    randomNumber.printRandomNumber();
    const randomNumObj = randomNumber.getRandomNumber();
    return randomNumObj;
  }

  async #makeLotto() {
    const lotto = await this.#createObj(magicNumber.LOTTO, null);
    const lottoNumber = lotto.getLottoNumber();
    return [lotto, lottoNumber];
  }

  async #makeBonus(lottoNumber) {
    const bonus = await this.#createObj(magicNumber.BONUS, lottoNumber);
    const bonusNumber = bonus.getBonusNumber();
    return bonusNumber;
  }

  #makeSumWinning(randomNumObj, bonusNumber, lottoObj) {
    const [winningCnt, bonusCnt] = lottoObj.checkWinningCnt(
      randomNumObj,
      bonusNumber,
    );
    const moneyArr = lottoObj.createMoneyArr(winningCnt, bonusCnt);
    return moneyArr;
  }

  calculateReturn(purchaseAmount, moneyArr) {
    let sumMoney = magicNumber.ZERO;
    moneyArr.forEach((cnt, idx) => {
      const sum = magicNumber.ZERO;
      if (cnt >= magicNumber.ONE)
        sumMoney += cnt * magicNumber.WINNING_AMOUNT[idx];
    });
    let resultNum =
      (sumMoney / purchaseAmount.getPurchaseAmount()) * magicNumber.HUNDRED;

    resultNum =
      Math.round(resultNum * magicNumber.TEN).toPrecision(
        magicNumber.FLOATING_POINT,
      ) / magicNumber.TEN;
    return resultNum;
  }

  async #createObj(type, lotto) {
    let obj = magicNumber.ZERO;

    try {
      obj = await this.#createType(type, lotto);
    } catch (error) {
      printMethod(error.message);
      obj = await this.#createObj(type, lotto);
    }
    return obj;
  }

  async #createType(type, lotto) {
    let obj = magicNumber.ZERO;
    switch (type) {
      case 'purchaseAmount':
        obj = await createPurchaseAmount();
        break;
      case 'lotto':
        obj = await createLottoNumber();
        break;
      case 'bonus':
        obj = await createBonusNumber(lotto);
        break;
    }
    return obj;
  }
}

export default App;
