import User from './User.js';
import LottoManager from './LottoManager.js';
import CheckManager from './CheckManager.js';
import Board from './Board.js';

class App {
  async play() {
    const user = new User();
    await user.readAndSetUserMoney();
    const lottoManager = await LottoManager.readSetLuckyNumber();
    await lottoManager.readAndSetBonusNumber(lottoManager.getLuckyNumber());
    const checkManager = new CheckManager(
      lottoManager.getLuckyNumber(),
      lottoManager.getBonusNumber(),
      user.getCount(),
    );
    const resultBoard = new Board();
    resultBoard.printResult(checkManager.getRanks())
    resultBoard.printRevenue(checkManager.getRanks())
  }
}

export default App;
