import LottoMachine from './Controller/LottoMachine.js';
import TicketMachine from './Controller/TicketMachine.js';
import WinStastics from './Controller/WinStastics.js';
import Printer from './View/Printer.js';
import LottoTicket from './Model/LottoTicket.js';
import Interface from './View/Interface.js';

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.ticketMachine = new TicketMachine();
    this.winStastics = new WinStastics();
    this.lottoTicket = LottoTicket.getInstance();
  }

  async play() {
    // 로또 티켓 구매
    await this.buyTicket();

    // 당첨번호와 보너스 번호 설정
    await this.setWinngNumber();
    await this.setBonusNumber();

    // 티켓과 당첨번호를 토대로 당첨 통계를 설정한다.
    this.setWinningstatistics();
    Printer.printStatistics(this.winStastics.statistics);
  }

  async buyTicket() {
    try {
      await this.ticketMachine.buyTicket();
      Printer.printLottoTicket(this.lottoTicket.ticket);
    } catch (error) {
      await this.buyTicketErrorHandler(error);
    }
  }

  async buyTicketErrorHandler(error) {
    Printer.printBuyTicketErrorMessage(error);
    await this.buyTicket();
  }

  async setWinngNumber() {
    try {
      const winNums = await Interface.requestWinNums();
      this.lottoMachine.createWinNum(winNums);
    } catch (error) {
      await this.winNumsErrorHandler(error);
    }
  }

  async winNumsErrorHandler(error) {
    Printer.printWinNumsErrorMessage(error);
    await this.setWinngNumber();
  }

  async setBonusNumber() {
    try {
      const bonusNum = await Interface.requestBonusNum();
      this.lottoMachine.createBonusNum(bonusNum);
    } catch (error) {
      await this.bonusNumErrorHandler(error);
    }
  }

  async bonusNumErrorHandler(error) {
    Printer.printBonusNumErrorMessage(error);
    await this.setBonusNumber();
  }

  setWinningstatistics() {
    this.winStastics.setMatchesCount();
    this.winStastics.setEarningRate();
  }
}

export default App;
