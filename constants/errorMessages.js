const message = Object.freeze({
  invalidAmountFormat: '[ERROR] 입력하신 로또 구입금액이 잘못된 형식입니다.',
  lessMinimumAmount: '[ERROR] 최소 1,000원 이상 입력해주세요.',

  length: '[ERROR] 당첨 번호는 6개 입력해야 합니다.',
  notNumber: '[ERROR] 당첨 번호는 숫자를 입력해야 합니다.',
  notRange: '[ERROR] 당첨 번호는 1~45 사이의 값을 입력해야 합니다.',
  duplicate: '[ERROR] 당첨 번호에 중복된 숫자가 입력되었습니다.',
  
  invalidBonusNumber: '[ERROR] 보너스 번호는 숫자여야 합니다.',
});

const lotto = Object.freeze({
  count: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicate: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  type: '[ERROR] 로또 번호는 숫자로 이루어져야 합니다.',
});

export const ERROR_MESSAGES = Object.freeze({ message, lotto });
