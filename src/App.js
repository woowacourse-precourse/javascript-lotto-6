import input from './utils/input';
import print from './utils/print';
import getRandomUniqueNumbers from './utils/getRandomUniqueNumbers';
import Lotto from './Lotto';
import Computer from './Computer';
import CheckList from './datas/CheckList';
import { prize, rank } from './datas/prize';
import { NUMBER, PROMPT, INPUT_TYPE } from './datas/constants';

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

  computePrize() {
    this.#computer = new Computer(this.#prizeNumber, this.#bonusNumber, this.#cost);
    this.#computer.setPrizeResult(this.#lottos);
  }

  printLottos() {
    print(`${this.#cost / NUMBER.divisor}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      print(`[${lotto.getNumbers().join(', ')}]`);
    });
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
    this.#cost = await this.getInput(PROMPT.costInput, INPUT_TYPE.cost);
    this.createLotto(this.#cost);
  }

  async setPrizeNumber() {
    const prizeNumberString = await this.getInput(PROMPT.prizeNumberInput, INPUT_TYPE.prizeNumber);
    this.#prizeNumber = prizeNumberString.split(',').map((elem) => Number(elem));
  }

  async setBonusNumber() {
    const bonusString = await this.getInput(PROMPT.bonusNumberInput, INPUT_TYPE.bonusNumber);
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
