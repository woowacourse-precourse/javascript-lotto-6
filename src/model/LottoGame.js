import { Read } from "../utils/read.js";
import { Print } from "../utils/print.js";
import { LOTTO, REWARD } from "../constants/lotto.js";
import { Random } from "../utils/random.js";
import Lotto from "./Lotto.js";

class LottoGame {
  #winningResult = new Array(REWARD.length).fill(0);

  async start() {
    // 로또 구매
    const { purchaseAmount, lottos } = await this.#purchaseLottos();

    // 당첨 번호 입력 받기 (당첨 번호 유효성 체크 포함)
    const { answerNumbers, bonusNumbers } = await this.#getAnswerNumbers();

    // 각 등수별 당첨 횟수 구하기 => #winningResult에 저장
    lottos.forEach((lotto) => this.#addWinning(lotto, answerNumbers, bonusNumbers));

    // 당첨 통계 출력
    this.#printResult(purchaseAmount);
  }

  async #purchaseLottos() {
    // 구매 금액 입력 받기 (구매 금액 유효성 체크 포함)
    const purchaseAmount = await Read.purchaseAmount();

    // 구매 금액에 맞는 개수의 로또 발행
    const lottoArrs = this.#createLottos(purchaseAmount);
    const lottos = lottoArrs.map((lotto) => new Lotto(lotto));

    // 구매 내역 출력
    Print.purchaseLottos(lottoArrs);

    return { purchaseAmount, lottos };
  }

  async #getAnswerNumbers() {
    // 당첨 번호 입력 받기 (로또 번호 유효성 체크 포함)
    const answerNumbers = await Read.answerNumbers();

    // 보너스 번호 입력 받기 (보너스 번호 유효성 체크 포함)
    const bonusNumbers = await Read.bonusNumbers(answerNumbers);

    return { answerNumbers, bonusNumbers };
  }

  #printResult(purchaseAmount) {
    // 당첨 통계 출력
    Print.lottoResult(this.#winningResult);
    Print.lottoProfit(this.#getProfit(purchaseAmount));
  }

  /**
   * 로또 번호 생성
   * @param {number} purchaseAmount
   * @returns {number[][]}
   */
  #createLottos(purchaseAmount) {
    const count = purchaseAmount / LOTTO.PRICE;
    const lottos = new Array(count).fill(null).map(() => Random.lottoNumbers());

    return lottos;
  }

  /**
   * 당첨 결과 추가
   * @param {Lotto} lotto
   * @param {number[]} answerNumbers
   * @param {number[]} bonusNumbers
   */
  #addWinning(lotto, answerNumbers, bonusNumbers) {
    const { matchLotto, matchBonus } = lotto.getMatchCount(answerNumbers, bonusNumbers);
    const index = REWARD.findIndex(
      ({ match, bonus }) => match === matchLotto && matchBonus >= bonus
    );
    this.#winningResult[index]++;
  }

  /**
   * 수익률 구하기
   * @param {number} purchaseAmount
   * @returns {number}
   */
  #getProfit(purchaseAmount) {
    const totalReward = this.#winningResult.reduce(
      (total, count, index) => total + count * REWARD[index].reward,
      0
    );

    return ((totalReward / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoGame;
