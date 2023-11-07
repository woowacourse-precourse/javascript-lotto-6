import { Console } from "@woowacourse/mission-utils";
import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import Purchase from "../model/Purchase";
import BonusNumber from "../model/BonusNumber";
import Lotto from "../model/Lotto";

/**
 * 구현한 모델과 뷰를 이용하여 전체 흐름을 주도하는 클래스
 */
class LottoController {
  #inputView;
  #outputView;
  #purchase;
  #purchaseAmount;
  #winningNumber;
  #bonusNumber;
  #lotto;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  /**
   * 로또 과제 시작 함수
   */
  async process() {
    await this.#purchaseProcess();
    const purchaseNumber = this.#purchase.purchaseNumber();
    const randomNumbers = this.#purchase.createRandomNumbers();

    this.#outputView.purchaseResultView(purchaseNumber, randomNumbers);

    await this.#winningNumberProcess();
    await this.#bonusNumberProcess();

    const winningResult = this.#lotto.winningResult(randomNumbers, this.#bonusNumber);
    const rate = this.#lotto.rateResult(this.#purchaseAmount, winningResult);

    this.#outputView.winningResultView(winningResult, rate);
  }

  /**
   * 구매 과정을 진행하며 Error가 생길 시 출력 후 다시 입력받는 함수
   */
  async #purchaseProcess() {
    while (true) {
      try {
        this.#purchaseAmount = await this.#inputView.inputPurchase();
        this.#purchase = new Purchase(this.#purchaseAmount);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  /**
   * 당첨 번호 입력을 진행하며 Error가 생길 시 출력 후 다시 입력받는 함수
   */
  async #winningNumberProcess() {
    while (true) {
      try {
        this.#winningNumber = await this.#inputView.inputWinningNumber();
        this.#lotto = new Lotto(this.#winningNumber);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  /**
   * 보너스 번호 입력을 진행하며 Error가 생길 시 출력 후 다시 입력받는 함수
   */
  async #bonusNumberProcess() {
    while (true) {
      try {
        this.#bonusNumber = await this.#inputView.inputBonusNumber();
        const bonusNumber = new BonusNumber(this.#bonusNumber, this.#winningNumber);
        this.#bonusNumber = bonusNumber.convertNumber();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default LottoController;
