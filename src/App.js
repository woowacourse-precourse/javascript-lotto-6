import { MissionUtils } from '@woowacourse/mission-utils';
import STRINGS from './constants/STRINGS';
import Validation from './Validation';
import Lotto from './Lotto';

class App {
  async play() {
    this.startGame();
  }

  async startGame() {
    const lottos = await this.getLottoAmount();
    const { answers, bonusNumber } = await this.getAnswerNumbers();
    const results = await this.getResult(lottos, answers, bonusNumber);
    this.calculateMatches(results, lottos.length);
  }

  async getLottoAmount() {
    const INPUT_LOTTO_AMOUNT = await MissionUtils.Console.readLineAsync(
      STRINGS.PAY_INPUT
    );
    return this.countLottoAmount(INPUT_LOTTO_AMOUNT);
  }

  async countLottoAmount(inputLottoAmount) {
    Validation.validateInputPrice(inputLottoAmount);
    const LOTTO_AMOUNT = inputLottoAmount / 1000;
    MissionUtils.Console.print(STRINGS.PAY_RESULT(LOTTO_AMOUNT));
    return this.createLottos(LOTTO_AMOUNT);
  }

  async createLottos(lottoAmount) {
    const lottos = [];
    for (let i = 0; i < lottoAmount; i++) {
      const RANDOM_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const lotto = new Lotto(RANDOM_NUMBERS);
      lottos.push(lotto.numbers);
      lotto.printLottos(RANDOM_NUMBERS);
    }
    return lottos;
  }

  async getAnswerNumbers() {
    const ANSWER_NUMBERS = await MissionUtils.Console.readLineAsync(
      STRINGS.ANSWER_NUMBERS
    );
    Validation.validateAnswerNumbersComma(ANSWER_NUMBERS);
    Validation.repeatedAnswerNumbers(ANSWER_NUMBERS);
    Validation.validateNumbersLength(ANSWER_NUMBERS.split(','));
    return this.getBonusNumber(ANSWER_NUMBERS);
  }

  async getBonusNumber(answerNumbers) {
    const answers = [];
    const INPUT_BONUS_NUMBER = await MissionUtils.Console.readLineAsync(
      STRINGS.BONUS_NUMBER
    );
    // Validation.validateBonusNumber(answerNumbers, INPUT_BONUS_NUMBER);
    return { answers, INPUT_BONUS_NUMBER };
  }

  async getResult(lottos, answers, bonusNumber) {
    const results = [];
    for (let i = 0; i < lottos.length; i++) {
      const { match, bonus } = this.calculateScore(
        lottos[i],
        answers,
        bonusNumber
      );
      results.push({ match, bonus });
    }
    return results;
  }

  async calculateScore(lotto, answers, bonusNumber) {
    let match = 0;
    let bonus = false;
    answers.forEach((answer) => {
      if (lotto.hasAnswer(answer)) {
        match += 1;
      }
    });

    if (lotto.hasBonusNumber(bonusNumber)) {
      bonus = true;
    }
    return { match, bonus };
  }

  async calculateMatches(results, lottoAmount) {
    const matchCounts = {
      3: 0,
      4: 0,
      5: 0,
      5_1: 0,
      6: 0,
    };
    results.forEach((result) => {
      const { match, bonus } = result;
      if (match === 5 && bonus) {
        matchCounts[5_1] += 1;
      } else {
        matchCounts[match] += 1;
      }
    });
    return this.printResult(matchCounts, lottoAmount);
  }

  async printResult(matchCounts, lottoAmount) {
    let totalReward = 0;
    MissionUtils.Console.print(STRINGS.RESULT_THREE_CORRECT(matchCounts[3]));
    totalReward += 5000 * matchCounts[3];
    MissionUtils.Console.print(STRINGS.RESULT_FOUR_CORRECT(matchCounts[4]));
    totalReward += 50000 * matchCounts[4];
    MissionUtils.Console.print(STRINGS.RESULT_FIVE_CORRECT(matchCounts[5]));
    totalReward += 1500000 * matchCounts[5];
    MissionUtils.Console.print(
      STRINGS.RESULT_FIVE_BONUS_CORRECT(matchCounts[5_1])
    );
    totalReward += 30000000 * matchCounts[5_1];
    MissionUtils.Console.print(STRINGS.RESULT_SIX_CORRECT(matchCounts[6]));
    totalReward += 2000000000 * matchCounts[6];
    return this.calculateRateOfReturn(totalReward, lottoAmount);
  }

  async calculateRateOfReturn(totalReward, lottoAmount) {
    const RATE = (totalReward / (lottoAmount * 1000)).toFixed(1);
    MissionUtils.Console.print(STRINGS.RATE_OF_RETURN(RATE));
  }
}

export default App;
