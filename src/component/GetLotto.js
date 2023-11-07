import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { NUMBER, TEXT } from './Data.js';
import MatchingLotto from './MatchingLotto.js';
import PrizeValidator from './PrizeValidator.js';

class GetLotto {
  constructor() {
    this.inputNumber = '';
    this.inputNumberList = [];
    this.inputBounsNumber = 0;
    this.inputAmount = 0;
    this.lottoNumber = 0;
    this.lottoCount = 0;
  }

  lottoRandomNumber() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(
      NUMBER.MIN_LOTTO_NUMBER,
      NUMBER.MAX_LOTTO_NUMBER,
      NUMBER.LOTTO_LENGTH,
    );
    number.sort((a, b) => a - b);
    return number;
  }

  async outputNumber() {
    MissionUtils.Console.print(`${this.lottoCount}${TEXT.OUTPUT_NUMBER}`);
    this.lottoNumber.forEach((numbers) =>
      MissionUtils.Console.print(`[${numbers.join(', ')}]`),
    );
    await this.lottoNumberGet();
    this.matchingCalculator();
  }

  output() {
    this.lottoCount = this.inputAmount / NUMBER.INITIAL_AMOUNT;
    this.lottoNumber = Array.from({ length: this.lottoCount }, () =>
      this.lottoRandomNumber(),
    );
    this.outputNumber();
  }

  async lottoNumberGet() {
    this.inputNumber = await MissionUtils.Console.readLineAsync(
      TEXT.INPUT_NUMBER,
    );
    this.inputNumberList = this.inputNumber.split(',').map((number) => +number);
    this.inputBounsNumber = Number(
      await MissionUtils.Console.readLineAsync(TEXT.INPUT_BONUS),
    );
    const lottoValidate = new Lotto(
      this.inputNumberList,
      this.inputBounsNumber,
    );
  }

  async lottoAmountGet() {
    try {
      this.inputAmount = await MissionUtils.Console.readLineAsync(
        TEXT.INPUT_AMOUNT,
      );
      if (this.inputAmount % NUMBER.INITIAL_AMOUNT !== NUMBER.INIT_VALUE)
        throw new Error(TEXT.AMOUNT_ERROR);
      this.output();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.lottoAmountGet();
    }
  }

  PrizeCalculator(matchingNumber, matchingBonus) {
    const validator = new PrizeValidator();
    validator.validate(matchingNumber, matchingBonus, this.inputAmount);
  }

  matchingCalculator() {
    const matchingLotto = new MatchingLotto(
      this.inputNumberList,
      this.inputBounsNumber,
      this.lottoNumber,
    );
    const [matchingNumber, matchingBonus] = matchingLotto.matching();
    this.PrizeCalculator(matchingNumber, matchingBonus, this.inputAmount);
  }

  async lotto() {
    await this.lottoAmountGet();
  }
}

export default GetLotto;
