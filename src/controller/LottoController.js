/* eslint-disable max-lines-per-function */
import Lotto from '../model/Lotto.js';
import Money from '../model/Money.js';
import BonusNumberValidator from '../service/BonusNumberValidator.js'
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { LOTTO, UTILS, RANKING, STATISTICS } from '../common/constants.js';
import { generateRandomNumber } from '../common/utils.js';
import InputValidator from '../service/InputValidator.js';

class LottoController {
  
  #money;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #ranking;

  #prize;

  #profit;

  constructor () {
    this.#money = 0;
    this.#lottos = [];
    this.#winningNumbers = []; 
    this.#bonusNumber = 0;
    this.#ranking = new Map(); // 당첨 내역 계산할 때 랭킹은 Map으로 관리
    this.#profit = 0;

    this.#initRankingMap();
  };

  // App.js에서 호출할 함수 (진입점)
  async start () {
    // 1. 구입 금액 입력 받기
    await this.#getInputMoney();
    
    // 2. 로또 개수 계산 후 출력
    const lottoCount = this.#calculateLottoCount();
  
    // 3. 입력 금액만큼 로또 만들기
    this.#createLottos(lottoCount);

    // 4. 만들어진 로또로 게임 진행
    this.#runGame();
  };

  // 1. 구입 금액 입력 받기
  async #getInputMoney () {
    this.#money = new Money(await InputView.getMoney());
  };

  #initRankingMap() {
    Object.keys(RANKING).forEach(key => {
      this.#ranking.set(key, 0)
    })
  }

  // 2. 로또 개수 계산 후 개수 출력
  #calculateLottoCount() {
    const lottoCount = this.#money.getAmount() / LOTTO.money_unit;
    OutputView.printLottoCount(lottoCount);
    return lottoCount;
  };

  // 3. 입력 금액만큼 로또 만든 후 출력
  #createLottos (lottoCount) {
    for (let count = 0; count < lottoCount; count += 1) {
      const generatedNumber = generateRandomNumber(LOTTO.min_number, LOTTO.max_number, LOTTO.max_match);
      this.#lottos.push(new Lotto(generatedNumber));
    }

    OutputView.printLottoNumbers(this.#lottos);
  };

  // 4. 만들어진 로또로 게임 진행
  async #runGame() {
    // 4-1. 당첨 번호 입력 받기
    await this.#getWinningNumbers();
    // 4-2. 보너스 번호 입력 받기
    await this.#getBonusNumber();

    // 4-3. 구매한 로또와 비교해 일치하는 당첨 번호 갯수와, 보너스 번호 일치 여부 판단하여 this.#ranking에 저장
    this.#compareLotto();
    // 4-4. 일치하는 갯수에 따라 당첨 통계 출력
    this.#printStatistics();
    // 4-5. 수익률 계산 후 출력
    this.#calculateProfit();    
  };

  // 4-1. 당첨 번호 입력 받기
  async #getWinningNumbers () {
    const inputNumber = await InputView.getWinningNumbers();
    const inputValidator = new InputValidator(inputNumber);
    inputValidator.validate();
    
    const lotto = new Lotto(inputNumber.split(UTILS.comma).map(Number));
    this.#winningNumbers = lotto.getNumbers();
  };

  // 4-2. 보너스 번호 입력 받기
  async #getBonusNumber () {
    const inputNumber = await InputView.getBonusNumber();
    const bonusNumbervalidator = new BonusNumberValidator(inputNumber);
    bonusNumbervalidator.validateUnique(this.#winningNumbers);

    this.#bonusNumber = bonusNumbervalidator.validate();
  };

  // 4-3. 구매한 로또와 비교해 일치하는 당첨 번호 갯수와, 보너스 번호 일치 여부 판단
  #compareLotto () {
    this.#lottos.forEach(lotto => {
      const matchedCount = this.#winningNumbers.filter(number => lotto.getNumbers().includes(number)).length;
      const bonus = lotto.getNumbers().includes(this.#bonusNumber);

      this.#calculateRanking(matchedCount, bonus);
    })
  };

  #calculateRanking(matchedCount, bonus) {
    Object.entries(RANKING).forEach(([key, rank]) => {
      if (rank.match === matchedCount && rank.bonus === bonus) {
        const existingValue = this.#ranking.get(key);
        this.#ranking.set(key, existingValue + 1);
      }
    });
  }
  
  // 4-4. 일치하는 갯수에 따라 당첨 통계 출력
  #printStatistics () {
    const statisticsArray = Array.from(this.#ranking).map(([key, count]) => `${RANKING[key].message}${count}${STATISTICS.count}`);
    const statistics = statisticsArray.join(UTILS.line_break)

    OutputView.printStatistics(statistics);
  };

  // 4-5. 수익률 계산 후 출력
  #calculateProfit() {
    const moneyAmount = this.#money.getAmount();
    const totalPrize = Array.from(this.#ranking).reduce((total, [key, count]) => {
      const rank = RANKING[key];
      return total + rank.prize * count;
    }, 0);
    const profit = (totalPrize / moneyAmount) * 100;
    OutputView.printProfit(profit);
  };  
};

export default LottoController;
