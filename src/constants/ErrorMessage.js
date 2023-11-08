const ERROR_MESSAGE = {
  IS_NOT_NUMBER: '[ERROR]: 숫자가 아닌 입력이 들어왔습니다.',
  IS_NOT_DIVIDED_THOUSAND: '[ERROR]: 1000원 단위의 입력이 아닙니다.',
  EMPTY_INPUT: '[ERROR]: 빈 입력이 포함되어있습니다.',
  NOT_LOTTO_NUMBER_RANGE: '[ERROR]: 로또 숫자는 1부터 45까지 허용됩니다.',
  DUPLICATE_NUMBER: '[ERROR]: 중복된 숫자가 존재합니다.',
  DUPLICATE_BONUS_NUMBER: '[ERROR]: 보너스 번호가 로또 번호에 이미 존재합니다.',
  TOO_MUCH_TICKETS:
    '[ERROR]: 현행법상 로또는 인당 10만원까지 구매로 제한됩니다.',
  NOT_SIX_DIGITS: '[ERROR] 로또 번호는 6개여야 합니다.',
  NOT_NATURAL_NUMBER: '[ERROR]: 자연수가 아닌 입력이 들어왔습니다.',
};

Object.freeze(ERROR_MESSAGE);

export default ERROR_MESSAGE;
