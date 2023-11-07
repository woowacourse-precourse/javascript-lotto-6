import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./Text.js";

// 2. 구매금액 입력값 유효성 검사
export const validateMoney = (money) => {
  if (money % 1000 !== 0 || isNaN(money)) {
    throw new Error(ERROR_MESSAGE.MONEY);
  }
  return true;
};

// 당첨 및 보너스 번호 사용자에게 받아서 유효한 숫자 범위인지 확인하는 기능
const checkValidRange = (numbers, errorMessage) => {
  numbers.map((el) => {
    if (el > 45 || el < 1) throw new Error(`${errorMessage}`);
  });
};

// 9. 당첨번호 유효성 검사
export const validateWinningNumber = (input) => {
  // console.log("type", typeof input);
  let numbers = input.split(",").map((el) => Number(el));
  const setNumbers = new Set(numbers);

  if (numbers.length !== 6 || numbers.length !== setNumbers.size) {
    throw new Error(`${ERROR_MESSAGE.LOTTO_NUMBER}`);
  }
  checkValidRange(numbers, ERROR_MESSAGE.NUMBER_RANGE);

  return numbers;
};

// 9-1 당첨번호 에러상황에 따른 에레메세지
export const winningNumberErrorCase = (error) => {
  switch (error) {
    case `${ERROR_MESSAGE.WINNING_NUMBER}`:
      Console.print(`${ERROR_MESSAGE.WINNING_NUMBER}`);
      break;
    case `${ERROR_MESSAGE.NUMBER_RANGE}`:
      Console.print(`${ERROR_MESSAGE.NUMBER_RANGE}`);
      break;
    default:
      Console.print(`${ERROR_MESSAGE.WINNING_NUMBER}`);
  }
};

// 11. 보너스 번호 유효성 검사
export const validateBonus = (input, winningNumbers) => {
  let bonus = input.split(",").map((el) => Number(el));

  if (bonus.length !== 1) {
    throw new Error(`${ERROR_MESSAGE.BONUS_NUMBER}`);
  }
  // 당첨 번호와 중복되는지
  if (winningNumbers.includes(Number(input))) {
    throw new Error(`${ERROR_MESSAGE.BONUS_NUMBER_DUBLE_CHECK}`);
  }

  checkValidRange(bonus, ERROR_MESSAGE.BONUS_NUMBER);

  return bonus;
};

// 11-1 보너스번호 에러상황에 따른 메세지
export const bonusNumberErrorCase = (error) => {
  switch (error) {
    case `${ERROR_MESSAGE.BONUS_NUMBER}`:
      Console.print(`${ERROR_MESSAGE.BONUS_NUMBER}`);
      break;
    case `${ERROR_MESSAGE.BONUS_NUMBER_DUBLE_CHECK}`:
      Console.print(`${ERROR_MESSAGE.BONUS_NUMBER_DUBLE_CHECK}`);
      break;
    default:
      Console.print("[ERROR]");
  }
};
