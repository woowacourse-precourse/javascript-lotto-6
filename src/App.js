import PurchaseUI from './PurchaseUI.js';
import LottoUI from './LottoUI.js';
import WinningStatisticsUI from './WinningStatisticsUI.js';
import BonusUI from './BonusUI.js';

class App {
  async play() {
    const PURCHASE_UI = new PurchaseUI();
    const PURCHASE_UI_OUTPUT = await PURCHASE_UI.output();
    const LOTTO_UI = new LottoUI();
    const WINNING_NUMBERS = await LOTTO_UI.output();
    const BONUS_UI = new BonusUI(WINNING_NUMBERS);
    const BOUNUS_WINNING_NUMBER = await BONUS_UI.output();

    const WINNING_STATISTICS_UI = new WinningStatisticsUI(
      PURCHASE_UI_OUTPUT.AMOUNT,
      PURCHASE_UI_OUTPUT.PURCHASED_LOTTO_LIST,
      WINNING_NUMBERS,
      BOUNUS_WINNING_NUMBER
    );

    WINNING_STATISTICS_UI.output();
  }
}

export default App;
