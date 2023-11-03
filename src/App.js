import Credit from "./Credit.js";
class App {
  constructor() {
    this.Credit = new Credit();
  }
  async play() {
    const credit = await this.Credit.getCredit();
    const amoutOfLotto = this.Credit.getAmountOfLotto(credit);
    this.Credit.printAmountOfLotto(amoutOfLotto);
  }
}

export default App;
