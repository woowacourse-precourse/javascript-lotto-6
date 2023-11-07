import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import UserLottoModel from '../domain/UserLottoModel';
import LottoMatcher from '../domain/LottoMatcher';

class LottoController {
  #userLottoModel;

  constructor() {
    this.#userLottoModel = new UserLottoModel();
  }
  
  async playGame() {
    try {
        // 금액 입력
        const ticketPrice = await InputView.getLottoNumbers();
        OutputView.printQuantity(ticketPrice);
  
        // 로또 생성
        this.#userLottoModel.generateLottoTicket(ticketPrice);
        const lottoTickets = this.#userLottoModel.getLottoTickets();
        OutputView.printLottoTickets(lottoTickets);
        
        // 당첨 번호 입력
        const winningNumbers = await InputView.getWinningNumbers();
 
        // 보너스 번호 입력
        const bonusNumbers = await InputView.getBonusNumbers();
        
        // 로또 판별
        const lottoMatcher = new LottoMatcher(lottoTickets, winningNumbers, bonusNumbers, ticketPrice);
        const result = lottoMatcher.countMatches();
  
        OutputView.printResultTitle();
  
        OutputView.printSeparator();
  
        OutputView.formatResults(result);
  
        OutputView.calculateProfitRate(result);
    } catch (error) {
        Console.print(error.message);
    }
  }
}

export default LottoController;
