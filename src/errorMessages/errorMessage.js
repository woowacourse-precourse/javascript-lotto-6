const MONEY_ERROR = Object.freeze({
  none: '[ERROR] 금액을 입력하세요.',
  type: '[ERROR] 숫자 타입의 금액을 입력하세요.',
  divide1000: '[ERROR] 천 단위로 나누어지는 금액을 입력하세요.',
  over1000: '[ERROR] 1000 이상의 숫자를 입력하세요.',
});

const LOTTO_ERROR = Object.freeze({
  none: '[ERROR] 로또 번호를 입력하세요.',
  type: '[ERROR] 로또 번호는 숫자로 입력하세요.',
  range: '[ERROR] 1~45 사이의 로또 번호를 입력하세요.',
  digits: '[ERROR] 6개의 로또 번호를 입력하세요.',
  duplication: '[ERROR] 로또 번호에 중복이 있습니다.',
});

module.exports = { MONEY_ERROR, LOTTO_ERROR };
