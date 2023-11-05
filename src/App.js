class App {
  #money;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.lottoBoard = {
      threeSame: 0,
      fourSame: 0,
      fiveSame: 0,
      fiveAndBonusSame: 0,
      sixSame: 0,
      rateOfReturn: 0,
    };
  }

  async play() {}
}

export default App;
