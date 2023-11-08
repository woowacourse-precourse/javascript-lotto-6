import {
  getMoney,
  makeLottos,
  getWinLottoInput,
  getResult,
  getWinLottoBonusInput,
  getStatistics,
} from "./Game.js";
class App {
  constructor() {
    this.money = 0;
    this.lottos = [];
    this.winLottoInput = [];
    this.winLottoBonusInput = 0;
    this.totalResult = [0, 0];
  }
  async play() {
    this.money = await getMoney();
    const lottoCnt = this.money / 1000;
    this.lottos = makeLottos(lottoCnt);
    this.winLottoInput = await getWinLottoInput();
    this.winLottoBonusInput = await getWinLottoBonusInput(this.winLottoInput);
    this.totalResult = getResult(
      this.lottos,
      this.winLottoInput,
      this.winLottoBonusInput
    );
    getStatistics(this.money, this.totalResult);
  }
}

export default App;
