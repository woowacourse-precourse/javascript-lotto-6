const errorConstants = {
  NOT_A_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',
  NOT_EMPTY: '[ERROR] 공백 금지',
  WRONG_UNIT: '[ERROR] 1,000원 단위로만 입력 가능합니다.',
  NOT_ZERO: '[ERROR] 0 이외의 숫자만 가능합니다. (공백 금지)',
  NOT_IN_RANGE: '[ERROR] 1이상 45이하의 수만 가능합니다.',
  NOT_SAME_NUMBER: '[ERROR] 중복된 수는 입력할 수 없습니다.',
  WRONG_LENGTH: '[ERROR] 당첨번호는 6자리 입니다.',
  WRONG_INPUT:
    '[ERROR] 잘못된 형태입니다. \n 숫자 + ,(콤마) 형태로 입력해야 합니다. or 6자리를 입력해야 합니다. or 공백 금지',
  NOT_SAME_LOTTO_NUMBER:
    '[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.',
};
export default errorConstants;
