import { MissionUtils } from '@woowacourse/mission-utils';
import { STRINGS } from './constants/STRINGS';
import Validation from './Validation';
import Lotto from './Lotto';

class App {
  async play() {
    this.startGame();
  }

  async startGame() {
      this.getLottoAmount();
      this.getAnswerNumbers();
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
  }

  async getAnswerNumbers(){
    const ANSWER_NUMBERS = await MissionUtils.Console.readLineAsync(STRINGS.ANSWER_NUMBERS);
    Validation.validateAnswerNumbersComma(ANSWER_NUMBERS);
    Validation.repeatedAnswerNumbers(ANSWER_NUMBERS);
    Validation.validateNumbersLength(ANSWER_NUMBERS);
    return this.getBonusNumber(ANSWER_NUMBERS);
  }

  async getBonusNumber(answerNumbers){
    const INPUT_BONUS_NUMBER = await MissionUtils.Console.readLineAsync(STRINGS.BONUS_NUMBER);
    Validation.validateBonusNumber(answerNumbers, INPUT_BONUS_NUMBER);
  }
}

export default App;
