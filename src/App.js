import input from './utils/input.js';
import print from './utils/print.js';
import getRandomUniqueNumbers from './utils/getRandomUniqueNumbers.js';
import Lotto from './Lotto.js';
import isValidCost from './modules/isValidCost.js';
import isValidWinnerNumber from './modules/isValidWinnerNumber.js';
import isValidBonusNumber from './modules/isValidBonusNumber.js';

const inputStep = {
  cost: {
    prompt: '구입금액을 입력해 주세요.\n',
    validate: isValidCost,
  },
  winnerNumbers: {
    prompt: '당첨 번호를 입력해 주세요\n',
    validate: isValidWinnerNumber,
  },
  bonusNumber: {
    prompt: '보너스번호를 입력해 주세요\n',
    validate: isValidBonusNumber,
  },
};

class App {
  #lottos;

  async getInput(prompt, validateFunc) {
    while (true) {
      try {
        const inputValue = await input(prompt);
        validateFunc(inputValue);
        return inputValue;
      } catch (error) {
        print(error.message);
      }
    }
  }

  createLotto(cost) {
    const lottoNumber = Array.from({ length: cost / 1000 }, (_, i) => i);
    this.#lottos = lottoNumber.map((elem) => {
      const randomNumbers = getRandomUniqueNumbers();
      return new Lotto(randomNumbers);
    });
  }

  async play() {
    const cost = await this.getInput(inputStep.cost.prompt, inputStep.cost.validate);
    this.createLotto(cost);
    print(`${cost / 1000}개를 구매했습니다.`);

    this.#lottos.forEach((lotto) => {
      print(`[${lotto.getNumbers().join(', ')}]`);
    });

    let winnerNumbers = await this.getInput(
      inputStep.winnerNumbers.prompt,
      inputStep.winnerNumbers.validate,
    );
    winnerNumbers = winnerNumbers.split(',').map((elem) => Number(elem));

    let bonusNumber = await this.getInput(inputStep.bonusNumber.prompt, (input) => {
      inputStep.bonusNumber.validate(input, winnerNumbers);
    });
    bonusNumber = Number(bonusNumber);
  }
}

export default App;
