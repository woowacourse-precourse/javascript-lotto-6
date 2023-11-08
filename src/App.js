import input from './utils/input.js';
import print from './utils/print.js';
import getRandomUniqueNumbers from './utils/getRandomUniqueNumbers.js';
import Lotto from './Lotto.js';
import Computer from './Computer.js';
import CheckList from './datas/CheckList.js';
import { prize, rank } from './datas/prize.js';
import { NUMBER, PROMPT } from './datas/constants.js';

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
    print(`${this.#cost / NUMBER.divisor}개를 구매했습니다.`);
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

  async setLottos() {
    this.#cost = await this.getInput(PROMPT.costInput, 'cost');
    this.createLotto(this.#cost);
  }

  async setPrizeNumber() {
    const prizeNumberString = await this.getInput(PROMPT.prizeNumberInput, 'prizeNumber');
    this.#prizeNumber = prizeNumberString.split(',').map((elem) => Number(elem));
  }

  async setBonusNumber() {
    const bonusString = await this.getInput(PROMPT.bonusNumberInput, 'bonusNumber');
    this.#bonusNumber = Number(bonusString);
  }

  async play() {
    await this.setLottos();
    this.printLottos();

    await this.setPrizeNumber();
    await this.setBonusNumber();

    print(PROMPT.prize);
    print(PROMPT.dividingLine);

    this.computePrize();
    this.printPrizeResult();
  }
}

export default App;
