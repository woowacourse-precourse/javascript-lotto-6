import { ERROR_MESSAGE } from "../constants/error.js";

export function isValidAmount(amount){
  // 숫자 형식인지
  if (Number.isNaN(amount)) {
    throw new Error(ERROR_MESSAGE.notNumber);
  }

  // 음수가 아닌지
  if (amount <= 0) {
    throw new Error(ERROR_MESSAGE.isNegative);
  }

  // 1,000원으로 나누어 떨어지는지
  if(Number(amount) % 1000 !== 0) { 
    throw new Error(ERROR_MESSAGE.notDivideByLottoPrice);
  }
};

// 숫자 중복 체크
export function isDuplicate(nums){
  if(new Set(nums).size !== nums.length){
    throw new Error(ERROR_MESSAGE.isDuplicate)
  }
};

// 숫자 범위 체크
export function isNumberInRange(nums){
  if(nums.every(num => num < 1 && num > 45)){
    throw new Error(ERROR_MESSAGE.notValidLottoNumber)
  }
};

// 6개의 번호 체크
export function isSixLength(nums){
  if(nums.length !== 6){
    throw new Error(ERROR_MESSAGE.notSixLength)
  }
};