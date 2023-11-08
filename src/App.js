import UIUX from "./module/view/UIUX.js";

class App {
  async play() {
    const myCode = new UIUX();
    await myCode.inputMoney();
    myCode.useLottoGenerator();
    myCode.printHowMuchBuying();
    myCode.printLotto();
    await myCode.inputNumber();
    await myCode.inputBonusNumber();
    myCode.useWinnerDecider();
    myCode.printScoreBanner();
    myCode.printScore();
    myCode.printEarningRate();
  }
}

export default App;
