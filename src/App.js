import input from './utils/input.js';
import print from './utils/print.js';
import getRandomUniqueNumbers from './utils/getRandomUniqueNumbers.js';
import Lotto from './Lotto.js';
import Computer from './Computer.js';
import CheckList from './datas/CheckList.js';
import { prize, rank } from './datas/prize.js';
import { NUMBER, PROMPT } from './datas/constants.js';

const inputStep = {
  cost: {
    prompt: PROMPT.costInput,
  },
  winnerNumbers: {
    prompt: PROMPT.prizeNumberInput,
  },
  bonusNumber: {
    prompt: PROMPT.bonusNumberInput,
  },
};

class App {
  #lottos;
  #cost;
  #prizeNumber;
  #bonusNumber;
  #computer;

  checkValidation(inputValue, checkList) {
    const inValidObject = checkList.find((elem) => !elem.check(inputValue, this.#prizeNumber));
    const isValid = inValidObject === undefined;

    if (!isValid) {
      throw new Error(inValidObject.errorMessage);
    }
  }

  async getInput(prompt, inputType) {
    while (true) {
      try {
        const inputValue = await input(prompt);
        this.checkValidation(inputValue, CheckList[inputType]);

        return inputValue;
      } catch (error) {
        print(error.message);
      }
    }
  }

  createLotto(cost) {
    const lottoNumber = Array.from({ length: cost / NUMBER.divisor }, (_, i) => i);

    this.#lottos = lottoNumber.map((elem) => {
      const randomNumbers = getRandomUniqueNumbers();
      return new Lotto(randomNumbers);
    });
  }

  printLottos() {
    print(`${this.#cost / 1000}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  computePrize() {
    this.#computer = new Computer(this.#prizeNumber, this.#bonusNumber, this.#cost);
    this.#computer.setPrizeResult(this.#lottos);
  }

  printPrizeResult() {
    const reuslt = this.#computer.getPrizeResult();
    rank.reverse().forEach((elem) => {
      print(
        `${prize[elem].standard} (${prize[elem].money.toLocaleString()}원) - ${reuslt[elem]}개`,
      );
    });

    print(`총 수익률은 ${this.#computer.getProfitRatio()}입니다.`);
  }

  async play() {
    this.#cost = await this.getInput(inputStep.cost.prompt, 'cost');
    this.createLotto(this.#cost);
    this.printLottos();

    const prizeNumberString = await this.getInput(inputStep.winnerNumbers.prompt, 'prizeNumber');
    this.#prizeNumber = prizeNumberString.split(',').map((elem) => Number(elem));

    const bonusString = await this.getInput(inputStep.bonusNumber.prompt, 'bonusNumber');
    this.#bonusNumber = Number(bonusString);

    print(PROMPT.prize);
    print(PROMPT.dividingLine);

    this.computePrize();
    this.printPrizeResult();
  }
}

export default App;
