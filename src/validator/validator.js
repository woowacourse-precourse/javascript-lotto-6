import { COMMON_ERROR_MESSAGE, PURCHASE_AMOUNT_ERROR_MESSAGE, UNIT, MAXIMUM, TOTAL_LOTTO_NUMBERS, BONUS_NUMBER_ERROR_MESSAGE, WINNING_NUMBERS_ERROR_MESSAGE } from "../constants/constants";

class Validator {
  isMoneyValid(input){
    const NUMERIC_MONEY = Number(input)

    if (input === 0) {
      return COMMON_ERROR_MESSAGE.emptyString
    }
    if (isNaN(NUMERIC_MONEY)) {
      return COMMON_ERROR_MESSAGE.onlyNumber
    }
    if (NUMERIC_MONEY % UNIT) {
      return PURCHASE_AMOUNT_ERROR_MESSAGE.wrongUnit
    }
    if (NUMERIC_MONEY < UNIT) {
      return PURCHASE_AMOUNT_ERROR_MESSAGE.underThousan
    }

    return undefined
  }

  isWinningNumbersValid(input) {
    const WINNINGS = String(input).split(',').map(Number)
    const MY_NUMBERS = WINNINGS.sort((a, b) => a + b).join('')
    const REMOVE_DUPLICATE_NUMBERS = [...new Set(WINNINGS)].sort((a, b) => a + b).join('')
    const FILTERED_NUMBERS = WINNINGS.filter(num => num < 1 || num > 45)
    
    if (!input) {
      return COMMON_ERROR_MESSAGE.emptyString
    }

    if (input[input.length - 1] === ',') {
      return WINNING_NUMBERS_ERROR_MESSAGE.detectedLastComma
    }
    
    if (WINNINGS.length > TOTAL_LOTTO_NUMBERS) {
     throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.wrongWinningNumber)
    }

    if (MY_NUMBERS !== REMOVE_DUPLICATE_NUMBERS) {
      throw new Error(COMMON_ERROR_MESSAGE.detectedDuplicate)
    }

    if (FILTERED_NUMBERS.length) {
      return COMMON_ERROR_MESSAGE.wrongRange
    }

    return undefined
  }
}

export default Validator;