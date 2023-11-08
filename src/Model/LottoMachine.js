import OutputView from "../View/OutputView.js";

class LottoMachine {
  constructor() {
    this.outputView = new OutputView();
  }
  
  calculateLottoCount(amount) {
    return Math.floor(amount / 1000);
  }
}

export default LottoMachine;
