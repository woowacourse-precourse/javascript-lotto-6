import { MissionUtils } from '@woowacourse/mission-utils';
import { LottoMachine } from './LottoMachine.js';
import { Lotto } from './Lotto.js';
import { CommonError } from './CommonError.js';

export class LottoGame {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.playerLottos;
    this.bonusNumber;
    this.winningNumbers;
  }

  async buyLottos() {
    const cash = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
    this.playerLottos = this.lottoMachine.buyLottos(Number(cash));
  }

  async winLottos() {
    const winningNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
    this.winningNumbers = new Lotto(
      winningNumbers.split(',').map((number) => Number(number)),
    ).numbers;
  }

  async isBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
    this.#bonusNumberValidate(bonusNumber.split(','));
    this.bonusNumber = Number(bonusNumber);
  }

  #bonusNumberValidate(number) {
    this.#validateSingleNumber(number);
    const isNumber = Number(number[0]);
    this.#validateBonusNumber(isNumber);
  }

  #validateSingleNumber(number) {
    if (number.length !== 1) {
      throw new Error('[ERROR] 하나의 입력이 아닙니다.');
    }
  }

  #validateBonusNumber(isNumber) {
    if (this.winningNumbers.includes(isNumber)) {
      throw new Error('[ERROR] 당첨 번호와 중복된 숫자가 있습니다.');
    }

    const numberError = new CommonError();
    numberError.numberError(isNumber);
  }
}
