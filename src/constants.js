export const MESSAGE = {
  // 출력 메시지
  ERROR: "[ERROR]",
};

export const ERROR_MESSAGE = {
  NOT_NUMBER: `${MESSAGE.ERROR} 로또 번호가 숫자가 아닙니다.`,
  EMPTY_NUMBER: `${MESSAGE.ERROR} 로또 번호가 입력되지 않았습니다.`,
  DUPLICATE_NUMBER: `${MESSAGE.ERROR} 로또 번호가 중복되었습니다.`,
  OVER_LENGTH_NUMBER: `${MESSAGE.ERROR} 로또 번호는 6개여야 합니다.`,
  SPACE_NUMBER: `${MESSAGE.ERROR} 로또 번호에 공백이 존재합니다.`,
  OVER_NUMBER: `${MESSAGE.ERROR} 로또 번호는 1~45 사이여야 합니다.`,

  EMPTY_PRICE: `${MESSAGE.ERROR} 입력 금액이 비어있습니다`,
  NOT_NUMBER_PRICE: `${MESSAGE.ERROR} 입력 금액이 숫자가 아닙니다`,
  UNDER_PRICE: `${MESSAGE.ERROR} 입력 금액이 1000원 미만입니다`,
  NOT_PRICE: `${MESSAGE.ERROR} 입력 금액이 1000원 단위가 아닙니다`,
};

export const NUMBER = {};
