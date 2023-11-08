import { Console } from '@woowacourse/mission-utils';

const INPUT_MONEY_MESSAGE = '구입금액을 입력해 주세요.\n';
const INPUT_LOTTO_NUMBERS_MESSAGE = '당첨 번호를 입력해 주세요.\n';
const INPUT_BONUS_NUMBER_MESSAGE = '보너스 번호를 입력해 주세요.\n';
class InputView {
  static async inputMoney() {
    const userInputMoney = await Console.readLineAsync(INPUT_MONEY_MESSAGE);
    try {
      this.validateMoney(userInputMoney);
    } catch (error) {
      Console.print(error.message);
      return this.inputMoney();
    }
    const money = Number(userInputMoney);

    return money;
  }

  static async inputLottoNumbers() {
    const userInputLottoNumbers = await Console.readLineAsync(INPUT_LOTTO_NUMBERS_MESSAGE);
    try {
      this.validateLottoNumbers(userInputLottoNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.inputLottoNumbers();
    }
    const stringLottoNumbers = userInputLottoNumbers.split(',');
    const lottoNumbers = stringLottoNumbers.map(number => Number(number));

    return lottoNumbers;
  }

  static async inputBonusNumber(winnersNumbers) {
    const userInputBonusNumber = await Console.readLineAsync(INPUT_BONUS_NUMBER_MESSAGE);
    try {
      this.validateBonusNumber(userInputBonusNumber, winnersNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber(winnersNumbers);
    }
    const bonusNumber = Number(userInputBonusNumber);

    return bonusNumber;
  }

  static validateMoney(input) {
    const testMoney = Number(input);
    if (Number.isInteger(testMoney) === false) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.\n');
    }
    if (testMoney < 1000) {
      throw new Error('[ERROR] 구입 금액은 1000원 이상이어야 합니다.\n');
    }
    if (testMoney % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위여야 합니다.\n');
    }
  }

  static validateLottoNumbers(input) {
    const testLottoNumbers = input.split(',');

    if (testLottoNumbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(testLottoNumbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
    if (testLottoNumbers.some(number => Number(number) < 1 || Number(number) > 45)) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.');
    }
    if (testLottoNumbers.some(number => Number.isInteger(Number(number)) === false)) {
      throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
    }
  }

  static validateBonusNumber(input, winnerNumbers) {
    if (Number.isInteger(Number(input)) === false) {
      throw new Error('[ERROR] 보너스 번호는 정수여야 합니다.');
    }
    if (Number(input) < 1 || Number(input) > 45) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.');
    }
    if (winnerNumbers.includes(Number(input))) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}
export default InputView;
