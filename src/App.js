import Game from "./Game";

class App {
  async play() {
    const game = new Game();

    const lottoCnt = await game.getInputLoop(game.getUserMoney);

    const lottoAry = game.createAndPrintLottoTickets(lottoCnt);

    const winningNumbers = await game.getInputLoop(game.getWinningNumber);

    const bonusNumber = await game.getInputLoop(game.getBonusNumber, [winningNumbers]);



  }
}

export default App;
