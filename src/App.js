import lottoGame from "./lottoGame.js"
import gameEnd from "./lottoGameEnd.js";

class App {
  async play() {

    
    let winList = { 3: 0, 4: 0, 5: 0, 51: 0, 6: 0}
  
    const GAME = new lottoGame();
    const LOTTO_COUNT = await GAME.lottoMoneyInput();
    const LOTTO_NUMBERS = GAME.lottoCount(LOTTO_COUNT);
    const LOTTO_WIN_NUMBER = await GAME.lottoWinNumber();
    const LOTTO_BONUS_NUMBER = await GAME.lottoBonusNuber(LOTTO_WIN_NUMBER);
    const GAME_END = new gameEnd();
    GAME_END.lottoMacth(LOTTO_WIN_NUMBER,LOTTO_BONUS_NUMBER,LOTTO_NUMBERS, winList);
    const REVENUE = GAME_END.lottoRevenue(winList);
    const END_MONEY = GAME_END.lottoMoneyPercent(LOTTO_COUNT,REVENUE);
    GAME_END.lottoEndPrint(winList,END_MONEY);
  }
}





export default App;
