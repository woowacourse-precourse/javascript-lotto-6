import { MissionUtils } from '@woowacourse/mission-utils';
import GameView from './GameView';
import { GameText } from '../Message';
import GameUtil from './GameUtil';
import GameModel from './GameModel';

export default class GameController {
  constructor() {
    this.view = new GameView();
    this.util = new GameUtil();
    this.model = new GameModel();
  }
  async start() {
    // 로또 구매 금액을 입력받음
    this.view.printGameMessage(GameText.GET_BUYING_MONEY);
    const buyingMoney = await this.getUserInput();
    MissionUtils.Console.print(`사용자 입력 금액 ${buyingMoney}`);
    this.util.buyingMoneyValidator(buyingMoney);

    // 로또 번호를 생성하고 출력
    this.model.lottoCount(buyingMoney);
    this.model.generateLotto(this.model.LOTTO_COUNT);
    this.view.printLottos(this.model.LOTTOS, this.model.LOTTO_COUNT);

    // 당첨번호 생성
    this.view.printGameMessage(GameText.GET_WINNING_NUMBER);
    const winningNumber = await this.getUserInput();
    this.model.generateWinningNumber(winningNumber.split(','));
    this.view.printWinningNumber(this.model.WINNING_NUMBER.join(', '));

    // 보너스번호 생성
    this.view.printGameMessage(GameText.GET_BOUNS_NUMBER);
    const bonusNumber = await this.getUserInput();
    this.model.generateBonusNumber(bonusNumber);
    this.view.printWinningNumber(this.model.BONUS_NUMBER);

    // 당첨 결과 생성
    this.model.calculateResult();
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync();
    return userInput;
  }
}
