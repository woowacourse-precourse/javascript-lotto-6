import Lotto from "./Lotto.js";
import LottoMachine from "./LottoMachine.js";

class LottoGame {
  #lottoTickets;

  constructor() {
    this.#lottoTickets = [];
  }

  purchaseLotto = (money) => {
    const lottoCount = money / 1000;
    const lottoList = [];
    const lottoMachine = LottoMachine();
    let isLottoValid = false;
    let generateCount = 0;

    while (!isLottoValid) {
      const lottoArray = lottoMachine.generateLottoNumbers();

      try {
        const lotto = new Lotto(lottoMachine.sortLottoNumbers(lottoArray));
        lottoList.push(lotto.getNumbers());
        this.#lottoTickets.push(lotto.getNumbers());
        generateCount++;
      } catch (error) {
        console.error(error.message);
      }

      if (generateCount === lottoCount) {
        isLottoValid = true;
      }
    }
  };

  getLottoTickets = () => {
    return this.#lottoTickets;
  };
}

export default LottoGame;
