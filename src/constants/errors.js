import { ERROR_CONVENTION } from "./conventions.js";

export const ERROR_MESSAGE = Object.freeze({
  isNumberDuplicated: `${ERROR_CONVENTION} 중복된 숫자가 있습니다.`,
  isEmpty: `${ERROR_CONVENTION} 입력받은 값이 존재하지 않습니다.`,
  typeDismatching: `${ERROR_CONVENTION} 유효하지 않는 타입입니다.`,
  arrHasTypeDismatching: `${ERROR_CONVENTION} 유효하지 않는 타입의 값이 존재합니다.`,
  winningCount: `${ERROR_CONVENTION} 입력된 당첨번호의 개수가 올바르지 않습니다.`,
  hasEmpty: `${ERROR_CONVENTION} 입력받은 값에 공백이 존재합니다.`,
  hasChanges: `${ERROR_CONVENTION} 잔돈이 존재합니다.`,
  incorrectPrecision: `${ERROR_CONVENTION} 올바른 정확도(소숫점)가 아닙니다.`,
  outOfRange: `${ERROR_CONVENTION} 올바른 범위의 값을 입력해야 합니다.`,
  isNumberExists: `${ERROR_CONVENTION} 이미 존재하는 번호입니다.`,
});
