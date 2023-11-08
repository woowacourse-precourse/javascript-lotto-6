const Errors = Object.freeze({
  HAS_SPACE: '[ERROR] 공백 없이 입력해 주세요.',
  NOT_NUMBER: '[ERROR] 숫자만 입력해 주세요.',
  IS_NOT_PLUS: '[ERROR] 양수만 입력해 주세요.',
  IS_NOT_THOUSAND_UNIT: '[ERROR] 1000원 단위로만 입력해주세요.',
  IS_NOT_IN_RANGE: '[ERROR] 1~45 사이의 숫자만 입력해주세요.',
  IS_NOT_INTEGER: '[ERROR] 정수만 입력해주세요.',
  IS_NOT_DUPLICATED: '[ERROR] 중복된 숫자가 없이 입력해주세요.',
  IS_NOT_PROPER_LENGTH: '[ERROR] 길이가 6이어야 합니다.',
  IS_NOT_SORTED: '[ERROR] 오름차순으로 정렬되어 있어야 합니다.'
});

export default Errors;