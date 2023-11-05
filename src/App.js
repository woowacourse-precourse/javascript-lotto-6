import { PICK_NUMBERS, ONE_LOTTO_PRICE } from "./constants/lottoNumbers.js";

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

  makeLotto(money) {
    const howManyLotto = money / ONE_LOTTO_PRICE;
    const lottos = [];

    for (let i = 0; i < howManyLotto; i++) {
      lottos.push(
        Random.pickUniqueNumbersInRange(
          PICK_NUMBERS.START_RANGE,
          PICK_NUMBERS.END_RANGE,
          PICK_NUMBERS.HOW_MANY
        ).sort((a, b) => a - b)
      );
    }

    return lottos;
  }
}

export default App;
