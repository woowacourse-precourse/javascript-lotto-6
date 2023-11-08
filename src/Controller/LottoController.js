import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Model/Lotto.js';
import validator from '../Validator/validator.js';

class LottoController {
  constructor() {
    this.AMOUNT = 0;
    this.lottoList = [];
    this.winLottoNumbers = [];
    this.bonusNumber = 0;
    this.lotto;
  }

  // 게임 시작
  async startGame() {
    const purchaseAmount = await InputView.inputPurchaseAmount();
    this.AMOUNT = purchaseAmount;

    this.createLottoNumberList();

    const winLottoNumber = await InputView.inputLottoNumbers();
    this.winLottoNumbers = winLottoNumber;

    this.lotto = this.createLotto();

    const inputBonusNumber = await InputView.inputBonusNumber();
    //validator.validateBonusNumber(inputBonusNumber, this.winLottoNumbers);

    this.bonusNumber = inputBonusNumber;

    this.calculatePrizes();
  }

  // 로또 번호 생성
  generateLottoNumbers() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumber.sort((a, b) => a - b);
    return randomNumber;
  }

  createLottoNumberList() {
    for (let i = 0; i < this.AMOUNT; i++) {
      this.lottoList.push(this.generateLottoNumbers());
    }
    OutputView.printLottoNumbers(this.AMOUNT, this.lottoList);
  }

  createLotto() {
    const lotto = new Lotto(this.winLottoNumbers);
    return lotto;
  }

  // 당첨 통계 계산
  calculatePrizes() {
    const results = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };
    this.lottoList.forEach(lottoNumbers => {
      const matchCount = this.countMatchNumbers(lottoNumbers);
      let prize = 0;
      if (matchCount === 6) {
        prize = 6;
      } else if (matchCount === 5 && lottoNumbers.includes(this.bonusNumber)) {
        prize = 5.5;
      } else if ([3, 4, 5].includes(matchCount)) {
        prize = matchCount;
      }
      if (prize > 1) results[prize]++;
    });
    OutputView.printPrize(results);
  }

  countMatchNumbers(lottoNumbers) {
    let count = 0;
    lottoNumbers.forEach(num => {
      if (this.winLottoNumbers.includes(num)) count += 1;
    });
    return count;
  }
}

export default LottoController;
