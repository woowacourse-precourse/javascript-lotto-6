import Game from "./Game";

class App {
  async play() {
    const game = new Game();

    const lottoCnt = await game.getInputLoop(game.getUserMoney);

    const lottoAry = game.createAndPrintLottoTickets(lottoCnt);

    const winningNumbers = await game.getInputLoop(game.getWinningNumber);

    const bonusNumber = await game.getInputLoop(game.getBonusNumber, [winningNumbers]);

    const winInfoAry = [0, 0, 0, 0, 0, 0, 0];
    lottoAry.forEach((lotto) => {
      const rank = lotto.calculateLottoRank(winningNumbers, bonusNumber);
      winInfoAry[rank]++;
    });

    game.printLottoResult(winInfoAry, lottoCnt);

    game.printRateOfReturn(winInfoAry, lottoCnt);
  }
}

export default App;
