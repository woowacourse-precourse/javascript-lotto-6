import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import RandomNumberGenerator from '../../RandomNumberGenerator.js';
import GameMessageGenerator from '../../GameMessageGenerator.js';
import GameCalculator from '../../GameCalculator.js';
import { NUMBER } from '../../utils/constants.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.randomNumberGenerator = new RandomNumberGenerator();
    this.gameMessageGenerator = new GameMessageGenerator();
  }

  async start() {
    // 스타일 수정필요

    //구매 금액 유저인풋 얻기
    const PURCHASE_MONEY = await this.inputView.getUserInputPurchaseMoney();
    // 구매 금액 인풋 이용해서 로또 횟수 구하기
    const LOTTO_TRY_COUNT = PURCHASE_MONEY / NUMBER.purchaseMoneyDivisor;
    // 로또 횟수 이용해서 로또 발급(랜덤넘버)
    const PURCHASE_LOTTOS = this.randomNumberGenerator.getRandomNumberArray(LOTTO_TRY_COUNT);
    // 발급받은 모든 로또 번호 이용해서 로또번호 리스트 메시지 만들기
    const PURCHASE_LOTTOS_MESSAGES =
      this.gameMessageGenerator.getPurchaseLottosMessages(PURCHASE_LOTTOS);
    // 발급 받은 로또 번호 출력하기
    this.outputView.showPurchaseLottosOutput(LOTTO_TRY_COUNT, PURCHASE_LOTTOS_MESSAGES);
    // 당첨 번호 유저인풋 얻기
    const WINNING_NUMBERS = await this.inputView.getUserInputWinningNumbers();
    // 보너스 번호 유저인풋 얻기
    const BONUS_NUMBER = await this.inputView.getUserInputBonusNumber(WINNING_NUMBERS);
    // 발급받은 로또번호 어레이, 당첨번호, 보너스 번호 이용해서 게임 계산하기
    const GAME_CALCULATOR = new GameCalculator(PURCHASE_LOTTOS, WINNING_NUMBERS, BONUS_NUMBER);
    const WINNING_RESULT = GAME_CALCULATOR.calculate();
    // 계산된 객체이용해서 게임 결과 메시지 만들기
    const WINNING_RESULT_MESSAGE = this.gameMessageGenerator.getResultMessage(
      WINNING_RESULT,
      PURCHASE_MONEY
    );
    // 게임 결과 출력하기
    this.outputView.showGameResultOutput(WINNING_RESULT_MESSAGE);
  }
}

export default GameController;
