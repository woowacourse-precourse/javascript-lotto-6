import { Console } from '@woowacourse/mission-utils';
// import App from './App';
class Lotto {
  #numbers;
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    return this.#duplicateCheck(numbers);
  }
  #duplicateCheck(numbers) {
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== 6)
      throw new Error('[ERROR] 로또 번호는 중복이 아니어야 합니다.');
    // const bonusNumber = await this.#inputBonusNumber();
    // console.log(numbers, bonusNumber);
    // this.#validateNumbersBonusNumber(numbers, bonusNumber);
    // return [numbers, bonusNumber];
    // return this.inputBonusNumber(numbers);
  }
  getNumbers() {
    return this.#numbers;
  }
  // async inputBonusNumber(numbers) {
  //   const bonusNumber = await Console.readLineAsync(
  //     '보너스 번호를 입력해 주세요.'
  //   );
  //   this.#validateBonusNumber(numbers, bonusNumber);
  //   this.#validateNumbersBonusNumber(numbers, bonusNumber);
  //   // console.log(numbers, bonusNumber);
  //   return [numbers, bonusNumber];
  // }
  // #validateBonusNumber(numbers, bonusNumber) {
  //   try {
  //     // const app = new App();
  //     // app.checkNumbers(bonusNumber);
  //     this.#che(bonusNumber);
  //     return bonusNumber;
  //   } catch (error) {
  //     Console.print(error);
  //     this.inputBonusNumber(numbers);
  //   }
  // }
  // #che(winningNumbers) {
  //   if (isNaN(winningNumbers)) {
  //     throw new Error('[ERROR] 숫자만 입력 가능합니다.');
  //   }
  //   if (Number(winningNumbers) < 1 || Number(winningNumbers) > 45)
  //     throw new Error('[ERROR] 숫자는 1~45사이의 숫자만 입력 가능합니다.');
  // }
  // #validateNumbersBonusNumber(numbers, bonusNumber) {
  //   try {
  //     if (numbers.includes(Number(bonusNumber)))
  //       throw new Error('[ERROR] 보너스 번호는 중복이 아니어야 합니다.');
  //   } catch (error) {
  //     Console.print(error);
  //     this.inputBonusNumber(numbers);
  //   }
  // }
  // TODO: 추가 기능 구현
}
const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
export default Lotto;
