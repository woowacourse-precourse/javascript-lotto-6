import STRINGS from './constants/STRINGS';
class Validation {
  static validateInputPrice(inputPrice) {
    if (inputPrice % 1000 !== 0) {
      throw new Error(STRINGS.ERROR_UNIT);
    }
  }

  static validateAnswerNumbersComma(answerNumbers) {
    if (!answerNumbers.includes(',')) {
      throw new Error(STRINGS.ERROR_COMMA);
    }
  }

  static validateRepeatedNumbers(testNumbers) {
    // const testArray = [...testNumbers];
    // const SET_ANSWERS = new Set(testArray);
    // if (testNumbers.length !== SET_ANSWERS.size) {
    //   throw new Error(STRINGS.ERROR_REPEATED);
    // }
    const setAnswers = new Set();
    for (const number of testNumbers) {
      if (setAnswers.has(number)) {
        throw new Error(STRINGS.ERROR_REPEATED);
      }
      setAnswers.add(number);
    }
  }

  static repeatedAnswerNumbers(answerNumbers) {
    const PARSED_ANSWERS = answerNumbers.split(',');
    this.validateRepeatedNumbers(PARSED_ANSWERS);
  }

  static validateNumbersLength(randomNumbers) {
    if (randomNumbers.length !== 6) {
      throw new Error(STRINGS.ERROR_LENGTH);
    }
  }

  static validateRandomNumbers(randomNumbers) {
    this.validateNumbersLength(randomNumbers);
    this.validateRepeatedNumbers(randomNumbers);
    for (let i = 0; i < randomNumbers.length; i++) {
      this.validateRangeNumbers(randomNumbers[i]);
    }
  }

  static validateRangeNumbers(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(STRINGS.ERROR_RANGE);
    }
  }

  static validateBonusNumber(answerNumbers, inputBonusNumber) {
    const compareNumberArray = [...answerNumbers, Number(inputBonusNumber)];
    this.validateRepeatedNumbers(compareNumberArray);
    this.validateRangeNumbers(inputBonusNumber);
  }
}

export default Validation;
