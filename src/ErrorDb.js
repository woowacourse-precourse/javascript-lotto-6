const ERROR_TEXT = '[ERROR]';
const ERROR = Object.freeze({
  WRONG_INPUT_TYPE: Error(`${ERROR_TEXT} 입력 형식에 오류가 있습니다.`),
  WRONG_AMOUNT_MONEY: Error(`${ERROR_TEXT} 구입 금액은 1000원 단위로 입력해주세요.`),
  INPUT_SIZE: Error(`${ERROR_TEXT} 숫자 6개를 입력해야 합니다.`),
  INPUT_RANGE: Error(`${ERROR_TEXT} 1~45 사이의 숫자만 가능합니다.`),
  WRONG_BONUS: Error(`${ERROR_TEXT} 중복된 보너스 번호입니다. `),

  STAGES: Object.freeze({
    WRONG_INPUT_TYPE: 10,
    WRONG_AMOUNT_MONEY: 11,
    INPUT_SIZE: 12,
    INPUT_RANGE: 13,
  }),

});

export default ERROR;
