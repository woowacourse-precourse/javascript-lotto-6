import {
  FIFTH_PRIZE,
  FIFTH_PRIZE_CORRECT,
  FIRST_PRIZE,
  FIRST_PRIZE_CORRECT,
  FOURTH_PRIZE,
  FOURTH_PRIZE_CORRECT,
  LOTTO_LENGTH,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  SECOND_PRIZE,
  SECOND_THIRD_PRIZE_CORRECT,
  THIRD_PRIZE,
} from "../constant/Constant";
import errorMessage from "../constant/ErrorMessage";

/**
 * 입력받은 당첨 번호에 대한 유효성 검사를 하고 당첨 결과를 구하는 클래스
 */
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#convertNumber(numbers);
    this.#sortNumbers();
  }

  /**
   * 길이오류, 중복오류, 타입오류, 범위오류 유효성 검사
   * @param {Array} numbers 입력받은 당첨 번호를 담은 배열
   */
  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      errorMessage.lengthError();
    }
    if (new Set(numbers).size !== LOTTO_LENGTH) {
      errorMessage.duplicateError();
    }
    numbers.forEach((number) => {
      if (Number.isNaN(+number)) {
        errorMessage.typeError();
      }
      if (+number < LOTTO_MIN_NUMBER || +number > LOTTO_MAX_NUMBER) {
        errorMessage.numberRangeError();
      }
    });
  }

  /**
   * 당첨 숫자들의 형변환을 하는 함수
   * @param {Array} numbers 문자형 당첨 숫자 배열
   * @returns {Array} numbers 숫자형 당첨 숫자 배열
   */
  #convertNumber(numbers) {
    return numbers.map((number) => +number);
  }

  /**
   * 당첨 숫자들을 정렬하는 함수
   */
  #sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  /**
   * 랜덤 생성된 로또 숫자와 당첨 숫자의 일치 갯수를 구하는 함수
   * @param {Array} randomNumber 랜덤 로또 숫자 배열
   * @returns {Number} countCorrect 랜덤 로또 숫자, 당첨 숫자의 일치 갯수
   */
  #compareNumbers(randomNumber) {
    let countCorrect = 0;
    let inputNumberPointer = 0;
    let randomNumberPointer = 0;
    while (inputNumberPointer < LOTTO_LENGTH && randomNumberPointer < LOTTO_LENGTH) {
      if (+this.#numbers[inputNumberPointer] > +randomNumber[randomNumberPointer]) {
        randomNumberPointer += 1;
      } else if (+this.#numbers[inputNumberPointer] < +randomNumber[randomNumberPointer]) {
        inputNumberPointer += 1;
      } else if (+this.#numbers[inputNumberPointer] === +randomNumber[randomNumberPointer]) {
        countCorrect += 1;
        inputNumberPointer += 1;
        randomNumberPointer += 1;
      }
    }
    return countCorrect;
  }

  /**
   * 같은 숫자가 5개일 때 보너스 번호를 포함하는지 유무를 구하는 함수
   * @param {Array} randomNumber 랜덤 로또 숫자
   * @param {Number} bonusNumber 보너스 번호
   * @returns {Boolean} 보너스 번호 포함 유무
   */
  #includeBonus(randomNumber, bonusNumber) {
    return randomNumber.includes(bonusNumber);
  }

  /**
   * 숫자 비교 결과와 보너스 번호를 통해 등수를 구하는 함수
   * @param {Number} compareResult 당첨 숫자와 랜덤 로또 숫자의 일치 갯수
   * @param {Array} randomNumber 랜덤 로또 숫자
   * @param {Number} bonusNumber 보너스 번호
   * @returns {String} 등수
   */
  #getPrize(compareResult, randomNumber, bonusNumber) {
    if (compareResult === FIRST_PRIZE_CORRECT) {
      return "first";
    } else if (compareResult === SECOND_THIRD_PRIZE_CORRECT && this.#includeBonus(randomNumber, bonusNumber)) {
      return "second";
    } else if (compareResult === SECOND_THIRD_PRIZE_CORRECT) {
      return "third";
    } else if (compareResult === FOURTH_PRIZE_CORRECT) {
      return "fourth";
    } else if (compareResult === FIFTH_PRIZE_CORRECT) {
      return "fifth";
    }
    return null;
  }

  /**
   * 랜덤 생성 로또 번호들의 당첨 결과를 구하고 등수를 담은 객체를 반환하는 함수
   * @param {Array} randomNumbers 랜덤 생성 로또 번호들
   * @param {Number} bonusNumber 보너스 번호
   * @returns {Object} result 등수를 담은 객체
   */
  winningResult(randomNumbers, bonusNumber) {
    const result = Object.seal({ first: 0, second: 0, third: 0, fourth: 0, fifth: 0 });
    for (const randomNumber of randomNumbers) {
      const compareResult = this.#compareNumbers(randomNumber);
      const prize = this.#getPrize(compareResult, randomNumber, bonusNumber);
      if (prize) {
        result[prize] += 1;
      }
    }
    return result;
  }

  /**
   * 수익률을 반환하는 함수
   * @param {String} purchaseAmount 구매 금액
   * @param {Object} winningResult 당첨 등수를 담은 객체
   * @returns {String} rate 소숫점 둘째자리에서 반올림한 수익률
   */
  rateResult(purchaseAmount, winningResult) {
    const totalPrize =
      winningResult.first * FIRST_PRIZE +
      winningResult.second * SECOND_PRIZE +
      winningResult.third * THIRD_PRIZE +
      winningResult.fourth * FOURTH_PRIZE +
      winningResult.fifth * FIFTH_PRIZE;

    const rate = (totalPrize / +purchaseAmount) * 100;
    return rate.toFixed(1);
  }
}

export default Lotto;
