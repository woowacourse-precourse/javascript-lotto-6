import LottoPlayer from './LottoPlayer.js';
import LottoMachine from './LottoMachine.js';

class DongHangLottery {
  constructor() {
    this.player = new LottoPlayer();
    this.machine = new LottoMachine();
  }

  async play() {
    await this.purchaseLotto();
    this.printUserPurchaseLottoAmount();
    this.userByLottoList();
    this.printUserLottoList();
    await this.setWinningNumbers();
    await this.setPlusNumber();
    this.checkResults();
    this.printResults();
  }

  async purchaseLotto() {
    await this.player.setPurchaseAmount();
  }

  printUserPurchaseLottoAmount() {
    this.player.printUserPurchaseLottoAmount();
  }

  userByLottoList() {
    this.player.userByLottoList();
  }

  printUserLottoList() {
    this.player.printUserLottoList();
  }

  async setWinningNumbers() {
    await this.machine.setWinningNumber();
  }

  async setPlusNumber() {
    await this.machine.setPlusNumber();
  }

  checkResults() {
    const userLottoList = this.player.getUserLottoList();
    const winningRecordResult = this.machine.checkLottoResult(userLottoList);
    this.player.setWinnigLottoResult(winningRecordResult);
    this.player.calculRateOfReturn();
  }

  printResults() {
    this.player.printWinnigReulst();
    this.player.printRavenue();
  }
}

export default DongHangLottery;
