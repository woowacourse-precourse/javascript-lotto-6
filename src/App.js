import { MissionUtils } from '@woowacourse/mission-utils';
import { STRINGS } from './constants/STRINGS';
import Validation from './Validation';
import Lotto from './Lotto';

class App {
  async play() {
    this.startGame();
  }

  async startGame() {
      const lottos = this.getLottoAmount();
      const answers= this.getAnswerNumbers();
      this.getResult(lottos, answers);
  }

  async getLottoAmount(){
    const INPUT_LOTTO_AMOUNT = await MissionUtils.Console.readLineAsync(STRINGS.PAY_INPUT);
    return this.countLottoAmount(INPUT_LOTTO_AMOUNT);
  }

  async countLottoAmount(inputLottoAmount){
    Validation.validateInputPrice(inputLottoAmount);
    const LOTTO_AMOUNT = inputLottoAmount / 1000;
    MissionUtils.Console.print(STRINGS.PAY_RESULT(LOTTO_AMOUNT));
    return this.createLottos(LOTTO_AMOUNT);
  }

  async createLottos(lottoAmount){
    const lottos = [];
    for (i = 0; i < lottoAmount; i++){
        const RANDOM_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        lottos.push(new Lotto(RANDOM_NUMBERS));
    }
    return lottos;
  }

  async getAnswerNumbers(){
    const ANSWER_NUMBERS = await MissionUtils.Console.readLineAsync(STRINGS.ANSWER_NUMBERS);
    Validation.validateAnswerNumbersComma(ANSWER_NUMBERS);
    Validation.repeatedAnswerNumbers(ANSWER_NUMBERS);
    Validation.validateNumbersLength(ANSWER_NUMBERS);
    return this.getBonusNumber(ANSWER_NUMBERS);
  }

  async getBonusNumber(answerNumbers){
    const answers = [];
    const INPUT_BONUS_NUMBER = await MissionUtils.Console.readLineAsync(STRINGS.BONUS_NUMBER);
    Validation.validateBonusNumber(answerNumbers, INPUT_BONUS_NUMBER);
    answers.push(answerNumbers);
    answers.push(INPUT_BONUS_NUMBER);
    return answers;
  }

  async getResult(lottos, answers){
    const matches = [];
    const bonuses = [];
    for(i = 0; i < lottos.length; i++){
      const {match, bonus} = this.calculateScore(lottos[i], answers);
      matches.push(match);
      bonuses.push(bonus);
    }
    return this.calculateMatches(matches, bonuses);
  }

}

export default App;
